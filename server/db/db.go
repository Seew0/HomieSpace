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

func Connect() *gorm.DB{
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	uri := os.Getenv("ElephantSqlURI")
	Db, err := gorm.Open(postgres.Open(uri), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to Db: ", err)
	}

	fmt.Println("Connected to db")
	return Db
}

func (d *DB) MigrateModels(){
	Db, err := gorm.Open(postgres.Open(d.uri), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to Db: ", err)
	}

	err = Db.AutoMigrate(&models.User{}, &models.House{}, &models.Rent{})
	if err != nil {
		log.Fatal("Failed to migrate the Db: ", err)
	}

	fmt.Println("Db setup sucessfull")
}

