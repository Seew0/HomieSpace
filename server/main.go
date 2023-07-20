package main

import (
	"os"

	"github.com/joho/godotenv"
	"github.com/seew0/homiespace/db"
	"github.com/seew0/homiespace/routes"
)

func init() {
	err := godotenv.Load(".env")
	if err != nil {
		panic(err)
	}
}

func main() {
	uri := os.Getenv("ElephantSqlURI")
	port := os.Getenv("PORT")
	
	Db := db.NewDB(uri)
	Db.MigrateModels()
	
	server := routes.NewServer(port)
	server.Run()
}
