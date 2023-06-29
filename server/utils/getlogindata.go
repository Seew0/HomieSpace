package utils

import (
	"crypto/rand"
	"encoding/base64"

	"github.com/seew0/homiespace/models"
)

func GetHashedPassword(dataList models.User) string {
	hashedpass := dataList.Password
	return hashedpass
}

func GenerateRandomToken(length int) (string, error) {
	// Calculate the number of bytes needed for the given length of the token
	byteLength := (length * 3) / 4

	// Generate random bytes
	randomBytes := make([]byte, byteLength)
	_, err := rand.Read(randomBytes)
	if err != nil {
		return "", err
	}

	// Encode the random bytes using base64 URL encoding
	token := base64.URLEncoding.EncodeToString(randomBytes)

	// Trim the token to the desired length
	token = token[:length]

	return token, nil
}
