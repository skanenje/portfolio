package main

import (
	"log"
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Printf("Warning: .env file not found")
	}

	r := gin.Default()

	config := cors.DefaultConfig()
	config.AllowOrigins = []string{
		"http://localhost:5173", // Vite default
		"http://localhost:3000",
		"http://localhost:4173", // In case you're using a different port
		// In case you're using a different port
	}
	config.AllowMethods = []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"}
	config.AllowHeaders = []string{"Origin", "Content-Type", "Accept"}
	config.ExposeHeaders = []string{"Content-Length", "Content-Type", "Authorization"}
	r.Use(cors.New(config))
	r.Static("/", "./dist")

	r.GET("/api/health", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"status": "healthy",
		})
	})
	handler := NewHandler()

	api := r.Group("/api")
	{
		api.GET("/projects", handler.GetProjects)
		api.GET("/projects/:id", handler.GetProjectByID)
		api.GET("/github-projects", handler.GetGitHubProjects)
	}
	r.NoRoute(func(c *gin.Context) {
        c.File("./dist/index.html")
    })
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Server starting on port %s", port)
	if err := r.Run(":" + port); err != nil {
		log.Fatalf("Server failed to start: %v", err)
	}
}
