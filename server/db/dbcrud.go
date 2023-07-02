package db

import (
	"fmt"
	"log"

	"github.com/seew0/homiespace/models"
	"github.com/seew0/homiespace/services"
)

func InsertHouseIntoDB(property *models.Property) {
	db := Connect()
	creation := db.Create(&property)

	if creation.Error != nil {
		log.Fatal("Failed to create property entry: ", creation.Error)
	}

	fmt.Println("SUCCESSFULLY CREATED HOUSE ENTRY: ", property)
}

func InsertUserIntoDB(user *models.User) {
	db := Connect()

	Password := user.Password
	Hashedpassword, err := utils.HashPassword(Password)
	if err != nil {
		log.Fatal("Failed to Hash Password: ", err)
	}
	user.Password = Hashedpassword

	create := db.Create(&user)
	if create.Error != nil {
		log.Fatal("Failed to create user entry: ", create.Error)
	}

	fmt.Println("sucessfully created entry: ", user)
}

func InsertRentalIntoDB(booking *models.Booking) {
	db := Connect()
	create := db.Create(&booking)

	if create.Error != nil {
		log.Fatal("Failed to create booking entry: ", create.Error)
	}

	fmt.Println("sucessfully created entry: ", booking)
}

func GetUserByID() ([]models.User, error) {
	db := Connect()

	var data []models.User

	err := db.Select("username", "password", "email").Find(&data).Error
	if err != nil {
		return nil, err
	}
	return data, nil
}
