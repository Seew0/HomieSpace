package db

import (
	"fmt"
	"log"

	"github.com/seew0/homiespace/models"
)

func  InsertHouseIntoDB(house *models.House) {
	db := Connect()
	creation := db.Create(&house)

	if creation.Error != nil {
		log.Fatal("Failed to create house entry: ", creation.Error)
	}

	fmt.Println("SUCCESSFULLY CREATED HOUSE ENTRY: ", house)
}
