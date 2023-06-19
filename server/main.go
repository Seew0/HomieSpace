package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/seew0/homiespace/db"
	"github.com/seew0/homiespace/routes"
)

func main() {
	db.Dbinit()

	r := routes.Router()

	fmt.Println("Starting Server")
	fmt.Println("Server is serving at port 4000")

	log.Fatal(http.ListenAndServe(":4000", r))

}
