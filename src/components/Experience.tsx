import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Building2, Briefcase, Award, CheckCircle } from 'lucide-react';
import { experiences } from '../data';

interface ExperienceProps {
  isDark: boolean;
}

export default function Experience({ isDark }: ExperienceProps) {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-orange-500 uppercase bg-orange-500/10 px-3 py-1 rounded-md border border-orange-500/20">
            Professional Timeline
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Work Experience
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Core Body */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical center connecting indicator bar */}
          <div className={`absolute top-0 bottom-0 left-4 md:left-1/2 w-[2px] transition-colors duration-500 -ml-[1px] ${
            isDark ? 'bg-slate-800' : 'bg-slate-200'
          }`} />

          {/* Map timelines */}
          <div className="space-y-16">
            {experiences.map((exp, expIndex) => {
              const isEven = expIndex % 2 === 0;
              return (
                <div key={exp.id} className="relative flex flex-col md:flex-row items-stretch">
                  
                  {/* Circle locator dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-orange-500 z-10 flex items-center justify-center -ml-4 shadow-lg shadow-orange-500/20">
                    <Briefcase size={12} className="text-orange-400" />
                  </div>

                  {/* Left-side block (Empty on even, card on odd for screen matching) */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                    isEven ? 'md:pr-12 md:text-right text-left' : 'md:order-2 md:pl-12 text-left'
                  }`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.55, delay: expIndex * 0.1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      className={`p-6 sm:p-8 rounded-3xl border z-20 relative h-full ${
                        isDark 
                          ? 'glass-card-dark border-white/10 bg-white/5 backdrop-blur-xl' 
                          : 'glass-card-light border-slate-250 bg-white/85'
                      }`}
                    >
                      {/* Sub-header details */}
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-2xs font-mono mb-4 border ${
                        isDark 
                          ? 'bg-orange-500/15 border-orange-500/20 text-orange-400' 
                          : 'bg-orange-50 border-orange-200 text-orange-600'
                      }`}>
                        <Calendar size={12} />
                        {exp.duration}
                      </span>

                      <h3 className={`text-xl font-extrabold font-sans ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {exp.role}
                      </h3>

                      <div className={`flex items-center gap-2 mt-1.5 ${
                        isEven ? 'md:justify-end text-left' : 'justify-start'
                      }`}>
                        <Building2 size={15} className="text-orange-450" />
                        <span className={`font-mono text-xs font-semibold ${isDark ? 'text-orange-300' : 'text-orange-700'}`}>
                          {exp.company}
                        </span>
                      </div>

                      {/* Responsibilities list */}
                      <ul className={`mt-6 space-y-3.5 text-xs sm:text-sm leading-relaxed ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                      }`}>
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex gap-2.5 items-start">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Achievements callout */}
                      {exp.achievements.length > 0 && (
                        <div className={`mt-6 pt-5 border-t border-dashed ${
                          isDark ? 'border-slate-800' : 'border-slate-150'
                        }`}>
                          <h4 className={`text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 mb-2.5 ${
                            isDark ? 'text-orange-400' : 'text-orange-600'
                          } ${isEven ? 'md:justify-end' : ''}`}>
                            <Award size={14} /> Key Accomplishments
                          </h4>
                          {exp.achievements.map((ach, achIndex) => (
                            <p key={achIndex} className={`text-2xs font-mono leading-relaxed flex gap-1.5 items-start ${
                              isDark ? 'text-slate-400' : 'text-slate-500'
                            } ${isEven ? 'md:justify-end md:text-right' : 'text-left'}`}>
                              <CheckCircle size={10} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                              <span>{ach}</span>
                            </p>
                          ))}
                        </div>
                      )}

                      {/* Technology list pills */}
                      <div className={`flex flex-wrap gap-1.5 mt-6 pt-4 border-t ${
                        isDark ? 'border-white/5' : 'border-slate-100'
                      } ${isEven ? 'md:justify-end' : ''}`}>
                        {exp.techStack.map((tech) => (
                          <span 
                            key={tech} 
                            className={`text-3xs font-mono px-2 py-0.5 rounded-md ${
                              isDark 
                                ? 'bg-white/5 border border-white/10 text-slate-300' 
                                : 'bg-slate-100 border border-slate-200 text-slate-600'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </motion.div>
                  </div>

                  {/* Empty right-side content spacer block */}
                  <div className="hidden md:block w-1/2" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
