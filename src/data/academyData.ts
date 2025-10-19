// /src/data/academyData.ts

export interface Course {
  id: number;
  title: string;
  source: string; // Например, "Tbilisi School of Communication"
  duration: string;
  description: string;
  technologies: string[];
}

export interface Instructor {
  name: string;
  title: string;
  bio: string;
  imageUrl?: string; // Опционально, для фото
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
    title: "Founder & Lead Front-End Instructor",
    bio:
      "Passionate Front-End Developer with hands-on experience... Motivated to contribute to real-world projects and grow as a professional in software development.",
    contact: {
      email: "mariebukh@gmail.com",
      github: "https://github.com/maribukh",
    },
  },
  courses: [
    {
      id: 1,
      title: "Front-End with React",
      source: "Tbilisi School of Communication",
      duration: "3 Months",
      description:
        "A comprehensive course covering React, TypeScript, and modern web development practices. Build responsive, high-performance web applications from scratch.",
      technologies: ["React", "TypeScript", "HTML5", "CSS3", "SCSS", "Vite"],
    },
    {
      id: 2,
      title: "Mentorship in Tech: Angular Basics",
      source: "Business and Technology University Program",
      duration: "Ongoing Program",
      description:
        "A mentorship program focused on career development and collaborative projects using Angular, agile methods, and code reviews.",
      technologies: ["Angular", "TypeScript", "Teamwork", "Agile"],
    },
    {
      id: 3,
      title: "Front-End Programming with React",
      source: "New Horizons",
      duration: "4 Months",
      description:
        "Master the fundamentals and advanced concepts of React development, including state management, form validation, and API integration.",
      technologies: [
        "React",
        "JavaScript (ES6+)",
        "Fetch API",
        "Form Validation",
      ],
    },
  ],
};
