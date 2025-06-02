export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  liveLink: string;
  githubLink: string;
  technologies: string[];
  featured?: boolean;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'tools' | 'other';
  icon?: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}