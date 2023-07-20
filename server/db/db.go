package db

import (
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"github.com/seew0/homiespace/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type DB struct {
	uri string
}

func NewDB(uri string) *DB {
	return &DB{
		uri: uri,
	}
}

func Connect() *gorm.DB {
	err := godotenv.Load(".env")
	uri := os.Getenv("ElephantSqlURI")
	Db, err := gorm.Open(postgres.Open(uri), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to Db: ", err)
	}

	fmt.Println("Connected to db")
	return Db
}

func (d *DB) MigrateModels() {
	Db, erro := gorm.Open(postgres.Open(d.uri), &gorm.Config{})
	if erro != nil {
		log.Fatal("Failed to connect to DB: ", erro)
	}

	err := Db.AutoMigrate(&models.User{}, &models.Property{}, &models.Booking{})
	if err != nil {
		log.Fatal("Failed to migrate the Db: ", err)
	}

	fmt.Println("Db setup successfully")
}
