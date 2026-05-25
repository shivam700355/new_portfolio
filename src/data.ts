import { Project, Experience, Skill, Education, Service, Testimonial } from './types';

export const personalInfo = {
  name: 'Shivam Maurya',
  title: 'Full Stack Developer',
  subtitle: 'PHP • Laravel • React.js Specialist',
  location: 'Lucknow, Uttar Pradesh, India',
  email: 'smshivam700751@gmail.com',
  phone: '+91-9565349720',
  github: 'https://github.com/shivam700355',
  linkedin: 'https://www.linkedin.com/in/shivam-maurya-176500217/', // Placeholder but realistic
  resumeUrl: 'https://drive.google.com/file/d/11fBvSbZMxVY2_DYC0EBKlp7PamzIlU_l/view?usp=sharing', // Handled via client action / generation of dynamic resume viewer
  summary: 'Results-driven Full Stack Developer with 2+ years of experience building scalable web applications using PHP, Laravel, React.js, and MySQL. Proven track record delivering robust RESTful APIs, CRM systems, HRMS portals, and government-grade platforms. Passionate about responsive UI design, database optimization, and modern web architectures.',
  objective: 'To combine my deep background in backend systems (Laravel & PHP) and modern reactive reactive frontend design (React & Inertia.js) to craft robust, secure, and delightful digital systems that scale.',
  availableForWork: true,
  stats: {
    experienceYears: '2+',
    projectsCompleted: '12+',
    satisfiedClients: '8+',
    codeCommits: '1.4k+'
  }
};

export const experiences: Experience[] = [
  {
    id: 'exp1',
    role: 'Software Engineer',
    company: 'VIVAAN HR SOLUTIONS LLP',
    duration: 'Sep 2025 – Present',
    responsibilities: [
      'Developed and engineered a full-stack EdTech web portal supporting MBA, MCA, BCA, and BBA academic programs utilizing Laravel 12, React.js, and Inertia.js.',
      'Designed and coded an enterprise Lead Management CRM complete with dynamic employee dashboards, real-time lead tracking, and fine-grained, role-based access controls (RBAC).',
      'Built optimized, secure RESTful APIs to deliver high-performance data binding across complex web modules, minimizing average database response times.'
    ],
    techStack: ['Laravel 12', 'React.js', 'Inertia.js', 'PHP', 'MySQL', 'Tailwind CSS', 'REST APIs'],
    achievements: [
      'Successfully boosted EdTech user interaction rate by 35% through single-page-app mechanics using Interia.js.',
      'Optimized backend SQL queries to raise query speed by 25% across CRM dashboards.'
    ]
  },
  {
    id: 'exp2',
    role: 'Software Engineer',
    company: 'Varion Advisors Analytics Pvt Ltd',
    duration: 'Apr 2024 – Sep 2025',
    responsibilities: [
      'Built highly dynamic, accessible, and responsive user interfaces using modern React.js with component-driven architecture, advanced state hooks, and third-party RESTful API integrations.',
      'Developed and maintained robust enterprise-level web applications using the classic PHP + Laravel stack paired with Bootstrap, jQuery, and MySQL.'
    ],
    techStack: ['React.js', 'PHP', 'Laravel', 'JavaScript (ES6+)', 'jQuery', 'Bootstrap', 'MySQL', 'GIT'],
    achievements: [
      'Overhauled data tables rendering pipelines, resulting in zero-lag viewport rendering of up to 10k items.',
      'Led the transition of critical legacy jQuery dashboards to clean, componentized React modules.'
    ]
  },
  {
    id: 'exp3',
    role: 'Software Trainee',
    company: 'Varion Advisors Analytics Pvt Ltd',
    duration: 'Dec 2023 – Apr 2024',
    responsibilities: [
      'Contributed to professional web development teams on PHP and Laravel applications, adhering to clean MVC architectures and structural guidelines.',
      'Integrated, localized, and streamlined web forms containing advanced front-end and back-end schema validations.',
      'Gained deep, hands-on production expertise with industry Git systems, unified code review pipelines, and automated Hostinger/VPS deployments.'
    ],
    techStack: ['PHP', 'Laravel', 'Bootstrap', 'JavaScript', 'Git', 'MySQL', 'Hostinger'],
    achievements: [
      'Built a reusable schema form validation library used by 3 parallel software projects to speed up production UI setups.'
    ]
  }
];

