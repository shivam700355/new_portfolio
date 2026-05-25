import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star, MessageSquare } from 'lucide-react';
import { testimonials } from '../data';

interface TestimonialsProps {
  isDark: boolean;
}

export default function Testimonials({ isDark }: TestimonialsProps) {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-orange-500 uppercase bg-orange-500/10 px-3 py-1 rounded-md border border-orange-500/20">
            Stakeholder Verifications
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Professional Testimonials
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
          {testimonials.map((test, index) => (
            <motion.div
              key={test.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.15 }}
              className={`p-6 sm:p-8 rounded-3xl border relative flex flex-col justify-between h-full transform transition-all hover:translate-y-[-4px] ${
                isDark 
                  ? 'glass-card-dark border-white/10 bg-white/5 backdrop-blur-xl hover:border-orange-500/40 shadow-md' 
                  : 'glass-card-light border-slate-250 bg-white/70 hover:border-orange-200 shadow-sm'
              }`}
            >
              <div>
                {/* Quote details header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                    <Quote size={18} className="text-orange-500" />
                  </div>
                  
                  {/* Real visual gold star ratings */}
                  <div className="flex gap-0.5">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} size={12} className="fill-orange-400 stroke-orange-400" />
                    ))}
                  </div>
                </div>

                {/* Feedback Body */}
                <p className={`text-xs sm:text-sm leading-relaxed italic ${
                  isDark ? 'text-slate-350' : 'text-slate-600'
                }`}>
                  "{test.feedback}"
                </p>
              </div>

              {/* Stakeholder Details */}
              <div className={`mt-8 pt-4 border-t flex items-center gap-3 ${
                isDark ? 'border-white/5' : 'border-slate-100'
              }`}>
                {/* Visual Avatar initials */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 flex items-center justify-center font-bold text-xs text-black">
                  {test.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className={`text-sm font-bold font-sans ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {test.name}
                  </h4>
                  <p className="text-[10px] font-mono text-orange-400 leading-none mt-1">
                    {test.role} @ <span className="font-semibold">{test.company}</span>
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
