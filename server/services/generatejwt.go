package utils

import (
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/joho/godotenv"
)

func generateJWT(userID int) (string, error) {
	err := godotenv.Load(".env")
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"userID": userID,
		"exp":    time.Now().Add(time.Hour * 24).Unix(), // Token expires in 24 hours
	})
	tokenString, err := token.SignedString("jwtKey")
	if err != nil {
		return "", err
	}
	return tokenString, nil
}
