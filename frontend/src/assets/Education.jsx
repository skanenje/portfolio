import React from "react";

const Education = () => {
  const educationData = [
    {
      degree: "Diploma in Electrical Engineering",
      institution: "DEKUT, Nyeri Kenya",
      year: "2021 - 2023",
      url: "https://www.dkut.ac.ke/"
    },
    // Add more education entries as needed
  ];

  return (
    <div className="bg-[#1a1b3a] rounded-xl p-6 border border-white/10 hover:scale-[1.02] transition-all duration-300">
      <h3 className="text-xl font-semibold mb-4 text-white">Education</h3>
      {educationData.map((edu, index) => (
        <div key={index} className="mb-4 last:mb-0">
          <h4 className="text-lg font-medium text-[#FFCC70]">{edu.degree}</h4>
          <p className="text-white/90">
            <a href={edu.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {edu.institution}
            </a>
          </p>
          <p className="text-sm text-white/70">{edu.year}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;