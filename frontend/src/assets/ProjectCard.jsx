import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const { title, description, githubUrl, demoUrl, tech } = project;

  const handleGitHubClick = () => {
    if (githubUrl) {
      window.open(githubUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleDemoClick = () => {
    if (demoUrl) {
      window.open(demoUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="bg-[#1a1b3a] rounded-xl p-6 hover:scale-[1.02] transition-all duration-300 border border-white/10 shadow-lg">
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      {tech && tech.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span 
              key={index} 
              className="bg-gradient-to-r from-[#4158D0]/20 to-[#C850C0]/20 text-white/90 text-xs px-2 py-1 rounded-full border border-white/10"
            >
              {item}
            </span>
          ))}
        </div>
      )}
      <div className="flex space-x-4 mt-4">
        {githubUrl && (
          <button 
            onClick={handleGitHubClick}
            className="flex items-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition-colors duration-300"
          >
            <Github className="w-5 h-5 mr-2" /> View on GitHub
          </button>
        )}
        {demoUrl && (
          <button 
            onClick={handleDemoClick}
            className="flex items-center text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full transition-colors duration-300"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> Live Demo
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;