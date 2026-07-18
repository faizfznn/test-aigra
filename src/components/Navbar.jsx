import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import logoImg from '../assets/logo.png';

/**
 * Pill-Shaped Floating Navbar Component
 * 
 * Props:
 * - darkMode: boolean
 * - setDarkMode: function to toggle dark mode
 */
export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 font-sans">
      <nav
        className="w-full max-w-[992px] h-[56px] px-6 flex items-center justify-between rounded-full border border-[#D5D8DF]/64 dark:border-slate-800/80 bg-[#F9F9F9]/80 dark:bg-slate-900/80 backdrop-blur-[4px] shadow-sm transition-all duration-300 relative"
      >
        {/* Logo */}
        <a href="#home" className="flex items-center group shrink-0">
          <img src={logoImg} alt="AIGRA Logo" className="h-6 w-auto object-contain dark:brightness-125" />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[16px] font-medium text-[#6B6D75] hover:text-[#0f2d59] dark:text-slate-300 dark:hover:text-white leading-[17.6px] tracking-[-0.2px] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Controls (Dark Mode Toggle & Hamburger) */}
        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800 text-[#6B6D75] dark:text-slate-300 border border-[#D5D8DF]/64 dark:border-slate-850 bg-white/50 dark:bg-slate-900/50 transition-colors shrink-0"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Hamburger Menu (Mobile Only) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800 text-[#6B6D75] dark:text-slate-300 border border-[#D5D8DF]/64 dark:border-slate-850 bg-white/50 dark:bg-slate-900/50 transition-colors shrink-0"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>

        {/* Mobile Drawer Menu */}
        {isOpen && (
          <div className="absolute top-[68px] left-0 right-0 bg-[#F9F9F9]/95 dark:bg-slate-900/95 backdrop-blur-md shadow-xl rounded-3xl border border-[#D5D8DF]/64 dark:border-slate-800/80 md:hidden flex flex-col p-6 gap-4 animate-slide-down">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[16px] font-medium text-[#6B6D75] hover:text-[#0f2d59] dark:text-slate-300 dark:hover:text-white leading-[17.6px] tracking-[-0.2px] py-2 border-b border-slate-200/30 dark:border-slate-800/50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}
