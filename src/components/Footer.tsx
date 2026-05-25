import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, ShieldAlert } from 'lucide-react';
import { personalInfo } from '../data';

interface FooterProps {
  isDark: boolean;
}

export default function Footer({ isDark }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={`border-t relative z-10 transition-colors duration-500 ${
      isDark 
        ? 'glass-nav-dark border-white/5 bg-slate-950/80 backdrop-blur-xl' 
        : 'glass-nav-light border-slate-200 bg-white/90'
    }`}>
      {/* Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:items-center">
          
          {/* Logo Brand / Summary */}
          <div className="md:col-span-5 text-left space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center font-sans text-black font-extrabold text-sm shadow">
                SM
              </div>
              <span className={`font-sans font-extrabold tracking-tight text-base ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {personalInfo.name}
              </span>
            </div>
            
            <p className={`text-2xs sm:text-xs leading-relaxed max-w-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Professional full-stack systems engineering covering advanced Laravel PHP databases, dynamic Inertia SPA mechanics, secure JWT REST APIs, and accessible React interfaces.
            </p>
          </div>

          {/* Social Row Links */}
          <div className="md:col-span-4 flex items-center md:justify-center gap-4">
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`p-2.5 rounded-xl border transition-colors ${
                isDark 
                  ? 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10' 
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-950'
              }`}
              title="GitHub Profile"
            >
              <Github size={16} />
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`p-2.5 rounded-xl border transition-colors ${
                isDark 
                  ? 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10' 
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-950'
              }`}
              title="LinkedIn Profile"
            >
              <Linkedin size={16} />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`}
              className={`p-2.5 rounded-xl border transition-colors ${
                isDark 
                  ? 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10' 
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-950'
              }`}
              title="Email Shivam"
            >
              <Mail size={16} />
            </a>
          </div>

          {/* Core scroll trigger button */}
          <div className="md:col-span-3 flex md:justify-end">
            <button
              onClick={handleScrollToTop}
              className={`px-4 py-2.5 rounded-xl border flex items-center gap-2 text-2xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                isDark 
                  ? 'bg-white/5 border-white/10 text-orange-400 hover:bg-white/10 hover:text-orange-350' 
                  : 'bg-slate-50 border-slate-200 text-orange-600 hover:bg-slate-100 hover:text-orange-700'
              }`}
            >
              Back to Top <ArrowUp size={14} />
            </button>
          </div>

        </div>

        {/* Footer legalities */}
        <div className={`mt-8 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-3xs font-mono ${
          isDark ? 'border-white/5 text-slate-500' : 'border-slate-100 text-slate-450'
        }`}>
          <div>
            © {currentYear} {personalInfo.name}. All production assets secured.
          </div>
          <div className="flex items-center gap-1.5 opacity-80">
            <ShieldAlert size={12} className="text-orange-500 animate-pulse" />
            <span>Complies with standard ISO/IEC 27001 web encryptions</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
