package controller

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"regexp"
	"strconv"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
	"github.com/seew0/homiespace/db"
	"github.com/seew0/homiespace/middleware"
	"github.com/seew0/homiespace/models"
	"github.com/seew0/homiespace/services"
)

func Welcome(c *gin.Context) {
	var w http.ResponseWriter = c.Writer
	w.Header().Set("Content-Type", "application/json")
	c.IndentedJSON(http.StatusOK, nil)
	json.NewEncoder(w).Encode("welcome to this api visit different routes to get data")
}

func CreateHouse(c *gin.Context) {
	var w http.ResponseWriter = c.Writer
	var r *http.Request = c.Request
	w.Header().Set("Content-Type", "application/json")

	var property models.Property

	_ = json.NewDecoder(r.Body).Decode(&property)

	db.InsertHouseIntoDB(&property)
	// fmt.Println(property)

	response := struct {
		Message  map[string]any  `json:"message"`
		Property models.Property `json:"property"`
	}{
		Message:  gin.H{"status": "Property created successfully"},
		Property: property,
	}

	json.NewEncoder(w).Encode(response)
}

func CreateUser(c *gin.Context) {
	var w http.ResponseWriter = c.Writer
	var r *http.Request = c.Request

	var user models.User

	_ = json.NewDecoder(r.Body).Decode(&user)
	defer r.Body.Close()

	// Check if the data is of email type
	emailRegex := `^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`
	isEmail := regexp.MustCompile(emailRegex).MatchString(user.Email)

	if !isEmail {
		json.NewEncoder(w).Encode(struct {
			Status  int            `json:"status"`
			Message map[string]any `json:"message"`
		}{
			Status:  400,
			Message: gin.H{"error": "invalid email"},
		})
		return
	}

	if len(user.Password) == 0 {
		json.NewEncoder(w).Encode(struct {
			Status  int            `json:"status"`
			Message map[string]any `json:"message"`
		}{
			Status:  400,
			Message: gin.H{"error": "password empty"},
		})
		return
	}

	Hashedpassword, err := services.HashPassword(user.Password)
	if err != nil {
		log.Printf("Failed to Hash Password: %v", err)
		json.NewEncoder(w).Encode(struct {
			Status  int            `json:"status"`
			Message map[string]any `json:"message"`
		}{
			Status:  400,
			Message: gin.H{"error": "failed to hash password"},
		})
		return
	}
	user.Password = Hashedpassword

	fmt.Println(user)
	db.InsertUserIntoDB(&user)

	response := struct {
		Message map[string]any `json:"message"`
		User    models.User    `json:"user"`
	}{
		Message: gin.H{"status": "user created"},
		User:    user,
	}

	json.NewEncoder(w).Encode(response)
}

func CreateRent(c *gin.Context) {
	var w http.ResponseWriter = c.Writer
	var r *http.Request = c.Request

	w.Header().Set("Content-Type", "application/json")

	var booking models.Booking

	_ = json.NewDecoder(r.Body).Decode(&booking)
	defer r.Body.Close()

	fmt.Println(booking)
	db.InsertRentalIntoDB(&booking)

	response := struct {
		Message map[string]any `json:"message"`
		Booking models.Booking `json:"booking"`
	}{
		Message: gin.H{"status": "Booking created successfully"},
		Booking: booking,
	}

	json.NewEncoder(w).Encode(response)
}

func Verifycredential(c *gin.Context) {
	var user models.User

	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid request payload"})
		return
	}

	if len(user.Username) == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "empty username"})
		return
	}

	if len(user.Password) == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "empty password"})
		return
	}

	data := new(models.User)

	er, hashedpass := db.GetUserByID(user.ID, *data)
	if er != nil {
		log.Printf("Failed to retrieve user from the database: %v", er)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to retrieve user"})
		return
	}
	err := services.VerifyPassword(user.Password, hashedpass)
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "invalid password"})
		return
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"exp": json.Number(strconv.FormatInt(time.Now().Add(time.Hour*24).Unix(), 10)),
	})
	token.Header["kid"] = "KEY-IDENTIFIER"

	key := os.Getenv("jwtKey")
	// block, blocker := pem.Decode([]byte(key))
	// if block == nil {
	// 	fmt.Printf("errrrr :   %v", string(blocker))
	// 	c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to parse private key"})
	// 	return
	// }

	// signedKey, err := x509.ParsePKCS8PrivateKey(blocker)
	// if err != nil {
	// 	c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to parse private key throughh"})
	// 	return
	// }
	signedKey := []byte(key)
	tokenString, err := token.SignedString(signedKey)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to create token string"})
		return
	}

	http.SetCookie(c.Writer, &http.Cookie{
		Name:     "authentication",
		Value:    tokenString,
		Secure:   true,
		HttpOnly: true,
		SameSite: http.SameSiteNoneMode,
	})

	c.JSON(http.StatusOK, gin.H{"status": "login successful", "token": tokenString})
}

func logout(c *gin.Context) {
	if !middleware.VerifyAuth(c) {
		return
	}

	http.SetCookie(c.Writer, &http.Cookie{
		Name:     "authentication",
		Value:    "Logout",
		Expires:  time.Now(),
		Secure:   true,
		HttpOnly: true,
		SameSite: http.SameSiteNoneMode,
	})

	c.JSON(http.StatusOK, gin.H{"status": "logged out"})
}
