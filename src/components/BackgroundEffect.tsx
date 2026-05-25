import React from 'react';
import { motion } from 'motion/react';

interface BackgroundEffectProps {
  isDark: boolean;
}

export default function BackgroundEffect({ isDark }: BackgroundEffectProps) {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background base color with gentle transition */}
      <div 
        className={`absolute inset-0 transition-colors duration-700 ${
          isDark 
            ? 'bg-[#050505]' 
            : 'bg-radial from-orange-50/60 via-zinc-50 to-slate-100'
        }`}
      />

      {/* Decorative floating blurred gradient blobs matching Immersive UI */}
      <motion.div
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className={`absolute top-[-10%] left-[-5%] w-[450px] h-[450px] rounded-full blur-[120px] transition-colors duration-700 ${
          isDark ? 'bg-orange-600/18' : 'bg-orange-500/15'
        }`}
      />

      <motion.div
        animate={{
          x: [0, -40, 40, 0],
          y: [0, 40, -40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className={`absolute bottom-[-10%] right-[-5%] w-[550px] h-[550px] rounded-full blur-[150px] transition-colors duration-700 ${
          isDark ? 'bg-blue-600/12' : 'bg-blue-500/10'
        }`}
      />

      <motion.div
        animate={{
          x: [0, 20, -20, 0],
          y: [0, 20, 10, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        className={`absolute top-[40%] left-[30%] w-[35vw] h-[35vw] rounded-full blur-[130px] opacity-20 transition-colors duration-700 ${
          isDark ? 'bg-orange-500/8' : 'bg-orange-200/20'
        }`}
      />

      {/* Subtle Grid pattern overlay */}
      <div 
        className={`absolute inset-0 transition-opacity duration-700 ${
          isDark ? 'opacity-[0.04]' : 'opacity-[0.06]'
        }`}
        style={{
          backgroundImage: `
            radial-gradient(${isDark ? '#fff' : '#000'} 1px, transparent 1px),
            linear-gradient(to right, ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'} 1px, transparent 1px),
            linear-gradient(to bottom, ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'} 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px, 48px 48px, 48px 48px',
        }}
      />
    </div>
  );
}
