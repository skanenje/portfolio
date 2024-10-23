package models

type Project struct {
    ID          string   `json:"id"`
    Title       string   `json:"title"`
    Description string   `json:"description"`
    GithubURL   string   `json:"githubUrl"`
    DemoURL     string   `json:"demoUrl,omitempty"`
    Tech        []string `json:"tech"`
    ImageURL    string   `json:"imageUrl,omitempty"`
}

type GitHubRepo struct {
    Name        string   `json:"name"`
    Description string   `json:"description"`
    HTMLURL     string   `json:"html_url"`
    Topics      []string `json:"topics"`
}