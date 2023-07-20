package db

import (
	"fmt"
	"log"

	"github.com/seew0/homiespace/models"
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

func GetUserByID(userid uint ,data models.User) (error, string) {
	db := Connect()

	err := db.Select("username", "password", "id").Find(&data).Where("id = ?",userid).Error
	if err != nil {
		return err,""
	}
	// fmt.Println(data)
	return nil,data.Password
}
