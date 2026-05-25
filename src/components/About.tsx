import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, Code2, Heart, User, Sparkles, Terminal } from 'lucide-react';
import { personalInfo } from '../data';

interface AboutProps {
  isDark: boolean;
}

export default function About({ isDark }: AboutProps) {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  // Counters states
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [commits, setCommits] = useState(0);

  useEffect(() => {
    if (isInView) {
      // Animate years (target 2)
      let countYears = 0;
      const intervalYears = setInterval(() => {
        countYears += 0.2;
        if (countYears >= 2) {
          setYears(2);
          clearInterval(intervalYears);
        } else {
          setYears(parseFloat(countYears.toFixed(1)));
        }
      }, 80);

      // Animate Projects (target 12)
      let countProj = 0;
      const intervalProj = setInterval(() => {
        countProj += 1;
        if (countProj >= 12) {
          setProjects(12);
          clearInterval(intervalProj);
        } else {
          setProjects(countProj);
        }
      }, 70);

      // Animate Clients (target 8)
      let countClient = 0;
      const intervalClient = setInterval(() => {
        countClient += 1;
        if (countClient >= 8) {
          setClients(8);
          clearInterval(intervalClient);
        } else {
          setClients(countClient);
        }
      }, 100);

      // Animate Commits (target 1400)
      let countCommits = 0;
      const intervalCommits = setInterval(() => {
        countCommits += 47;
        if (countCommits >= 1400) {
          setCommits(1400);
          clearInterval(intervalCommits);
        } else {
          setCommits(countCommits);
        }
      }, 30);

      return () => {
        clearInterval(intervalYears);
        clearInterval(intervalProj);
        clearInterval(intervalClient);
        clearInterval(intervalCommits);
      };
    }
  }, [isInView]);

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-orange-500 uppercase bg-orange-500/10 px-3 py-1 rounded-md border border-orange-500/20">
            Profile Overview
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            About Shivam Maurya
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Presentation Element */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group">
              {/* Spinning / Glowing back border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-orange-500 via-orange-600 to-blue-500 opacity-20 group-hover:opacity-100 blur transition-all duration-700 -m-1" />
              
              {/* Premium Card Display representing Shivam */}
              <div className={`p-8 rounded-2xl border relative flex flex-col items-center justify-center text-center ${
                isDark 
                  ? 'glass-card-dark border-white/10 bg-white/5 backdrop-blur-xl' 
                  : 'glass-card-light border-slate-200 bg-white/85'
              }`}>
                {/* Avatar SVG/Initials frame */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-orange-500 to-orange-600 p-1 mb-4 flex items-center justify-center shadow-lg">
                  <div className={`w-full h-full rounded-full flex items-center justify-center font-bold text-3xl text-white ${
                    isDark ? 'bg-[#050505]' : 'bg-slate-800'
                  }`}>
                    SM
                  </div>
                </div>

                <h3 className={`text-xl font-bold font-sans ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Shivam Maurya
                </h3>
                <p className="text-orange-500 font-mono text-xs font-bold mt-1 uppercase tracking-wider">
                  Full Stack Developer
                </p>

                <div className={`flex items-center gap-2 mt-4 px-3 py-1 rounded-full text-2xs border ${
                  isDark ? 'bg-black/40 border-white/5 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-500'
                }`}>
                  <User size={12} className="text-orange-500" />
                  <span>Lucknow, Uttar Pradesh, India</span>
                </div>

                {/* Decorative coding skills snippet */}
                <div className="mt-6 pt-6 border-t border-dashed border-slate-800/80 w-full text-left">
                  <div className="flex items-center gap-2 mb-2 text-2xs font-mono text-orange-450">
                    <Terminal size={12} />
                    <span>status_check.sh</span>
                  </div>
                  <p className={`font-mono text-2xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    $ active_status: <span className="text-emerald-405">"Online"</span><br />
                    $ current_focus: <span className="text-orange-400">"Laravel_12"</span><br />
                    $ ready_to_deploy: <span className="text-emerald-400">true</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Text Block */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            <div>
              <h3 className={`text-2xl font-bold font-sans flex items-center gap-2 ${
                isDark ? 'text-white' : 'text-slate-950'
              }`}>
                <Code2 size={24} className="text-orange-500" /> Professional Summary
              </h3>
              <p className={`mt-3 text-sm sm:text-base leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {personalInfo.summary}
              </p>
            </div>

            <div>
              <h3 className={`text-2xl font-bold font-sans flex items-center gap-2 ${
                isDark ? 'text-white' : 'text-slate-950'
              }`}>
                <Award size={24} className="text-orange-500" /> Career Objective & Vision
              </h3>
              <p className={`mt-3 text-sm sm:text-base leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {personalInfo.objective}
              </p>
            </div>

            {/* Micro badges for passion */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className={`text-[10px] uppercase font-bold tracking-wider font-mono px-3 py-1 rounded-sm border ${
                isDark ? 'bg-orange-500/10 border-orange-500/20 text-orange-400' : 'bg-orange-50/50 border-orange-100 text-orange-600'
              }`}>
                ✦ Clean Architecture (MVC)
              </span>
              <span className={`text-[10px] uppercase font-bold tracking-wider font-mono px-3 py-1 rounded-sm border ${
                isDark ? 'bg-[#3b82f6]/10 border-[#3b82f6]/20 text-blue-400' : 'bg-purple-50/50 border-purple-100 text-purple-600'
              }`}>
                ✦ SPA & Hybrid Rendering
              </span>
              <span className={`text-[10px] uppercase font-bold tracking-wider font-mono px-3 py-1 rounded-sm border ${
                isDark ? 'bg-orange-500/10 border-orange-500/20 text-orange-400' : 'bg-emerald-50/50 border-emerald-100 text-emerald-600'
              }`}>
                ✦ REST/JWT Security
              </span>
            </div>

            {/* Dynamic Counter Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-dashed border-white/5">
              
              <div className={`p-4 rounded-xl text-center border ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-slate-50/50 border-slate-200'
              }`}>
                <span className={`block font-sans font-extrabold text-2xl sm:text-3xl ${isDark ? 'text-orange-500' : 'text-orange-600'}`}>
                  {years}+
                </span>
                <span className={`text-2xs font-mono uppercase tracking-widest mt-1 block ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Experience
                </span>
              </div>

              <div className={`p-4 rounded-xl text-center border ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-slate-50/50 border-slate-200'
              }`}>
                <span className={`block font-sans font-extrabold text-2xl sm:text-3xl ${isDark ? 'text-white' : 'text-purple-600'}`}>
                  {projects}+
                </span>
                <span className={`text-2xs font-mono uppercase tracking-widest mt-1 block ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Key Apps
                </span>
              </div>

              <div className={`p-4 rounded-xl text-center border ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-slate-50/50 border-slate-200'
              }`}>
                <span className={`block font-sans font-extrabold text-2xl sm:text-3xl ${isDark ? 'text-orange-500' : 'text-slate-650'}`}>
                  {clients}+
                </span>
                <span className={`text-2xs font-mono uppercase tracking-widest mt-1 block ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Companies
                </span>
              </div>

              <div className={`p-4 rounded-xl text-center border ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-slate-50/50 border-slate-200'
              }`}>
                <span className={`block font-sans font-extrabold text-2xl sm:text-3xl ${isDark ? 'text-white' : 'text-yellow-600'}`}>
                  {commits}+
                </span>
                <span className={`text-2xs font-mono uppercase tracking-widest mt-1 block ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Commits
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
