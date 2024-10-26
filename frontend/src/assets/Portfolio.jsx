import React, { useState, useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from './About';
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

import { fetchProjects } from '../services/api';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError('Failed to load projects');
        console.error(err);
      }
    };

    loadProjects();
  }, []);

  if (error) {
    return <div className="text-red-600 text-center mt-20">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About/>
      <Projects projects={projects} />
      <Skills />
      <Contact />
    </div>
  );
};
export default Portfolio;