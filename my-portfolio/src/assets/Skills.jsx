import React from "react";
const Skills = () => {
    const skills = {
      "Frontend": ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
      "Backend": ["Go", "Gin", "RESTful APIs", "PostgreSQL"],
      "Tools": ["Git", "Docker", "VS Code", "Linux"]
    };
  
    return (
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 px-3 py-1 rounded-full text-sm"
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
  