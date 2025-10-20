import type { ReactNode } from "react";
import Photo from "../assets/profilephoto.jpg";

export interface Course {
  id: string;
  title: string;
  level: "Beginner" | "Advanced" | "Workshop";
  duration: string;
  description: string;
  technologies: string[];
  price: number;
}

export interface EducationHistory {
  [x: string]: ReactNode;
  year: string;
  title: string;
  source: string;
}

export interface Instructor {
  name: string;
  title: string;
  bio: string;
  imageUrl?: string;
  educationHistory: EducationHistory[];
  contact: {
    email: string;
    github: string;
  };
}

export const academyData: {
  instructor: Instructor;
  courses: Course[];
} = {
  instructor: {
    name: "Mariam Bukhaidze",
    imageUrl: Photo,
    title: "Software Engineer & Front-End Developer",
    bio: "Passionate Front-End Developer with hands-on experience in React and TypeScript. I love building responsive, user-friendly applications and continuously learning new technologies to improve my skills.",
    contact: {
      email: "mariebukh@gmail.com",
      github: "https://github.com/maribukh",
    },
    educationHistory: [
      {
        year: "2024",
        title: "Front-End with React",
        source: "Tbilisi School of Communication",
      },
      {
        year: "2024 - 2025",
        title: "Front-End Development ",
        source: "Ivane Javakhishvili Tbilisi State University",
      },
      {
        year: "2025 - Present",
        title: "Women Mentorship in Tech",
        source: "Business and Technology University",
      },
      {
        year: "2025",
        title: "Front-End Programming with React",
        source: "New Horizons",
      },
    ],
  },
  courses: [
    {
      id: "react-full-immersion",
      title: "React: Full Immersion",
      level: "Beginner",
      duration: "12 Weeks",
      description:
        "A comprehensive ticket into the world of front-end development. We'll start with the basics of HTML, CSS, and JavaScript, then dive deep into building modern, fast, and interactive web applications with React.",
      technologies: [
        "React",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "TailwindCSS",
      ],
      price: 1800,
    },
    {
      id: "ui-architect",
      title: "UI Architect: Modern Styling",
      level: "Advanced",
      duration: "6 Weeks",
      description:
        "For those already familiar with JavaScript and React who want to build truly beautiful and professional interfaces. We'll explore advanced styling techniques and component libraries.",
      technologies: ["TailwindCSS", "SCSS", "CSS Grid & Flexbox", "Animations"],
      price: 950,
    },
    {
      id: "real-time-chat-workshop",
      title: "Workshop: Real-Time Chat with React",
      level: "Workshop",
      duration: "4 Weeks",
      description:
        "Maximum practice, minimum theory. In 4 weeks, we will build a fully functional real-time chat application from scratch. You'll learn to work with APIs and manage complex state.",
      technologies: ["React", "TypeScript", "Fetch API", "WebSockets (Basics)"],
      price: 800,
    },
  ],
};
