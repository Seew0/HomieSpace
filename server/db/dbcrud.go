package db

import "github.com/seew0/homiespace/models"

var db = Dbinit()


func InsertHouseIntoDB(house *models.House) {
	db.Create(house)
}
