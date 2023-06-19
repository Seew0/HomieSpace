package controller

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/seew0/homiespace/db"
	"github.com/seew0/homiespace/models"
)

func CreateListing(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	var house models.House

	_ = json.NewDecoder(r.Body).Decode(&house)
	fmt.Println(house)
	db.InsertHouseIntoDB(&house)
	json.NewEncoder(w).Encode(house)
}
