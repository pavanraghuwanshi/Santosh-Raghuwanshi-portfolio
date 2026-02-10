import { LucideIcon } from 'lucide-react';

export interface SkillCategory {
  category: string;
  icon: LucideIcon;
  items: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  points: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  year: string;
  grade: string;
}