import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook, ArrowUpRight } from 'lucide-react';
import logoImg from '../assets/logo.png';

/**
 * Footer Components
 * Renders the brand footer containing logos, navigation quick links, social links, and copyright text.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200/50 dark:border-slate-900 transition-colors duration-300 pb-12">


      {/* Main Footer Info */}
      <div className="max-w-[992px] mx-auto px-6 md:px-12 py-12 md:py-16 flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-6">

        {/* Left Column: Brand Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 max-w-sm">
          <a href="#home" className="flex items-center gap-2 group">
            <img src={logoImg} alt="AIGRA Logo" className="h-7 w-auto object-contain dark:brightness-125" />
          </a>

          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            Menyediakan teknologi IoT & analitik AI modern untuk meningkatkan efisiensi pertanian dan mendukung ketahanan pangan nasional.
          </p>
        </div>

        {/* Center/Right Column: Quick links and Socials Wrapper */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-12 md:gap-16">
          {/* Quick Links Menu */}
          <div className="flex flex-col items-center sm:items-start gap-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-slate-400">Tautan Cepat</span>
            <div className="flex flex-col items-center sm:items-start gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-slate-650 hover:text-emerald-600 dark:text-slate-350 dark:hover:text-emerald-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media Link Grid */}
          <div className="flex flex-col items-center sm:items-start gap-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-slate-400">Media Sosial</span>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="p-3 rounded-full bg-white dark:bg-slate-900 text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 hover:scale-110 shadow-sm border border-slate-200/50 dark:border-slate-800/80 transition-all duration-300"
                    aria-label={`Follow AgriSense on ${social.name}`}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

      </div>

      <hr className="max-w-[992px] mx-auto border-slate-200/50 dark:border-slate-900 my-8 md:my-10 px-6 md:px-12" />

      {/* Copyright text */}
      <div className="max-w-[992px] mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-400 dark:text-slate-500 text-xs">
        <span>© {currentYear} AIGRA. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Tentang</a>
          <a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Pekerjaan</a>
          <a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Perusahaan</a>
          <a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Kemitraan</a>
        </div>
      </div>
    </footer>
  );
}
