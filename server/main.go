package main

import (
	"fmt"
	"os"

	"github.com/joho/godotenv"
	"github.com/seew0/homiespace/db"
	"github.com/seew0/homiespace/routes"
)

func init(){
	err := godotenv.Load(".env")
	if err != nil{
		panic(err)
	}
}

func main() {
	db.Dbinit()
	port := os.Getenv("PORT")
	server := routes.NewServer(port)
	server.Run()
	fmt.Println("Server is serving at port 4000")
}
