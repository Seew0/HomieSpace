package controller

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/seew0/homiespace/db"
	"github.com/seew0/homiespace/models"
)


func Welcome(w http.ResponseWriter,r *http.Request){
	w.Header().Set("Content-Type","application/json")
	json.NewEncoder(w).Encode("welcome to this api visit different routes to get data")
}

func CreateHouse(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	var house models.House

	_ = json.NewDecoder(r.Body).Decode(&house)
	db.InsertHouseIntoDB(&house)
	fmt.Println(house)
	json.NewEncoder(w).Encode(house)
}
