package routes

import (
	"fmt"

	"github.com/gin-gonic/gin"
	"github.com/seew0/homiespace/controller"
	"github.com/seew0/homiespace/middleware"
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
	apiserver := gin.Default()

	gin.SetMode(gin.ReleaseMode)

	apiserver.Use(middleware.CORSmanager)

	apiserver.GET("/api", func(ctx *gin.Context) {
		controller.Welcome(ctx)
	})

	apiserver.POST("/api/createuser", func(ctx *gin.Context) {
		controller.CreateUser(ctx)
	})
	apiserver.POST("/api/verifycredential", func(ctx *gin.Context) {
		controller.Verifycredential(ctx)
	})
	apiserver.POST("/api/addlisting", func(ctx *gin.Context) {
		controller.AddListing(ctx)
	})
	apiserver.POST("/api/createrent",func(ctx *gin.Context) {
		controller.CreateRent(ctx)
	})
	
	fmt.Println("Server is running at port: ", s.port)

	err := apiserver.Run(s.port)
	if err != nil {
		panic(err)
	}

}
