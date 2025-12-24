export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Education {
  institution: string;
  degree: string;
  gpa?: string;
  period?: string;
  location?: string;
}

export interface Experience {
  role: string;
  company?: string;
  project?: string;
  period: string;
  description: string;
  link?: string;
  technologies?: string[];
  type: 'Work' | 'Project' | 'Research' | 'Volunteering';
}

export interface Certificate {
  name: string;
  issuer: string;
  credentialId?: string;
  date?: string;
}

export interface Language {
  language: string;
  proficiency: string;
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  contact: ContactInfo;
  education: Education[];
  skills: SkillCategory[];
  projects: Experience[];
  certificates: Certificate[];
  languages: Language[];
}