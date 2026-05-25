import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Cpu, Database, Settings, Terminal, Award, Calendar } from 'lucide-react';
import { skills } from '../data';

interface SkillsProps {
  isDark: boolean;
}

export default function Skills({ isDark }: SkillsProps) {
  const [activeTab, setActiveTab] = useState<'All' | 'Frontend' | 'Backend' | 'Tools & DevOps'>('All');

  const categories = ['All', 'Frontend', 'Backend', 'Tools & DevOps'] as const;

  const filteredSkills = activeTab === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);

  // Generate a mock but highly realistic-looking GitHub contribution graph array (53 weeks * 7 days)
  // Let's seed a consistent pattern that has higher density during weekdays
  const generateContributions = () => {
    const grid: number[][] = [];
    const seed = [0, 1, 1, 2, 0, 3, 4, 1, 2, 0, 1, 2, 3, 2, 1, 0, 4, 3, 2, 1, 0, 0, 1, 2, 1, 3, 4, 0, 2, 3, 1];
    
    for (let w = 0; w < 53; w++) {
      const week: number[] = [];
      for (let d = 0; d < 7; d++) {
        // Create an organic look with seed index, adding heavy activity during weekdays
        const isWeekend = d === 0 || d === 6;
        const baseIndex = (w * 7 + d) % seed.length;
        let value = seed[baseIndex];
        if (isWeekend) {
          value = Math.max(0, value - 2); // Less activity on weekends
        }
        week.push(value);
      }
      grid.push(week);
    }
    return grid;
  };

  const contributionsGrid = generateContributions();

  // Color mapper based on value: 0 (none), 1 (low), 2 (medium), 3 (high), 4 (extreme)
  const getContributionColor = (value: number) => {
    if (isDark) {
      switch (value) {
        case 0: return 'bg-slate-900 border border-slate-950/10';
        case 1: return 'bg-emerald-950 border border-emerald-900/10';
        case 2: return 'bg-emerald-800 border border-emerald-700/10';
        case 3: return 'bg-emerald-600 border border-emerald-500/10';
        case 4: return 'bg-emerald-400 border border-emerald-300/10';
        default: return 'bg-slate-900';
      }
    } else {
      switch (value) {
        case 0: return 'bg-slate-100 border border-slate-200/20';
        case 1: return 'bg-emerald-100 border border-emerald-50/10';
        case 2: return 'bg-emerald-300 border border-emerald-250/10';
        case 3: return 'bg-emerald-500 border border-emerald-400/10';
        case 4: return 'bg-emerald-600 border border-emerald-500/10';
        default: return 'bg-slate-100';
      }
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-orange-500 uppercase bg-orange-500/10 px-3 py-1 rounded-md border border-orange-500/20">
            Capabilities Matrix
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Technical Expertise
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-4 rounded-full shadow-lg shadow-orange-500/10" />
        </div>

        {/* Categories Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-xl font-sans font-bold text-sm transition-all focus:outline-none cursor-pointer ${
                activeTab === cat
                  ? 'bg-gradient-to-tr from-orange-500 to-orange-600 text-black font-extrabold shadow-lg shadow-orange-500/20'
                  : isDark
                    ? 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                    : 'bg-white border border-slate-250 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <span className="flex items-center gap-1.5">
                {cat === 'Frontend' && <Cpu size={14} />}
                {cat === 'Backend' && <Database size={14} />}
                {cat === 'Tools & DevOps' && <Settings size={14} />}
                {cat}
              </span>
            </button>
          ))}
        </div>

        {/* Filtered Skills Grid list */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 text-left"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: index * 0.02 }}
                className={`p-5 rounded-2xl border ${
                  isDark 
                    ? 'glass-card-dark border-slate-800/80' 
                    : 'glass-card-light border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className={
                      skill.category === 'Frontend' 
                        ? 'text-orange-500' 
                        : skill.category === 'Backend' 
                          ? 'text-orange-400' 
                          : 'text-orange-400'
                    } />
                    <span className={`font-sans font-bold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {skill.name}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-orange-500 bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 rounded-md">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar container */}
                <div className={`h-2 w-full rounded-full overflow-hidden ${
                  isDark ? 'bg-black/40' : 'bg-slate-100'
                }`}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-full rounded-full bg-gradient-to-r from-orange-400 to-orange-600"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub Contribution style section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`p-6 sm:p-8 rounded-3xl border text-left overflow-hidden ${
            isDark 
              ? 'glass-card-dark border-slate-800 bg-slate-950/45' 
              : 'glass-card-light border-slate-250 bg-white/75'
          }`}
        >
          {/* Header strip */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-dashed border-slate-800/60">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                <Calendar size={20} />
              </div>
              <div>
                <h3 className={`text-lg font-bold font-sans ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Continuous Git Activities
                </h3>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  GitHub contribution metrics: 1,424 commits matched across production systems
                </p>
              </div>
            </div>
            
            {/* Status work info */}
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span className={`text-xs font-mono font-semibold ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
                Active GitHub repository syncs
              </span>
            </div>
          </div>

          {/* Map Grid Container with responsive scrollbar */}
          <div className="overflow-x-auto pb-4 pt-1">
            <div className="min-w-[700px] flex gap-1 relative justify-center">
              {contributionsGrid.map((week, wIndex) => (
                <div key={wIndex} className="flex flex-col gap-1">
                  {week.map((value, dIndex) => (
                    <div
                      key={dIndex}
                      className={`w-2.5 h-2.5 rounded-xs transition-all duration-300 hover:scale-130 ${getContributionColor(value)}`}
                      title={`Week ${wIndex + 1}, Day ${dIndex + 1}: ${value === 0 ? 'No' : value * 2 + 1} commits`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Heatmap Legend */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 font-mono text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <Award size={14} className="text-cyan-400" />
              <span>Shivam commits regularly to active enterprise platforms</span>
            </div>
            <div className="flex items-center gap-1.5 self-end">
              <span>Less</span>
              <div className="w-2.5 h-2.5 rounded-sm bg-slate-900 border border-slate-950/10" />
              <div className="w-2.5 h-2.5 rounded-sm bg-emerald-950 border border-emerald-900/10" />
              <div className="w-2.5 h-2.5 rounded-sm bg-emerald-800 border border-emerald-700/10" />
              <div className="w-2.5 h-2.5 rounded-sm bg-emerald-600 border border-emerald-500/10" />
              <div className="w-2.5 h-2.5 rounded-sm bg-emerald-400 border border-emerald-300/10" />
              <span>More</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
