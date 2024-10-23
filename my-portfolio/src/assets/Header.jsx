import React, { useState} from 'react';
import { Menu, Github} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-bold">SK Portfolio</a>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu />
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
            <a href="#about" className="hover:text-blue-600 transition">About</a>
            <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#projects" className="block py-2 hover:text-blue-600">Projects</a>
            <a href="#about" className="block py-2 hover:text-blue-600">About</a>
            <a href="#skills" className="block py-2 hover:text-blue-600">Skills</a>
            <a href="#contact" className="block py-2 hover:text-blue-600">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
};
export default Header;