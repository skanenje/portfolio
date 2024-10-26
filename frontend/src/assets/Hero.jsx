import React from 'react';

const Hero = () => (
  <section className="min-h-screen w-full relative flex items-center justify-center">
    {/* Base dark gradient for fallback */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#0a0b1e] to-[#1a1b3a]" />
    
    {/* Background Image Layer with overlay */}
    <div 
      className="absolute inset-0 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: 'url("/images/kratos.png")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" />
    </div>
    
    {/* Animated Gradient Overlay */}
    <div className="absolute inset-0">
      <div 
        className="absolute inset-0 bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#FFCC70] opacity-20 mix-blend-overlay"
        style={{
          animation: 'gradient 15s ease infinite',
          backgroundSize: '400% 400%',
        }}
      />
    </div>

    {/* Content Container */}
    <div className="relative z-10 text-center px-4 py-16 w-full max-w-4xl mx-auto">
      <h1 className="!text-5xl md:!text-7xl font-bold mb-6 text-white !leading-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4158D0] to-[#C850C0]">Swabri Kanenje</span>
        

      </h1>
      <p className="text-xl md:text-2xl !text-gray-200 mb-12 drop-shadow-lg" >
      
        Go Developer <br></br>
        Full-Stack
      </p>
      {/* Buttons Container - Removed any potential overflow */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 overflow-hidden">
        {/* Primary Button - Simplified animation structure */}
        <a
          href="#projects"
          className="group relative inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-[#4158D0] to-[#C850C0] !text-white font-bold transition-all duration-300 hover:shadow-lg hover:shadow-[#C850C0]/20 overflow-hidden"
        >
          <span className="relative z-10">View Projects</span>
          <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-300" />
        </a>
        {/* Secondary Button - Removed any animation classes */}
        <a
          href="#contact"
          className="inline-block px-8 py-4 rounded-2xl border-2 border-[#C850C0] !text-white hover:bg-white/10 transition-colors duration-300 font-bold"
        >
          Contact Me
        </a>
      </div>
    </div>
  </section>
);

export default Hero;