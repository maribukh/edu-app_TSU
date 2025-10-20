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
  id: number;
  period: string;
  title: string;
  source: string;
  description: string;
  keySkills: string[];
}

export interface WorkExperience {
  id: number;
  period: string;
  title: string;
  company: string;
  description: string;
  keySkills: string[];
  projects?: { name: string; url: string }[];
}

export interface Instructor {
  name: string;
  title: string;
  bio: string;
  imageUrl?: string;
  educationHistory: EducationHistory[];
  experience: WorkExperience[];
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
    bio: "Passionate Front-End Developer with hands-on experience in React and TypeScript through academic and personal projects. I love building responsive, user-friendly applications and continuously learning new technologies to improve my skills.",
    contact: {
      email: "mariebukh@gmail.com",
      github: "https://github.com/maribukh",
    },
    experience: [
      {
        id: 1,
        period: "2025 (2 Months)",
        title: "Full-Stack Developer Intern",
        company: "Itransition",
        description:
          "Engaged in a hands-on internship, gaining practical experience in both front-end and back-end development. Focused on building and integrating full-stack applications.",
        keySkills: [
          "Node.js & Express",
          "REST API Design",
          "Database Integration",
          "Full-Stack Architecture",
        ],
        projects: [
          {
            name: "User Management App",
            url: "https://github.com/maribukh/user-management-app_itransition",
          },
          {
            name: "Music Store API",
            url: "https://github.com/maribukh/music-store-backend",
          },
        ],
      },
    ],
    educationHistory: [
      {
        id: 1,
        period: "2020 - 2024",
        title: "Bachelor of Business Administration (IT Management)",
        source: "Ivane Javakhishvili Tbilisi State University",
        description:
          "Received a foundational education in business principles with a focus on information technology management.",
        keySkills: [
          "Project Management",
          "IT Strategy",
          "Business Analysis",
          "Database Fundamentals",
        ],
      },
      {
        id: 2,
        period: "2024 - Present",
        title: "Front-End Development Program",
        source: "Ivane Javakhishvili Tbilisi State University",
        description:
          "Gained hands-on experience with React, TypeScript, and modern styling tools like TailwindCSS.",
        keySkills: [
          "React & JSX",
          "TypeScript",
          "Responsive Design (Flexbox & Grid)",
          "State Management",
        ],
      },
      {
        id: 3,
        period: "2025 - Present",
        title: "Women Mentorship in Tech",
        source: "Business and Technology University",
        description:
          "Developing collaborative projects with Angular & TypeScript, while practicing teamwork and agile methods.",
        keySkills: [
          "Agile Methodologies",
          "Team Collaboration (Git)",
          "Angular Basics",
          "Code Review",
        ],
      },
      {
        id: 4,
        period: "2024 - 2025",
        title: "Front-End with React",
        source: "Tbilisi School of Communication",
        description:
          "Completed an intensive course focused on practical React development skills and modern workflows.",
        keySkills: [
          "Component Architecture",
          "React Hooks",
          "API Integration (Fetch)",
          "Vite",
        ],
      },
      {
        id: 5,
        period: "2025",
        title: "Front-End Programming with React",
        source: "New Horizons",
        description:
          "Further specialized skills in React, focusing on advanced state management and performance optimization.",
        keySkills: [
          "Advanced State Management",
          "Performance Optimization",
          "Testing (Jest/RTL)",
        ],
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
