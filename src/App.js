import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  // Check for saved theme preference or default to light mode
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'dark bg-gray-900' : 'bg-white'
    }`}>
      {/* Navigation */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>
        
        {/* About Section */}
        <section id="about">
          <About />
        </section>
        
        {/* Projects Section */}
        <section id="projects">
          <Projects />
        </section>
        
        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App; 