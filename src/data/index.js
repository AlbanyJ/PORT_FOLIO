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
    title: "SusuPro",
    description:
      "A mobile app for managing susu (rotating savings) groups. Built with React Native and Expo, using Firebase for cloud sync and SQLite plus async storage for offline-first use.",
    tech: ["React Native", "Expo", "Firebase", "SQLite"],
    github: "https://github.com/AlbanyJ/SusuPro",
    live: null,
    featured: true,
  },
  {
    title: "AI Meetup Playground",
    description:
      "A multi-modal AI project combining a chat app, speech-to-text, text-to-speech, and a vision module — built to explore different AI capabilities side by side.",
    tech: ["Python", "Speech-to-Text", "Text-to-Speech", "Computer Vision"],
    github: "https://github.com/AlbanyJ/ai-meetup",
    live: null,
    featured: true,
  },
  {
    title: "Personal Portfolio",
    description:
      "This portfolio website — built with React, Vite, and Tailwind CSS. Features smooth animations with Framer Motion and a clean dark design.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/AlbanyJ/PORT_FOLIO",
    live: "https://port-folio-six-alpha-47.vercel.app/",
    featured: false,
  },
  {
    title: "React Fundamentals",
    description:
      "A hands-on collection of exercises covering core React concepts — components, props, conditional rendering, list rendering, and state management with useState.",
    tech: ["React", "JavaScript"],
    github: "https://github.com/AlbanyJ/REACT",
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
