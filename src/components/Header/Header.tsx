import React, { useState } from 'react';
import { Button } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

interface HeaderProps {
  isScrolled: boolean;
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className={`font-semibold text-xl ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Pedro Lemos</div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-600 hover:text-blue-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <CloseOutlined className="text-2xl" /> : <MenuOutlined className="text-2xl" />}
        </button>

        {/* Desktop navigation */}
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

        {/* Mobile navigation */}
        {isMobileMenuOpen && (
          <nav className="absolute top-20 left-0 right-0 bg-white shadow-lg md:hidden">
            <div className="px-6 py-4 space-y-4">
              <a 
                href="#about" 
                className={`block ${activeSection === 'about' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 cursor-pointer`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#skills" 
                className={`block ${activeSection === 'skills' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 cursor-pointer`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Skills
              </a>
              <a 
                href="#experience" 
                className={`block ${activeSection === 'experience' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 cursor-pointer`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Experience
              </a>
              <a 
                href="#contact" 
                className={`block ${activeSection === 'contact' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 cursor-pointer`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button type="primary" className="w-full !rounded-button bg-blue-600 text-white hover:bg-blue-700">
                Download CV
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;