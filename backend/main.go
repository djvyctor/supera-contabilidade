package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	// Health check (público)
	r.GET("/api/health", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"status": "ok"})
	})

	// Exemplo de rota API
	r.GET("/api", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"message": "Supera Contabilidade API"})
	})

	r.Run(":8080")
}
