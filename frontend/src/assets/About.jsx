import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-[#1a1b3a] to-[#0a0b1e]">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-white bg-clip-text">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto backdrop-blur-none bg-white/5 p-8 rounded-2xl shadow-xl">
          <p className="text-lg mb-6 text-gray-200 leading-relaxed">
            Hi again! I'm Swabri, a passionate Go programmer with a keen interest in Web development.
          </p>
          <p className="text-lg mb-6 text-gray-200 leading-relaxed">
            I have 7 months of experience in the language, specializing in web frameworks.
          </p>
          <p className="text-lg text-gray-200 leading-relaxed">
            When I'm not coding, you can find me watching science talks on RI youtube channel.
          </p>
        </div>
      </div>
      
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4158D0]/5 via-[#C850C0]/5 to-[#FFCC70]/5 pointer-events-none" />
    </section>
  );
};

export default About;