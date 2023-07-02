package routes

import (
	"fmt"
	"log"
	"net/http"

	"github.com/seew0/homiespace/controller"
)

type Server struct {
	port string
}

func NewServer(port string) *Server {
	return &Server{
		port: port,
	}
}

func (s *Server) Run() {
	http.HandleFunc("/api", controller.Welcome)
	http.HandleFunc("/api/createuser",controller.CreateUser)
	http.HandleFunc("api/verifycredential",controller.Verifycredential)
	http.HandleFunc("/api/createhouse",controller.CreateHouse)
	http.HandleFunc("/api/createrent",controller.CreateRent)
	fmt.Println("Server is running at port: ",s.port)
	log.Fatal(http.ListenAndServe(s.port, nil))
}
