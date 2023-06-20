package routes

import (
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
	http.HandleFunc("/api/createlisting",controller.CreateListing)
	log.Fatal(http.ListenAndServe(s.port, nil))
}
