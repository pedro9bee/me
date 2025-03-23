import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { useScrollPosition } from './hooks/useScrollPosition';

const App: React.FC = () => {
  const { isScrolled, activeSection } = useScrollPosition();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isScrolled={isScrolled} activeSection={activeSection} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
};

export default App;