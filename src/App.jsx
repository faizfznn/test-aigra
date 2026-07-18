import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Main Application Component
 * Manages the global dark mode state and orchestrates the landing page structure.
 */
function App() {
  // Initialize dark mode state, falling back to system preference if available
  const [darkMode, setDarkMode] = useState(() => {
    // Check if window is defined (for server-side rendering safety, though not strictly needed in basic Vite client apps)
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      // If no preference stored, check system media query preference
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Apply dark mode theme class to <html> element and store preference in localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 min-h-screen transition-colors duration-300 font-sans">
      {/* Navigation Bar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero Header Section */}
      <Hero />

      {/* About Company Section */}
      <About />

      {/* Product Features Grid Section */}
      <Features />

      {/* Contact Form Section */}
      <Contact />

      {/* Site Footer */}
      <Footer />
    </div>
  );
}

export default App;
