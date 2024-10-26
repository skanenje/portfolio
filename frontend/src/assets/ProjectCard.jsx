import React from "react";
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, description, githubUrl, demoUrl, tech }) => (
  <div className="bg-[#1a1b3a] rounded-xl p-6 hover:scale-[1.02] transition-all duration-300 border border-white/10">
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tech.map((item, index) => (
        <span 
          key={index} 
          className="bg-gradient-to-r from-[#4158D0]/20 to-[#C850C0]/20 text-white/90 text-sm px-3 py-1 rounded-full border border-white/10"
        >
          {item}
        </span>
      ))}
    </div>
    <div className="flex space-x-4">
      <a 
        href={githubUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center text-white/80 hover:text-[#FFCC70] transition-colors duration-300"
      >
        <Github className="w-5 h-5 mr-1" /> Code
      </a>
      {demoUrl && (
        <a 
          href={demoUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center text-white/80 hover:text-[#FFCC70] transition-colors duration-300"
        >
          <ExternalLink className="w-5 h-5 mr-1" /> Live Demo
        </a>
      )}
    </div>
  </div>
);

export default ProjectCard;