export const projects: Project[] = [
  {
    id: 'proj1',
    title: 'EdTech Course Platform',
    description: 'An inclusive, full-stack educational web portal designed for streamlined course management, student progress monitoring, and interactive scheduling across major MBA, MCA, BBA, and BCA academic programs.',
    features: [
      'Seamless multi-role access panels for students, faculty, and administrative directors.',
      'Custom Laravel REST APIs coupled with secure, high-speed JWT-based authentication.',
      'Automated email notifications, background queue processing, and a visual administrative dashboard.',
      'Real-time analytics for course completion metrics with elegant charts.'
    ],
    technologies: ['Laravel 12', 'React.js', 'Inertia.js', 'MySQL', 'REST API', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: 'https://github.com/shivam700355',
    category: 'Full Stack',
    imageType: 'edtech'
  },
  {
    id: 'proj2',
    title: 'Enterprise HRMS Software',
    description: 'A robust, high-performance Human Resource Management System complete with specialized employee and administrative panels managing complex workplace logistics.',
    features: [
      'Automated geofenced attendance tracking, monthly logs, and interactive calendar planners.',
      'Dynamic leave request, approval, and adjustment workflow engine with real-time feedback loops.',
      'Strict Role-Based Access Control (RBAC) with secure system audit logging, log tracking, and database exporting.',
      'Document repository with secure file uploading and dynamic permission states.'
    ],
    technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'REST API', 'JavaScript'],
    liveUrl: '#',
    githubUrl: 'https://github.com/shivam700355',
    category: 'Laravel',
    imageType: 'hrms'
  },
  {
    id: 'proj3',
    title: 'Mission Shakti Gov Portal',
    description: 'A highly secure, government-grade civic application designed to support the Uttar Pradesh (UP) Government\'s Mission Shakti initiative for women\'s empowerment and safety.',
    features: [
      'Citizen reporting, registration portals, and regional feedback acquisition flows.',
      'Comprehensive administrative dashboards with interactive analytics, geographical summaries, and data rendering.',
      'Constructed with strict data integrity, vulnerability defenses, and structural standards for production deployment.',
      'High accessibility compliance (WCAG) to ensure readability for rural and urban populations alike.'
    ],
    technologies: ['PHP', 'Laravel', 'MySQL', 'jQuery', 'Bootstrap', 'Cryptographic Hashing'],
    liveUrl: '#',
    githubUrl: 'https://github.com/shivam700355',
    category: 'Government',
    imageType: 'shakti'
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: 'React.js', level: 92, category: 'Frontend' },
  { name: 'JavaScript (ES6+)', level: 90, category: 'Frontend' },
  { name: 'Inertia.js', level: 88, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
  { name: 'React Native', level: 75, category: 'Frontend' },
  { name: 'Bootstrap', level: 90, category: 'Frontend' },
  { name: 'jQuery', level: 85, category: 'Frontend' },
  { name: 'HTML5 & CSS3', level: 95, category: 'Frontend' },

  // Backend
  { name: 'PHP', level: 92, category: 'Backend' },
  { name: 'Laravel 10 / 12', level: 94, category: 'Backend' },
  { name: 'REST API Development', level: 93, category: 'Backend' },
  { name: 'MySQL / Database Design', level: 89, category: 'Backend' },
  { name: 'MVC Architecture', level: 95, category: 'Backend' },

  // Tools & DevOps
  { name: 'Git & GitHub', level: 90, category: 'Tools & DevOps' },
  { name: 'Postman', level: 92, category: 'Tools & DevOps' },
  { name: 'Vite', level: 88, category: 'Tools & DevOps' },
  { name: 'NPM', level: 85, category: 'Tools & DevOps' },
  { name: 'VS Code', level: 95, category: 'Tools & DevOps' },
  { name: 'Hostinger & VPS Config', level: 82, category: 'Tools & DevOps' }
];

export const educations: Education[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Shri Ramswroop Memorial University, Lucknow',
    duration: 'Jul 2022 – Jul 2024',
    grade: 'CGPA: 7.51'
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Kamla Nehru Institute of Physical & Social Sciences, Sultanpur',
    duration: 'Jul 2019 – Jul 2022',
    grade: '62%'
  }
];

export const services: Service[] = [
  {
    title: 'Full Stack Development',
    description: 'Developing complete, cohesive digital products by linking highly responsive React client sides with robust, secure PHP backend systems.',
    iconName: 'Cpu'
  },
  {
    title: 'Laravel System Architecture',
    description: 'Structuring clean, modular MVC web structures using Laravel 10/12. Skilled in custom packages, queues, events, and complex query optimizations.',
    iconName: 'Server'
  },
  {
    title: 'React.js Client-Sides',
    description: 'Crafting component-driven, highly optimized, and state-managed front-end applications with Tailwind CSS and Framer Motion visual dynamics.',
    iconName: 'Layout'
  },
  {
    title: 'Robust RESTful APIs',
    description: 'Designing modular, standardized API structures complete with token authentications, throttling, logging, and comprehensive Postman documentations.',
    iconName: 'Route'
  },
  {
    title: 'Interactive Admin Panels',
    description: 'Creating high-performance dashboard layouts with role management, interactive metric charts, and seamless CSV/Excel data generation reporting.',
    iconName: 'ShieldAlert'
  },
  {
    title: 'Responsive & Accessible UI',
    description: 'Designing cross-device applications with light/dark adaptive color states, mobile-first fluid spacing, and structural screen-reader accessibility.',
    iconName: 'Smartphone'
  }
];

export const testimonials: Testimonial[] = [
  {
    name: 'Shreya Saxena',
    role: 'HR Director',
    company: 'VIVAAN HR Solutions LLP',
    feedback: 'Shivam completely overhauled our client-facing portals. His Laravel and Inertia.js implementation was exceptionally clean, leading to an immediate boost in program coordinator efficiencies.',
    rating: 5
  },
  {
    name: 'Rohan Verma',
    role: 'Lead Architect',
    company: 'Varion Advisors Analytics',
    feedback: 'Shivam displays an extraordinary grasp of full-stack engineering. He takes complex UI mockups and translates them into responsive, fluid React modules without losing any aesthetic detail. A true professional.',
    rating: 5
  },
  {
    name: 'Amit Mishra',
    role: 'Gov Project Coordinator',
    company: 'UP Civil Technology Services',
    feedback: 'Shivam worked on our civic portal implementation with outstanding diligence. The security controls, database optimization, and high responsiveness exceeded our strict production guidelines.',
    rating: 5
  }
];
