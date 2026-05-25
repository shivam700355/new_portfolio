import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Search, Code, CheckCircle, Database, ShieldCheck, Mail, GraduationCap, Users, X, Info } from 'lucide-react';
import { projects } from '../data';

interface ProjectsProps {
  isDark: boolean;
}

export default function Projects({ isDark }: ProjectsProps) {
  const [filter, setFilter] = useState<'All' | 'Full Stack' | 'Laravel' | 'Government'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeNotification, setActiveNotification] = useState<string | null>(null);

  const filterCategories = ['All', 'Full Stack', 'Laravel', 'Government'] as const;

  const filteredProjects = projects.filter(project => {
    const matchesCategory = filter === 'All' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Render high-fidelity, custom-crafted CSS visual mockups for each system
  const renderProjectMockup = (type: 'edtech' | 'hrms' | 'shakti') => {
    if (type === 'edtech') {
      return (
        <div className={`w-full h-48 rounded-t-xl overflow-hidden p-4 relative flex flex-col justify-between select-none ${
          isDark ? 'bg-[#0a0a0a] border-b border-white/5' : 'bg-slate-100 border-b border-slate-200'
        }`}>
          {/* Top Header of mockup */}
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-3xs font-mono font-bold tracking-widest text-orange-500">EDTECH PORTAL</span>
            <div className="flex gap-1 text-2xs font-mono font-bold">
              <span className="text-orange-400">MBA</span> • <span className="text-orange-500">MCA</span>
            </div>
          </div>
          {/* Body courses representation */}
          <div className="space-y-2 mt-2">
            <div className={`p-2 rounded-lg text-left ${isDark ? 'bg-white/5' : 'bg-white shadow-2xs'}`}>
              <div className="flex justify-between items-center text-3xs font-semibold">
                <span className={isDark ? 'text-slate-350' : 'text-slate-700'}>Inertia Course Module</span>
                <span className="text-orange-400 font-mono">Active</span>
              </div>
              <div className="h-1 bg-black/40 rounded-full mt-1 overflow-hidden">
                <div className="h-full w-[80%] bg-gradient-to-r from-orange-400 to-orange-650 rounded-full" />
              </div>
            </div>
            
            <div className={`p-2 rounded-lg text-left ${isDark ? 'bg-white/5' : 'bg-white shadow-2xs'}`}>
              <div className="flex justify-between items-center text-3xs font-semibold">
                <span className={isDark ? 'text-slate-355' : 'text-slate-700'}>MCA Grade Tracker</span>
                <span className="text-orange-500 font-mono">Synced</span>
              </div>
              <div className="h-1 bg-black/40 rounded-full mt-1 overflow-hidden">
                <div className="h-full w-[65%] bg-gradient-to-r from-orange-400 to-orange-650 rounded-full" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between text-2xs font-mono text-slate-500 border-t border-white/5 pt-2 mt-1">
            <span className="flex items-center gap-1"><GraduationCap size={10} /> 4 Active Programs</span>
            <span>JWT Secured</span>
          </div>
        </div>
      );
    } else if (type === 'hrms') {
      return (
        <div className={`w-full h-48 rounded-t-xl overflow-hidden p-4 relative flex flex-col justify-between select-none ${
          isDark ? 'bg-[#0a0a0a] border-b border-white/5' : 'bg-slate-100 border-b border-slate-200'
        }`}>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-3xs font-mono tracking-wider text-orange-500 font-bold">HRMS PLATFORM</span>
            <span className="text-3xs font-mono font-bold text-slate-400">ADMIN VIEW</span>
          </div>
          {/* Main components mock */}
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className={`p-2 rounded-lg text-left ${isDark ? 'bg-white/5' : 'bg-white'}`}>
              <span className="text-4xs font-mono text-slate-500 block">CHECK-IN</span>
              <span className={`text-2xs font-sans font-bold flex items-center gap-1 mt-0.5 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-450 animate-pulse" /> 09:12 AM
              </span>
            </div>
            <div className={`p-2 rounded-lg text-left ${isDark ? 'bg-white/5' : 'bg-white'}`}>
              <span className="text-4xs font-mono text-slate-500 block">PENDING LEAVE</span>
              <span className={`text-2xs font-sans font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>03 Requests</span>
            </div>
          </div>
          <div className={`p-1.5 rounded-lg text-left text-4xs font-mono leading-none ${isDark ? 'bg-black/30 text-slate-400' : 'bg-white text-slate-650'}`}>
            <span className="text-orange-400 font-bold">[Log]</span> RBAC: Role Admin checked in successfully
          </div>
          <div className="flex items-center justify-between text-2xs font-mono text-slate-500 border-t border-white/5 pt-2 mt-1">
            <span className="flex items-center gap-1"><Users size={10} /> 120+ Employees</span>
            <span>PDF Export</span>
          </div>
        </div>
      );
    } else {
      return (
        <div className={`w-full h-48 rounded-t-xl overflow-hidden p-4 relative flex flex-col justify-between select-none ${
          isDark ? 'bg-[#0a0a0a] border-b border-white/5' : 'bg-slate-100 border-b border-slate-200'
        }`}>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-3xs font-mono tracking-wider text-orange-500 font-bold">MISSION SHAKTI</span>
            <span className="text-3xs font-mono font-bold text-orange-500 bg-orange-500/10 px-1 py-0.5 rounded">CIVIC</span>
          </div>
          {/* Portal detail mockup */}
          <div className="space-y-2 mt-2">
            <div className={`p-2 rounded-lg text-left ${isDark ? 'bg-white/5' : 'bg-white shadow-2xs'}`}>
              <div className="flex justify-between items-center text-4xs font-mono">
                <span className="text-slate-400">UP GOVT PORTAL MONITOR</span>
                <span className="text-orange-400">Online</span>
              </div>
              <div className={`text-3xs font-sans font-bold mt-1 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                14,924 Empower registrations verified
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <div className="h-6 w-1/2 p-1.5 rounded bg-orange-550/10 flex items-center gap-1 text-4xs font-mono text-orange-500 leading-none">
              <ShieldCheck size={10} /> Secure SSL v3
            </div>
            <div className="h-6 w-1/2 p-1.5 rounded bg-orange-500/10 flex items-center gap-1 text-4xs font-mono text-orange-400 leading-none">
              <Database size={10} /> DB Protected
            </div>
          </div>
          <div className="flex items-center justify-between text-2xs font-mono text-slate-500 border-t border-white/5 pt-2 mt-1">
            <span>UP Gov Initiative</span>
            <span>WCAG 2.1 Compliant</span>
          </div>
        </div>
      );
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
               {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-orange-500 uppercase bg-orange-500/10 px-3 py-1 rounded-md border border-orange-500/20">
            Product Showcases
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-4 rounded-full shadow-lg shadow-orange-500/10" />
        </div>

        {/* Action controls row: Filters & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 max-w-5xl mx-auto">
          {/* Quick filters tag tabs */}
          <div className="flex flex-wrap gap-1.5">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-black shadow-lg shadow-orange-500/20'
                    : isDark
                      ? 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                      : 'bg-white border border-slate-250 text-slate-655 hover:text-slate-950 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Core search handle */}
          <div className="relative w-full md:w-72">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-500">
              <Search size={14} />
            </span>
            <input
              type="text"
              placeholder="Search features, tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full py-2 pl-9 pr-4 rounded-xl text-xs transition-colors outline-none border focus:ring-1 focus:ring-orange-550 ${
                isDark 
                  ? 'bg-white/5 border-white/10 text-white placeholder-slate-500' 
                  : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'
              }`}
            />
          </div>
        </div>

        {/* Dynamic Project Grid list with framer motion animations */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto text-left"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`rounded-2xl border flex flex-col h-full transform transition-all hover:scale-[1.01] hover:shadow-xl group overflow-hidden ${
                  isDark 
                    ? 'glass-card-dark border-white/10 bg-white/5 backdrop-blur-xl hover:border-orange-500/40' 
                    : 'glass-card-light border-slate-250 bg-white/70 hover:border-orange-200'
                }`}
              >
                
                {/* Visual Screenshot Representation inside card top */}
                {renderProjectMockup(project.imageType)}

                {/* Card Text parameters */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div className="space-y-4">
                    {/* Category Label badge */}
                    <span className="text-[9px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20">
                      {project.category}
                    </span>

                    <h3 className={`text-lg font-bold font-sans tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {project.title}
                    </h3>

                    <p className={`text-xs sm:text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {project.description}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-1.5 pt-1">
                      {project.features.map((feat, index) => (
                        <div key={index} className="flex gap-2 items-start text-3xs font-mono text-slate-500">
                          <CheckCircle size={10} className="text-orange-500 mt-0.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech item lists */}
                  <div className="mt-6 space-y-4">
                    <div className={`flex flex-wrap gap-1 border-t pt-4 ${isDark ? 'border-slate-900' : 'border-slate-100'}`}>
                      {project.technologies.map((t) => (
                        <span 
                          key={t}
                          className={`text-4xs font-mono px-2 py-0.5 rounded ${
                            isDark 
                              ? 'bg-slate-900/80 border border-slate-800 text-slate-400' 
                              : 'bg-slate-100 border border-slate-200 text-slate-600'
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Footer buttons link */}
                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-3xs font-mono font-semibold transition-colors ${
                          isDark 
                            ? 'bg-slate-900 border border-slate-800 text-white hover:bg-slate-800' 
                            : 'bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <Github size={12} /> Source Code
                      </a>
                      
                      {/* Interactive notification of deployed state */}
                      <button
                        onClick={() => alert(`This is a resume/CV portfolio mockup representing the production build of ${project.title}. Real commercial URLs are available on request!`)}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-3xs font-mono font-bold text-cyan-400 hover:text-cyan-300 ml-auto"
                      >
                        <ExternalLink size={12} /> Live Demo
                      </button>
                    </div>
                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search Feedback */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 max-w-sm mx-auto">
            <span className="text-4xl">🔍</span>
            <h4 className={`text-base font-bold font-sans mt-3 ${isDark ? 'text-white' : 'text-slate-800'}`}>
              No Projects Found
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              Try typing items like 'React', 'Laravel', 'JWT' or clear your filters.
            </p>
          </div>
        )}

        {/* Dynamic Details / Deployed Demo Warning Popup */}
        <AnimatePresence>
          {activeNotification && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveNotification(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className={`max-w-md w-full p-6 rounded-2xl border text-left shadow-2xl relative z-10 ${
                  isDark 
                    ? 'bg-neutral-900 border-white/10 text-white' 
                    : 'bg-white border-slate-250 text-slate-900'
                }`}
              >
                <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-4">
                  <div className="flex items-center gap-2">
                    <Info className="text-orange-500" size={18} />
                    <h4 className="font-bold font-sans text-sm uppercase tracking-wider">Project System Demo</h4>
                  </div>
                  <button 
                    onClick={() => setActiveNotification(null)}
                    className="p-1 rounded-md text-slate-400 hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <X size={16} />
                  </button>
                </div>
                <p className="text-xs leading-relaxed text-slate-300">
                  This card outlines high-fidelity components built by Shivam Maurya representing the active business code for <strong className="text-orange-400">{activeNotification}</strong>. 
                  Real-world enterprise system demonstrations, production-level code reviews, and databases schema mappings are directly available for client reviews.
                </p>
                <div className="mt-5 flex justify-end">
                  <button
                    onClick={() => setActiveNotification(null)}
                    className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 font-bold text-black border-none pointer-events-auto rounded-lg text-xs tracking-wider uppercase cursor-pointer"
                  >
                    Ack and Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
