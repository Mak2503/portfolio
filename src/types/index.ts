export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Cloud';
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type FormErrors = Partial<Record<keyof ContactForm, string>>;