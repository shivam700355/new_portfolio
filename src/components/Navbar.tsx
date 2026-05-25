import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Briefcase, FileCode } from 'lucide-react';
import { personalInfo } from '../data';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  activeSection: string;
}

export default function Navbar({ isDark, onToggleTheme, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Services', id: 'services' },
    { label: 'Education', id: 'education' },
    { label: 'Reviews', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? isDark 
            ? 'glass-nav-dark py-2' 
            : 'glass-nav-light py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Brand */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="flex items-center gap-2 font-bold text-lg tracking-tighter">
              <span className="bg-orange-500 w-8 h-8 rounded-lg flex items-center justify-center text-black font-extrabold">S</span>
              <span className={`tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>SHIVAM.M</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-lg font-sans font-medium text-sm transition-all duration-300 ${
                    isActive 
                      ? 'text-orange-500 font-bold border-b-2 border-orange-500 rounded-b-none pb-1' 
                      : isDark 
                        ? 'text-slate-400 hover:text-white' 
                        : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navActiveBg"
                      className={`absolute inset-0 rounded-lg -z-10 ${
                        isDark ? 'bg-orange-500/5' : 'bg-orange-500/5'
                      }`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Area & Theme Selector */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Avaibility badge */}
            <div className={`flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full text-[10px] font-mono tracking-widest uppercase font-bold text-emerald-400`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-450 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Work
            </div>

            <button 
              onClick={onToggleTheme}
              className={`p-2.5 rounded-xl border transition-all duration-300 ${
                isDark 
                  ? 'bg-slate-900/50 border-slate-800 text-yellow-450 hover:bg-slate-800/80 hover:text-yellow-300' 
                  : 'bg-white/70 border-slate-200 text-orange-600 hover:bg-slate-100/80 hover:text-orange-700'
              }`}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="lg:hidden flex items-center gap-2">
            <button 
              onClick={onToggleTheme}
              className={`p-2 rounded-lg border transition-all duration-300 ${
                isDark 
                  ? 'bg-slate-900/50 border-slate-800 text-yellow-450' 
                  : 'bg-white/70 border-slate-200 text-orange-600'
              }`}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg border transition-all duration-300 ${
                isDark 
                  ? 'bg-slate-900/50 border-slate-800 text-white hover:bg-slate-800' 
                  : 'bg-white/70 border-slate-200 text-slate-800 hover:bg-slate-100'
              }`}
              aria-label="Toggle Main Menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Sidebar Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`lg:hidden border-t w-full absolute left-0 top-full ${
              isDark 
                ? 'bg-slate-950/95 border-slate-800' 
                : 'bg-white/95 border-slate-200'
            }`}
          >
            <div className="px-4 py-6 space-y-2 max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-dashed border-slate-800">
                <span className={`text-xs font-mono font-bold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  MAPPED NAVIGATION
                </span>
                <span className={`text-2xs font-mono px-2 py-0.5 rounded ${
                  isDark ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-500/5 text-emerald-600'
                }`}>
                  AVAILABLE NOW
                </span>
              </div>
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`nav-btn w-full text-left px-4 py-3 rounded-xl font-sans font-medium text-base flex items-center justify-between transition-all ${
                      isActive 
                        ? 'bg-orange-500/10 text-orange-550 font-bold border-l-4 border-orange-500 pl-3' 
                        : isDark 
                          ? 'text-slate-300 hover:bg-slate-900/50 hover:text-white' 
                          : 'text-slate-700 hover:bg-slate-100/50 hover:text-slate-950'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs font-mono opacity-40">#{item.id}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
