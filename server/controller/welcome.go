package controller

import (
	"encoding/json"
	"net/http"
)

func Welcome(w http.ResponseWriter,r *http.Request){
	w.Header().Set("Content-Type","application/json")
	json.NewEncoder(w).Encode("welcome to this api visit different routes to get data")
}