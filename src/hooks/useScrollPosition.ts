import { useState, useEffect } from 'react';

interface ScrollPosition {
  isScrolled: boolean;
  activeSection: string;
}

export const useScrollPosition = (): ScrollPosition => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100; // Adding offset for header
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial call to set active section on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { isScrolled, activeSection };
};