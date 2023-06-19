package routes

import (
	"github.com/gorilla/mux"
	"github.com/seew0/homiespace/controller"
)

func Router() *mux.Router {
	router := mux.NewRouter()

	router.HandleFunc("/api", controller.Welcome).Methods("GET")
	router.HandleFunc("/api/create",controller.CreateListing).Methods("POST")

	return router
}
