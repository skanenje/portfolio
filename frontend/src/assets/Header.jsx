import React, { useState} from 'react';
import { Menu, Github} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-[#1a1b3a]/80 backdrop-blur-md border-b border-white/10 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4158D0] to-[#C850C0]">
              SK Portfolio
            </span>
          </a>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu />
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {['Projects', 'About', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/80 hover:text-white hover:scale-105 transition-all duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 bg-[#1a1b3a]/95 p-4 rounded-xl backdrop-blur-lg">
            {['Projects', 'About', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};
export default Header;