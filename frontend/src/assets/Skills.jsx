import React from "react";
const Skills = () => {
  const skills = {
    "Frontend": ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
    "Backend": ["Go", "Gin", "RESTful APIs", "PostgreSQL"],
    "Tools": ["Git", "Docker", "VS Code", "Linux"]
  };

  return (
    <section id="skills" className="py-20 bg-[#0a0b1e]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#FFCC70]">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-[#1a1b3a] rounded-xl p-6 border border-white/10 hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, index) => (
                  <span 
                    key={index}
                    className="bg-gradient-to-r from-[#4158D0]/20 to-[#C850C0]/20 px-3 py-1 rounded-full text-sm text-white/90 border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
  export default Skills;
  