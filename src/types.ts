export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'Full Stack' | 'Laravel' | 'React' | 'Government';
  imageType: 'edtech' | 'hrms' | 'shakti';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
  techStack: string[];
  achievements: string[];
}

export interface Skill {
  name: string;
  level: number; // 0 - 100 for progress bar
  category: 'Frontend' | 'Backend' | 'Tools & DevOps';
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  grade: string;
}

export interface Service {
  title: string;
  description: string;
  iconName: string; // Lucide icon identifier
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  feedback: string;
  rating: number;
}
