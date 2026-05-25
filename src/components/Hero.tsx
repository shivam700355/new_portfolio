import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, Github, Linkedin, Mail, CheckCircle, Flame, Star, Sparkles, Terminal } from 'lucide-react';
import { personalInfo } from '../data';

interface HeroProps {
  isDark: boolean;
  onNavigateToSection: (id: string) => void;
}

export default function Hero({ isDark, onNavigateToSection }: HeroProps) {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    'Full Stack Developer',
    'Laravel & PHP Expert',
    'React.js Specialist',
    'REST API Architect',
    'Inertia.js Innovator'
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = roles[roleIndex];
    
    const tick = () => {
      if (!isDeleting) {
        setTypedText(currentFullText.substring(0, typedText.length + 1));
        if (typedText === currentFullText) {
          timer = setTimeout(() => setIsDeleting(true), 2500); // Wait on full text
          return;
        }
      } else {
        setTypedText(currentFullText.substring(0, typedText.length - 1));
        if (typedText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }
      
      const speed = isDeleting ? 30 : 70;
      timer = setTimeout(tick, speed);
    };

    timer = setTimeout(tick, isDeleting ? 30 : 100);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  // Dynamic resume generator so the user can easily view or print it professionally
  const handlePrintResume = () => {
    // Generate a printable window or download dynamic content
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Shivam Maurya - Resume</title>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
            <style>
              @media print {
                body { color-adjust: exact; -webkit-print-color-adjust: exact; }
                .no-print { display: none; }
              }
            </style>
          </head>
          <body class="bg-white text-gray-800 p-8 max-w-4xl mx-auto my-4 font-sans border border-gray-200 shadow-lg">
            <div class="flex justify-between items-center mb-6 no-print bg-gray-50 p-4 rounded-lg border">
              <div>
                <h4 class="font-bold text-gray-700">Shivam Maurya Printer-Friendly CV</h4>
                <p class="text-xs text-gray-500">Automatically formatted for clean A4 paper rendering.</p>
              </div>
              <button onclick="window.print()" class="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-1.5 px-4 rounded text-sm transition shadow">
                Print Resume
              </button>
            </div>
            
            <header class="border-b-2 border-cyan-600 pb-3 mb-6">
              <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">SHIVAM MAURYA</h1>
              <p class="text-md font-semibold text-cyan-600 mt-1">Full Stack Developer | PHP | Laravel | React.js</p>
              <div class="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-600 mt-2">
                <span>📍 Lucknow, India</span>
                <span>📧 smshivam700751@gmail.com</span>
                <span>📞 +91-9565349720</span>
                <span>🌐 <a href="https://github.com/shivam700355" target="_blank" class="text-cyan-600 hover:underline">github.com/shivam700355</a></span>
              </div>
            </header>

            <section class="mb-6">
              <h2 class="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-2 uppercase tracking-wide">Professional Summary</h2>
              <p class="text-xs text-gray-700 leading-relaxed">
                Results-driven Full Stack Developer with 2+ years of experience building scalable web applications using PHP, Laravel, React.js, and MySQL. Proven track record delivering RESTful APIs, CRM systems, HRMS portals, and government-grade platforms. Responsive UI design, and cross-functional collaboration in fast-paced environments.
              </p>
            </section>

            <section class="mb-6">
              <h2 class="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-2 uppercase tracking-wide">Work Experience</h2>
              
              <div class="mb-4">
                <div class="flex justify-between text-xs font-bold text-gray-900">
                  <span>Software Engineer | VIVAAN HR SOLUTIONS LLP</span>
                  <span>Sep 2025 – Present</span>
                </div>
                <ul class="list-disc pl-5 text-2xs text-gray-700 mt-1 space-y-1">
                  <li>Developed a full-stack EdTech web portal supporting MBA, MCA, BCA, and BBA programs using Laravel 12, React.js, Inertia.js, PHP, and MySQL.</li>
                  <li>Designed and implemented a Lead Management CRM with employee dashboards, real-time lead tracking, and role-based access control (RBAC).</li>
                  <li>Built RESTful APIs and optimized database queries for improved application performance and scalability.</li>
                </ul>
              </div>

              <div class="mb-4">
                <div class="flex justify-between text-xs font-bold text-gray-900">
                  <span>Software Engineer | Varion Advisors Analytics Pvt Ltd</span>
                  <span>Apr 2024 – Sep 2025</span>
                </div>
                <ul class="list-disc pl-5 text-2xs text-gray-700 mt-1 space-y-1">
                  <li>Built dynamic, responsive user interfaces using React.js with component-based architecture, state management (hooks), and RESTful API integration.</li>
                  <li>Developed and maintained web applications using PHP, Laravel, JavaScript (jQuery), Bootstrap, and MySQL.</li>
                </ul>
              </div>

              <div>
                <div class="flex justify-between text-xs font-bold text-gray-900">
                  <span>Software Trainee | Varion Advisors Analytics Pvt Ltd</span>
                  <span>Dec 2023 – Apr 2024</span>
                </div>
                <ul class="list-disc pl-5 text-2xs text-gray-700 mt-1 space-y-1">
                  <li>Contributed to web development projects using PHP, Laravel, and Bootstrap within a structured team.</li>
                  <li>Developed and improved responsive UI components and form validation workflows.</li>
                  <li>Gained hands-on experience with version control (Git), code review processes, and deployment workflows.</li>
                </ul>
              </div>
            </section>

            <section class="mb-6">
              <h2 class="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-2 uppercase tracking-wide">Key Projects</h2>
              
              <div class="mb-3">
                <p class="text-xs font-bold text-gray-900">EdTech Platform — <span class="font-normal text-gray-600">Laravel 12 | React.js | Inertia.js | MySQL | REST API</span></p>
                <ul class="list-disc pl-5 text-2xs text-gray-700 mt-0.5 space-y-0.5">
                  <li>Full-stack EdTech portal covering course management for MBA, MCA, BCA, and BBA programs.</li>
                  <li>Designed REST APIs, JWT-based authentication, and admin dashboards for lead and course management.</li>
                  <li>Integrated email notification system and built fully responsive frontend UI using React.js and Tailwind CSS.</li>
                </ul>
              </div>

              <div class="mb-3">
                <p class="text-xs font-bold text-gray-900">HRMS Software — <span class="font-normal text-gray-600">Laravel | PHP | MySQL | Bootstrap</span></p>
                <ul class="list-disc pl-5 text-2xs text-gray-700 mt-0.5 space-y-0.5">
                  <li>Built role-based HRMS system with separate Employee and Admin panels; features include attendance management, logs, leave, and reports.</li>
                  <li>Implemented RBAC with audit logging and data export functionality for HR analytics.</li>
                </ul>
              </div>

              <div>
                <p class="text-xs font-bold text-gray-900">Mission Shakti Portal — <span class="font-normal text-gray-600">Government Project | Laravel | PHP | MySQL</span></p>
                <ul class="list-disc pl-5 text-2xs text-gray-700 mt-0.5 space-y-0.5">
                  <li>Developed dashboard, registration, and reporting modules for the UP Government Mission Shakti women empowerment initiative.</li>
                  <li>Ensured data integrity and security compliance for government-grade production deployment.</li>
                </ul>
              </div>
            </section>

            <section class="mb-6">
              <h2 class="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-2 uppercase tracking-wide">Technical Skills</h2>
              <div class="grid grid-cols-3 gap-4 text-2xs text-gray-700">
                <div>
                  <p class="font-bold underline text-gray-900 mb-1">Frontend</p>
                  <p>HTML5, CSS3, JavaScript (ES6+), React.js, React Native, Bootstrap, Tailwind CSS, jQuery, Inertia.js</p>
                </div>
                <div>
                  <p class="font-bold underline text-gray-900 mb-1">Backend</p>
                  <p>PHP, Laravel (v10/12), RESTful API Development, MVC Architecture, MySQL, SQL, Database Design</p>
                </div>
                <div>
                  <p class="font-bold underline text-gray-900 mb-1">DevOps & Tools</p>
                  <p>Git, GitHub, Postman, VS Code, npm, Vite, Hostinger, Developer Tools</p>
                </div>
              </div>
            </section>

            <section>
              <h2 class="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-2 uppercase tracking-wide">Education</h2>
              <div class="flex justify-between text-xs font-bold text-gray-900 mb-1">
                <span>Master of Computer Applications (MCA)</span>
                <span>Jul 2022 – Jul 2024</span>
              </div>
              <p class="text-2xs text-gray-700 mb-2">Shri Ramswroop Memorial University, Lucknow | CGPA: 7.51</p>

              <div class="flex justify-between text-xs font-bold text-gray-900 mb-1">
                <span>Bachelor of Computer Applications (BCA)</span>
                <span>Jul 2019 – Jul 2022</span>
              </div>
              <p class="text-2xs text-gray-700">Kamla Nehru Institute, Sultanpur | 62%</p>
            </section>
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Area */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6 text-left">
          
          {/* Work status badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex self-start items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full"
          >
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Available for Work</span>
          </motion.div>

          {/* Title Area */}
          <div className="space-y-3">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-orange-500 font-mono text-sm tracking-widest uppercase block"
            >
              Full Stack Developer
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[0.95] tracking-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Shivam<br />Maurya
            </motion.h1>
            
            {/* Roles Typewriter with dynamic orange/apricot gradient */}
            <div className="h-8 flex items-center text-sm font-mono tracking-wider text-orange-450">
              <span className="text-gray-450 mr-2">&gt;</span>
              <span>{typedText}</span>
              <span className="inline-block w-1.5 h-4 ml-1 bg-orange-500 animate-pulse">|</span>
            </div>
          </div>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className={`text-sm leading-relaxed max-w-sm italic ${
              isDark ? 'text-gray-400' : 'text-slate-650'
            }`}
          >
            Crafting scalable web applications with Laravel and React. High-performance architecture meets modern UI aesthetics.
          </motion.p>

          {/* Social Icons Row */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3"
          >
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`p-2.5 rounded-lg border transition-all ${
                isDark 
                  ? 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10' 
                  : 'bg-white/50 border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-100 hover:border-slate-300'
              }`}
              title="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`p-2.5 rounded-lg border transition-all ${
                isDark 
                  ? 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10' 
                  : 'bg-white/50 border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-100 hover:border-slate-300'
              }`}
              title="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`}
              className={`p-2.5 rounded-lg border transition-all ${
                isDark 
                  ? 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10' 
                  : 'bg-white/50 border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-100 hover:border-slate-300'
              }`}
              title="Email Shivam"
            >
              <Mail size={18} />
            </a>
          </motion.div>

          {/* CTA Buttons closely matching Design HTML */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex gap-4 pt-2"
          >
            <button
              onClick={() => onNavigateToSection('contact')}
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg font-bold text-black hover:scale-105 transition-transform shadow-lg shadow-orange-500/20 active:scale-95 text-xs tracking-wider uppercase cursor-pointer"
            >
              Hire Me
            </button>
            <button
              onClick={handlePrintResume}
              className={`px-6 py-3 rounded-lg font-bold text-xs tracking-wider uppercase border cursor-pointer flex items-center justify-center gap-1.5 active:scale-95 transition-all ${
                isDark 
                  ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' 
                  : 'bg-white border-slate-250 text-slate-800 hover:bg-slate-50'
              }`}
            >
              Download CV <Download size={13} />
            </button>
          </motion.div>

          {/* Immersive UI credentials stats block */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5 max-w-sm mt-4">
            <div>
              <div className="text-2xl font-bold text-white">2+</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">Years Exp.</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">15+</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">Projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">Lucknow</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">Location</div>
            </div>
          </div>

        </div>

        {/* Interactive Code Bento Card / Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className={`lg:col-span-7 rounded-2xl border overflow-hidden shadow-2xl relative ${
            isDark 
              ? 'glass-card-dark border-white/10 bg-white/5 backdrop-blur-xl' 
              : 'glass-card-light border-slate-200 bg-white/75'
          }`}
        >
          {/* Window Chrome Header Bar */}
          <div className={`px-4 py-3 border-b flex items-center justify-between ${
            isDark ? 'bg-black/40 border-white/10' : 'bg-slate-100/8c border-slate-200/80'
          }`}>
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider opacity-60">
              <Terminal size={11} />
              <span>ShivamController.ts</span>
            </div>
            <span className="text-[10px] font-mono py-0.5 px-2 bg-orange-500/10 text-orange-400 border border-orange-500/20 rounded-md">TypeScript</span>
          </div>

          {/* Web editor layout content */}
          <div className="p-5 font-mono text-xs overflow-x-auto leading-relaxed text-left max-h-[380px]">
            <span className="text-orange-400">import</span> {'{'} FullStackDeveloper, TechStack {'}'} <span className="text-orange-400">from</span> <span className="text-blue-300">"shivam-core"</span>;
            <br />
            <br />
            <span className="text-orange-400 font-bold">export default class</span> <span className="text-yellow-350 font-bold">ShivamMaurya</span> <span className="text-orange-400">implements</span> <span className="text-yellow-350">FullStackDeveloper</span> {'{'}
            <br />
            &nbsp;&nbsp;<span className="text-slate-500">// Interactive telemetry metrics</span>
            <br />
            &nbsp;&nbsp;<span className="text-blue-400">public readonly</span> expYears: <span className="text-blue-400">number</span> = <span className="text-emerald-405">2</span>;
            <br />
            &nbsp;&nbsp;<span className="text-blue-400">public readonly</span> location: <span className="text-blue-400">string</span> = <span className="text-orange-300">'Lucknow, India'</span>;
            <br />
            &nbsp;&nbsp;<span className="text-blue-400">public</span> loveBuilding: <span className="text-blue-400">boolean</span> = <span className="text-emerald-405">true</span>;
            <br />
            <br />
            &nbsp;&nbsp;<span className="text-orange-400">public</span> <span className="text-yellow-350">getCoreTech</span>(): TechStack {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-400">return</span> {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;frontend: [<span className="text-orange-300">'React.js', 'Inertia.js', 'Tailwind', 'Native'</span>],
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;backend: [<span className="text-orange-300">'PHP', 'Laravel 10/12', 'REST APIs', 'MySQL'</span>],
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;devops: [<span className="text-orange-300">'Git', 'Vite', 'Postman', 'Hostinger VPS'</span>]
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'};'}
            <br />
            &nbsp;&nbsp;{'}'}
            <br />
            <br />
            &nbsp;&nbsp;<span className="text-orange-500">public</span> <span className="text-yellow-350">solveProblem</span>(difficulty: <span className="text-blue-400">string</span>) {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-450">if</span> (difficulty === <span className="text-orange-300">'Hard'</span>) {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.sipCoffee();
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-450">return</span> this.applyCleanPatterns();
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-450">return</span> <span className="text-orange-300">'Shipped with high test coverages!'</span>;
            <br />
            &nbsp;&nbsp;{'}'}
            <br />
            {'}'}
          </div>

          {/* Quick Stats strip inside editor pane */}
          <div className={`px-4 py-2 border-t flex items-center justify-between text-[10px] font-mono opacity-80 ${
            isDark ? 'bg-black/30 border-white/5' : 'bg-slate-50 border-slate-200'
          }`}>
            <span className="flex items-center gap-1"><Flame size={12} className="text-orange-500 animate-pulse" /> Active Session: Standard Dev Workspace</span>
            <span className="flex items-center gap-1"><Star size={12} className="text-yellow-400" /> UTF-8 v1.0</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
