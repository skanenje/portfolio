import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { fetchGitHubProjects } from '../services/api';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const fetchedProjects = await fetchGitHubProjects();
        setProjects(fetchedProjects);
        setLoading(false);
      } catch (err) {
        console.error('Error loading projects:', err);
        setError('Failed to load projects. Please try again later.');
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  return (
    <section id="projects" className="py-20 bg-red-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">My Projects</h2>
        {loading && <div className="text-center py-10">Loading projects...</div>}
        {error && <div className="text-center py-10 text-red-500">{error}</div>}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;