import React from 'react';
import { Button } from 'antd';

interface HeaderProps {
  isScrolled: boolean;
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, activeSection }) => {
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className={`font-semibold text-xl ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Pedro Lemos</div>
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#about" 
            className={`${activeSection === 'about' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 cursor-pointer`}
          >
            About
          </a>
          <a 
            href="#skills" 
            className={`${activeSection === 'skills' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 cursor-pointer`}
          >
            Skills
          </a>
          <a 
            href="#experience" 
            className={`${activeSection === 'experience' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 cursor-pointer`}
          >
            Experience
          </a>
          <a 
            href="#contact" 
            className={`${activeSection === 'contact' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 cursor-pointer`}
          >
            Contact
          </a>
          <Button type="primary" className="!rounded-button bg-blue-600 text-white hover:bg-blue-700">
            Download CV
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;