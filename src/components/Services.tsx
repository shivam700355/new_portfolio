import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { services } from '../data';

interface ServicesProps {
  isDark: boolean;
}

export default function Services({ isDark }: ServicesProps) {
  // Helper to render Lucide icon dynamically from string name
  const renderIcon = (name: string) => {
    // Falls back to Cpu if not found
    const IconComponent = (Icons as any)[name] || Icons.Cpu;
    return <IconComponent size={24} className="text-orange-500" />;
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-orange-500 uppercase bg-orange-500/10 px-3 py-1 rounded-md border border-orange-500/20">
            What I Offer
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Professional Services
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Services Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.1 }}
              className={`p-6 sm:p-8 rounded-3xl border relative group transition-all duration-300 hover:translate-y-[-4px] overflow-hidden ${
                isDark 
                  ? 'glass-card-dark border-white/10 bg-white/5 backdrop-blur-xl hover:border-orange-500/40' 
                  : 'glass-card-light border-slate-250 bg-white/75 hover:border-orange-200 shadow-xs'
              }`}
            >
              {/* Highlight background elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-tr from-orange-500 to-orange-600 rounded-bl-full opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

              {/* Icon Container with glowing ring */}
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6 shadow-sm shadow-orange-500/10">
                {renderIcon(service.iconName)}
              </div>

              {/* Title & Description */}
              <h3 className={`text-lg font-bold font-sans tracking-tight mb-3 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {service.title}
              </h3>

              <p className={`text-xs sm:text-sm leading-relaxed ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {service.description}
              </p>

              {/* Micro decoration for visual craftsmanship */}
              <div className="mt-6 flex items-center gap-1.5 text-2xs font-mono text-orange-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                <span>Enterprise Standard</span>
                <span className="w-3 h-[1px] bg-orange-500" />
                <span>MVC Pattern</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
