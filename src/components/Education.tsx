import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';
import { educations } from '../data';

interface EducationProps {
  isDark: boolean;
}

export default function Education({ isDark }: EducationProps) {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-orange-500 uppercase bg-orange-500/10 px-3 py-1 rounded-md border border-orange-500/20">
            Academic Background
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Education History
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Academic Card stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
          {educations.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: index === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
              className={`p-6 sm:p-8 rounded-3xl border relative overflow-hidden flex flex-col justify-between ${
                isDark 
                  ? 'glass-card-dark border-white/10 bg-white/5 backdrop-blur-xl hover:border-orange-500/40' 
                  : 'glass-card-light border-slate-250 bg-white/75 hover:border-orange-200'
              }`}
            >
              <div>
                {/* Visual badge top */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shadow-sm shadow-orange-500/10">
                    <GraduationCap size={22} className="text-orange-500" />
                  </div>
                  <span className={`inline-flex items-center gap-1 text-2xs font-mono px-3 py-1 rounded-full border ${
                    isDark 
                      ? 'bg-white/5 border-white/10 text-slate-300' 
                      : 'bg-slate-100 border-slate-200 text-slate-600'
                  }`}>
                    <Calendar size={12} className="text-orange-500" />
                    {edu.duration}
                  </span>
                </div>

                {/* Degrees */}
                <h3 className={`text-lg sm:text-xl font-bold font-sans tracking-tight mb-2 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {edu.degree}
                </h3>

                <p className={`text-xs font-semibold font-mono ${
                  isDark ? 'text-orange-400' : 'text-orange-600'
                }`}>
                  {edu.institution}
                </p>
              </div>

              {/* Grades scoring strip */}
              <div className={`mt-8 pt-4 border-t flex items-center justify-between ${
                isDark ? 'border-white/5' : 'border-slate-100'
              }`}>
                <div className="flex items-center gap-1.5 text-2xs font-mono text-slate-500">
                  <BookOpen size={12} />
                  <span>Graduation Scope Checklist</span>
                </div>
                <span className="font-mono text-xs font-bold text-orange-450 bg-orange-500/10 px-2.5 py-1 rounded-md border border-orange-500/20">
                  {edu.grade}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
