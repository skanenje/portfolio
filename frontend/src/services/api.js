
const API_BASE_URL = 'http://localhost:8080/api';

export const fetchProjects = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/projects`);
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

export const fetchGitHubProjects = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/github-projects`);
    if (!response.ok) {
      throw new Error('Failed to fetch GitHub projects');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    throw error;
  }
};

export const fetchProjectById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/projects/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch project');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching project:', error);
    throw error;
  }
};