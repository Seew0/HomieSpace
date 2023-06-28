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
	uri := os.Getenv("ElephantSqlURI")
	Db := db.NewDB(uri)
	Db.MigrateModels()
}

func main() {
	port := os.Getenv("PORT")
	server := routes.NewServer(port)
	server.Run()
}
