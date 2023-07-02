package controller

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/seew0/homiespace/db"
	"github.com/seew0/homiespace/models"
	"github.com/seew0/homiespace/services"
)
func enableCors(w *http.ResponseWriter) {
(*w).Header().Set("Access-Control-Allow-Origin", "*")
(*w).Header().Set("Access-Control-Allow-Headers","Content-Type")
(*w).Header().Set("Content-Type", "application/json")
}

func Welcome(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode("welcome to this api visit different routes to get data")
}

func CreateHouse(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	var property models.Property

	_ = json.NewDecoder(r.Body).Decode(&property)
	db.InsertHouseIntoDB(&property)
	fmt.Println(property)

	response := struct {
		Message  string          `json:"message"`
		Property models.Property `json:"property"`
	}{
		Message:  "Property created successfully",
		Property: property,
	}

	json.NewEncoder(w).Encode(response)
}

func CreateUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	
	enableCors(&w)
	// w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
	
	// w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	
	// Handle preflight requests
	// if r.Method == "OPTIONS" {
	// 	w.WriteHeader(http.StatusOK)
	// 	return
	// }

	var user models.User

	_ = json.NewDecoder(r.Body).Decode(&user)
	defer r.Body.Close()

	fmt.Println(user)
	db.InsertUserIntoDB(&user)

	response := struct {
		Message string      `json:"message"`
		User    models.User `json:"user"`
	}{
		Message: "User created successfully",
		User:    user,
	}

	json.NewEncoder(w).Encode(response)
}

func CreateRent(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	var booking models.Booking

	_ = json.NewDecoder(r.Body).Decode(&booking)
	defer r.Body.Close()

	fmt.Println(booking)
	db.InsertRentalIntoDB(&booking)

	response := struct {
		Message string         `json:"message"`
		Booking models.Booking `json:"booking"`
	}{
		Message: "Booking created successfully",
		Booking: booking,
	}

	json.NewEncoder(w).Encode(response)
}

func Verifycredential(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	var user models.User

	_ = json.NewDecoder(r.Body).Decode(&user)
	defer r.Body.Close()

	fmt.Println(user)
	hashedpass:= utils.GetHashedPassword(user)
	err := utils.VerifyPassword(user.Password,hashedpass)
	if err != nil {
		json.NewEncoder(w).Encode("wrong credentials")
	}

	token,err := utils.GenerateRandomToken(6)

	if err !=nil{
		log.Fatal("err while generating token")
	}

	response := struct{
		Message string `json:"message,omitempty"`
		Token string `json:"token,omitempty"`
	}{
		Message: "correct credentials",
		Token: token,
	}
	json.NewEncoder(w).Encode(response)
}
