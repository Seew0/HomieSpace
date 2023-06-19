package db

import (
	"fmt"

	"github.com/seew0/homiespace/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func Dbinit() *gorm.DB{
	db, err := gorm.Open(postgres.New(postgres.Config{
		DSN: "host=localhost user=admin password=passwd dbname=postgres port=5010 sslmode=disable TimeZone=Asia/Kolkata",
		PreferSimpleProtocol: true, 
	  }), &gorm.Config{})

	if err != nil {
		panic("failed to connect database")
	}

	db.AutoMigrate(&models.House{})

	fmt.Println("connected")

	// CreateEntry(db)

	// fmt.Println("created")
	return db
}
