package main

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

type Handler struct {
	projectService *ProjectService
}

func NewHandler() *Handler {
	return &Handler{
		projectService: NewProjectService(),
	}
}

func (h *Handler) GetProjects(c *gin.Context) {
	projects, err := h.projectService.GetAllProjects()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, projects)
}

func (h *Handler) GetProjectByID(c *gin.Context) {
	id := c.Param("id")
	project, err := h.projectService.GetProjectByID(id)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Project not found"})
		return
	}
	c.JSON(http.StatusOK, project)
}

func (h *Handler) GetGitHubProjects(c *gin.Context) {
	projects, err := h.projectService.GetGitHubProjects()
	if err != nil {
		log.Printf("Error getting GitHub projects: %v", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, projects)
}
