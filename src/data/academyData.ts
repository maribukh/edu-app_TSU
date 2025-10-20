import Photo from "../assets/profilephoto.jpg";

export interface Course {
  id: number;
  title: string;
  level: "Beginner" | "Advanced" | "Workshop";
  description: string;
  duration: string;
  technologies: string[];
  price: number;
}

export interface EducationHistory {
  id: number;
  title: string;
  source: string;
  period: string;
  description: string;
}

export interface Instructor {
  name: string;
  title: string;
  bio: string;
  imageUrl?: string;
  contact: {
    email: string;
    github: string;
  };
  educationHistory: EducationHistory[];
}

export const academyData: {
  instructor: Instructor;
  courses: Course[];
} = {
  instructor: {
    name: "Mariam Bukhaidze",
    imageUrl: Photo,
    title: "Software Engineer & Front-End Instructor",
    bio: "Passionate Front-End Developer with a love for building responsive, user-friendly applications and continuously learning new technologies. Motivated to share real-world knowledge and help you grow as a professional in software development.",
    contact: {
      email: "mariebukh@gmail.com",
      github: "https://github.com/maribukh",
    },
    educationHistory: [
      {
        id: 1,
        title: "Front-End with React",
        source: "Tbilisi School of Communication",
        period: "2024",
        description:
          "Gained hands-on experience building responsive web applications with a focus on state management, form validation, and local storage persistence using React and TypeScript.",
      },
      {
        id: 2,
        title: "Women Mentorship in Tech: Front-End Development",
        source: "Business and Technology University",
        period: "2025 - Present",
        description:
          "Participating in a mentorship program focused on career development, collaborative projects using Angular, and practicing teamwork with agile methods.",
      },
      {
        id: 3,
        title: "Front-End Programming with React",
        source: "New Horizons",
        period: "2025",
        description:
          "Mastered the fundamentals and advanced concepts of React development, including state management, form validation, and API integration.",
      },
    ],
  },
  courses: [
    {
      id: 1,
      title: "React: The Complete Guide",
      level: "Beginner",
      description:
        "Your all-in-one ticket to the world of front-end development. We'll start with the basics of HTML, CSS, and JavaScript, then dive deep into building modern, fast, and interactive web applications with React. You'll finish with a portfolio-ready project.",
      duration: "12 Weeks",
      technologies: [
        "React",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "TailwindCSS",
        "Vite",
      ],
      price: 1800,
    },
    {
      id: 2,
      title: "UI Architect: Modern Styling Mastery",
      level: "Advanced",
      description:
        "For those who already know JavaScript and React but want to create truly beautiful and professional interfaces. We'll explore advanced styling techniques, build a component library, and learn to work with design systems.",
      duration: "6 Weeks",
      technologies: [
        "TailwindCSS",
        "SCSS",
        "CSS Grid & Flexbox",
        "Animations",
        "UI/UX Fundamentals",
      ],
      price: 950,
    },
    {
      id: 3,
      title: "Workshop: Build a Real-Time Chat with React",
      level: "Workshop",
      description:
        "Maximum practice, minimum theory. In 4 weeks, we will build a fully functional real-time chat application from scratch. You will learn to work with APIs, manage state in complex applications, and solve real-world challenges.",
      duration: "4 Weeks",
      technologies: [
        "React",
        "TypeScript",
        "Fetch API",
        "WebSockets (Basics)",
        "State Management",
      ],
      price: 800,
    },
  ],
};
