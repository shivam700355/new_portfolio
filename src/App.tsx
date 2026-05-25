import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Cpu, Sparkles } from 'lucide-react';
import BackgroundEffect from './components/BackgroundEffect';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Services from './components/Services';
import Education from './components/Education';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [loadingStep, setLoadingStep] = useState(0);

  const steps = [
    'Initializing ShivamMaurya.config...',
    'Loading Laravel routing matrices...',
    'Building responsive React viewport blocks...',
    'Optimizing SQL database structures...',
    'Initializing glassmorphism visual frames...',
    'System ready to ship!'
  ];

  // Startup Terminal Loader simulator over 2 seconds
  useEffect(() => {
    let stepIndex = 0;
    const interval = setInterval(() => {
      if (stepIndex < steps.length - 1) {
        stepIndex++;
        setLoadingStep(stepIndex);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
        }, 500); // Wait on final message
      }
    }, 280);

    return () => clearInterval(interval);
  }, []);

  // Theme Syncing
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // IntersectionObserver to watch scroll position for active highlights
  useEffect(() => {
    if (isLoading) return;

    const sections = ['home', 'about', 'skills', 'experience', 'projects', 'services', 'education', 'testimonials', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // Center-focused focus bracket
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, [isLoading]);

  // Handle manual navigation scrolling from child components
  const handleScrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        /* Terminal compiling intro loader logo */
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center p-6"
        >
          <div className="max-w-lg w-full p-8 rounded-2xl glass-card-dark bg-slate-950/85 border border-white/5 text-left space-y-6">
            
            {/* Window bar visual header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
              </div>
              <span className="text-3xs font-mono text-slate-500 flex items-center gap-1">
                <Terminal size={12} /> compiler_kernel.sh
              </span>
            </div>

            {/* Terminal log logs */}
            <div className="space-y-2 font-mono text-xs text-slate-350 min-h-[140px] leading-relaxed">
              <span className="text-orange-500 block font-bold">$ run compile:portfolio</span>
              {steps.slice(0, loadingStep + 1).map((s, idx) => (
                <div key={idx} className="flex gap-2 items-center">
                  <span className={idx === loadingStep ? "text-orange-500 animate-pulse" : "text-orange-450 font-bold"}>
                    {idx === loadingStep ? '▶' : '✔'}
                  </span>
                  <span>{s}</span>
                </div>
              ))}
            </div>

            {/* Glowing system loading bar */}
            <div className="h-1.5 w-full bg-black/40 rounded-full overflow-hidden relative">
              <motion.div
                layout
                className="h-full bg-gradient-to-r from-orange-500 to-orange-650 rounded-full"
                animate={{
                  width: `${((loadingStep + 1) / steps.length) * 100}%`
                }}
                transition={{ duration: 0.25 }}
              />
            </div>

            <div className="flex items-center justify-between text-4xs font-mono text-slate-500 pt-2 border-t border-white/5 leading-none">
              <div className="flex items-center gap-1"><Cpu size={12} /> Node.js 22.0 Engine loaded</div>
              <div className="flex items-center gap-1"><Sparkles size={12} className="text-orange-500 animate-pulse" /> Shivam builds</div>
            </div>

          </div>
        </motion.div>
      ) : (
        /* Unified beautiful application responsive canvas */
        <motion.div 
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={`min-h-screen relative font-sans transition-colors duration-700 select-text ${
            isDark ? 'text-white' : 'text-slate-800'
          }`}
        >
          {/* Animated glowing neon background blobs */}
          <BackgroundEffect isDark={isDark} />

          {/* Core floating layout parts */}
          <Navbar isDark={isDark} onToggleTheme={toggleTheme} activeSection={activeSection} />

          {/* Scrollable grid sections */}
          <main className="relative z-10">
            <Hero isDark={isDark} onNavigateToSection={handleScrollToId} />
            <About isDark={isDark} />
            <Skills isDark={isDark} />
            <Experience isDark={isDark} />
            <Projects isDark={isDark} />
            <Services isDark={isDark} />
            <Education isDark={isDark} />
            <Testimonials isDark={isDark} />
            <Contact isDark={isDark} />
          </main>

          {/* Premium Footer */}
          <Footer isDark={isDark} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
