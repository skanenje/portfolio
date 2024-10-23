package main

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"

	"backend/models"
)

type ProjectService struct {
	projects []models.Project
}

func NewProjectService() *ProjectService {
	return &ProjectService{
		projects: []models.Project{
			{
				ID:          "1",
				Title:       "Sample Project",
				Description: "A sample project description",
				GithubURL:   "https://github.com/skanenje/project",
				Tech:        []string{"Go", "React", "PostgreSQL"},
			},
			// Add more sample projects here
		},
	}
}

func (s *ProjectService) GetAllProjects() ([]models.Project, error) {
	return s.projects, nil
}

func (s *ProjectService) GetProjectByID(id string) (*models.Project, error) {
	for _, project := range s.projects {
		if project.ID == id {
			return &project, nil
		}
	}
	return nil, fmt.Errorf("project not found")
}

func (s *ProjectService) GetGitHubProjects() ([]models.Project, error) {
	username := "skanenje" // Your GitHub username
	githubToken := os.Getenv("GITHUB_TOKEN")

	client := &http.Client{}
	req, err := http.NewRequest("GET",
		fmt.Sprintf("https://api.github.com/users/%s/repos", username),
		nil)
	if err != nil {
		return nil, err
	}

	if githubToken != "" {
		req.Header.Add("Authorization", "token "+githubToken)
	}
	req.Header.Add("Accept", "application/vnd.github.v3+json")

	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	var githubRepos []models.GitHubRepo
	if err := json.Unmarshal(body, &githubRepos); err != nil {
		return nil, err
	}

	var projects []models.Project
	for _, repo := range githubRepos {
		project := models.Project{
			ID:          repo.Name,
			Title:       repo.Name,
			Description: repo.Description,
			GithubURL:   repo.HTMLURL,
			Tech:        repo.Topics,
		}
		projects = append(projects, project)
	}

	return projects, nil
}
