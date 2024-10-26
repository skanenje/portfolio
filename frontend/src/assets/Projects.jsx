import React from "react";
import ProjectCard from "./ProjectCard";  // Add this line

const Projects = ({ projects }) => (
  <section id="projects" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;