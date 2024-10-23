import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-4">
            Hello! I'm [Your Name], a passionate [Your Profession/Role] with a keen interest in [Your Interests/Specialties].
          </p>
          <p className="text-lg mb-4">
            I have [X] years of experience in [Your Field], specializing in [Your Specific Skills]. My goal is to [Your Professional Aim].
          </p>
          <p className="text-lg">
            When I'm not coding, you can find me [Your Hobbies/Interests Outside of Work].
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;