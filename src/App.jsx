import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Fixed Navbar */}
      <div className="sticky top-0 z-50">
        <Navbar />

        {/* Sticky Progress Bar under Navbar */}
        <div className="w-full bg-zinc-900">
          <div
            className="h-1 transition-all duration-200 ease-in-out"
            style={{
              width: `${scrollProgress}%`,
              background:
                scrollProgress > 0
                  ? 'linear-gradient(to right, #6366f1, #ec4899, #f43f5e)'
                  : 'transparent',
            }}
          ></div>
        </div>
      </div>

      {/* Page Content */}
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
