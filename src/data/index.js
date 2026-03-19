// ─────────────────────────────────────────────────────────
// data/index.js  — Edit this file to update your portfolio
// ─────────────────────────────────────────────────────────

export const personal = {
  name: "Sufyan Alban",
  role: "Software Developer & AI Enthusiast",
  tagline: "Building intelligent software from Kumasi, Ghana 🇬🇭",
  bio: `I'm a Computer Engineering student at KNUST with a passion for AI and software development.
I love turning ideas into real products — from crafting clean web interfaces to exploring
machine learning models. Currently building projects, learning every day, and looking to
collaborate with teams that care about great software.`,
  university: "Kwame Nkrumah University of Science & Technology",
  location: "Kumasi, Ghana",
  email: "albanysufyan@gmail.com",
  cvUrl: "/cv.pdf", // place your CV in the /public folder
  social: {
    github: "https://github.com/AlbanyJ",
    linkedin: "https://linkedin.com/in/alban-sufyan-580987280",
    twitter: "https://twitter.com/Alb4nyS_Xprt",
  },
};

export const skills = [
  {
    category: "Frontend",
    icon: "🎨",
    items: ["HTML5", "CSS3", "React", "Tailwind CSS", "JavaScript"],
  },
  {
    category: "Backend & Languages",
    icon: "⚙️",
    items: ["Python", "C++", "Node.js (learning)", "REST APIs"],
  },
  {
    category: "AI & Data",
    icon: "🤖",
    items: ["Machine Learning basics", "NumPy", "Pandas", "Scikit-learn", "Prompt Engineering"],
  },
  {
    category: "Tools & Workflow",
    icon: "🛠️",
    items: ["Git & GitHub", "VS Code", "Linux/Terminal", "Figma (basics)", "Vercel"],
  },
];

export const projects = [
  {
    title: "AI Chat Interface",
    description:
      "A clean chat UI that connects to an LLM API. Built to practice React state management and async API calls. Supports streaming responses.",
    tech: ["React", "Tailwind CSS", "OpenAI API"],
    github: "https://github.com/yourusername/ai-chat",
    live: "https://your-project.vercel.app",
    featured: true,
  },
  {
    title: "Student Grade Predictor",
    description:
      "A machine learning model that predicts student grades based on study habits and attendance. Trained with scikit-learn, deployed with a Flask API.",
    tech: ["Python", "Scikit-learn", "Flask", "Pandas"],
    github: "https://github.com/yourusername/grade-predictor",
    live: null,
    featured: true,
  },
  {
    title: "Personal Portfolio",
    description:
      "This portfolio website — built with React, Vite, and Tailwind CSS. Features smooth animations with Framer Motion and a clean dark design.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://your-portfolio.vercel.app",
    featured: false,
  },
  {
    title: "Todo CLI App",
    description:
      "A command-line task manager written in C++ with file persistence. Supports add, complete, delete, and list operations.",
    tech: ["C++", "File I/O", "CLI"],
    github: "https://github.com/yourusername/todo-cli",
    live: null,
    featured: false,
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
