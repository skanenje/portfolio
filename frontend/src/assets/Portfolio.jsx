import React from 'react';
import Header from "./Header";
import Hero from "./Hero";
import About from './About';
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Portfolio;