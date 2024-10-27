import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-[#1a1b3a] to-[#0a0b1e]">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-white bg-clip-text">
          Bio
        </h2>
        <div className="max-w-3xl mx-auto backdrop-blur-none bg-white/5 p-8 rounded-2xl shadow-xl">
          <p className="text-lg mb-6 text-gray-200 leading-relaxed">
          My name is Swabri Musa, an aspiring Golang developer based in Kisumu, Kenya. I began my tech journey with a foundation in Electrical Engineering, having graduated with a Higher National Diploma in Electrical and Electronics Engineering from DeKUT. My switch to software development came in 2024 after completing my attachment at KPLC, and I’m now immersed in coding at Zone01 Kisumu, learning Go and sharpening my problem-solving skills.
          </p>
          <p className="text-lg mb-6 text-gray-200 leading-relaxed">
          With a passion for understanding the fundamentals, I thrive in peer-to-peer environments, tackling diverse projects from file systems to ASCII art. I recently joined the Kisumu Gophers community at LakeHub and attended GopherCon Africa, which further ignited my enthusiasm for Go.
          </p>
          <p className="text-lg text-gray-200 leading-relaxed">
          Driven by a commitment to bridge tech and the electrical field in sub-Saharan Africa, I aspire to become a versatile developer who inspires and collaborates with others. Connect with me if you share a similar passion for tech and innovation in Africa!
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