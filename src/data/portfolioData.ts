// Centralized typed data source for the portfolio site

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export type SkillCategory = "Languages" | "Frameworks" | "Tools";

export interface Skill {
  name: string;
  category: SkillCategory;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  details?: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location?: string;
  github?: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  contact: ContactInfo;
  objective: string;
  experience: ExperienceItem[];
  skills: Skill[];
  education: EducationItem[];
}

export const portfolioData: PortfolioData = {
  name: "Mariam Bukhaidze",
  title: "Software Engineer - Front-End Developer",
  contact: {
    email: "mariebukh@gmail.com",
    phone: "+995 557 53 89 33",
    location: "Tbilisi, Georgia",
    github: "https://github.com/maribukh",
  },
  objective:
    "Passionate Front-End Developer with hands-on experience in React and TypeScript through academic and personal projects. I love building responsive, user-friendly applications and continuously learning new technologies to improve my skills. Motivated to contribute to real-world projects and grow as a professional in software development.",
  // TODO: Replace placeholders below with actual items from CV when available
  experience: [
    {
      role: "Front-End Developer (Academic Project)",
      company: "Self-initiated / University",
      period: "2024 – 2025",
      description: [
        "Built responsive React + TypeScript interfaces with Vite and Tailwind CSS",
        "Implemented reusable UI components and state management with hooks",
        "Collaborated via GitHub and wrote clear README and documentation",
      ],
    },
    {
      role: "Personal Projects",
      company: "Open Source / Self-Learning",
      period: "2023 – 2025",
      description: [
        "Developed a portfolio website and small React apps (API integrations)",
        "Focused on accessibility, performance, and clean component structure",
        "Practiced TypeScript typing and modern build tooling",
      ],
    },
  ],
  skills: [
    { name: "TypeScript", category: "Languages" },
    { name: "JavaScript (ESNext)", category: "Languages" },
    { name: "HTML5", category: "Languages" },
    { name: "CSS3", category: "Languages" },
    { name: "React", category: "Frameworks" },
    { name: "Tailwind CSS", category: "Frameworks" },
    { name: "Vite", category: "Tools" },
    { name: "Git & GitHub", category: "Tools" },
    { name: "REST APIs", category: "Tools" },
    { name: "Figma (basic)", category: "Tools" },
  ],
  education: [
    {
      institution: "Your University / Program",
      degree: "B.Sc. or Certification (Front-End / CS)",
      period: "Year – Year",
      details: "Replace with actual education details from CV.",
    },
  ],
};
