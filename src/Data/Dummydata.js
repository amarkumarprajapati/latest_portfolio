import ecomm from "../assets/Screenshot 2025-02-25 115012.png";
import Music from "../assets/Screenshot 2025-02-25 115123.png";
import shirts from "../assets/shirts.png";
import chat from "../assets/Screenshot 2025-03-04 171819.png";

export let experience = [
  {
    company: "Codesis Technologies",
    position: "MERN Stack SDE-2 Developer",
    period: "April 2024 – Present",
    location: "Mumbai",
    achievements: [
      "Developed and deployed LilyPads AI, a property management platform leveraging OpenAI for intelligent insights and automation",
      "Tech Stack: React.js, Node.js, AWS, OpenAI API",
      "Project: LilyPads AI,Berrywise",
    ],
  },
  {
    company: "MERN Stack Developer",
    position: "Freelancer",
    period: "2023 - 2024",
    location: "Bangalore",
    achievements: [
      "Enhanced user experience through dynamic UI/UX designs, increasing app engagement by 15%.",
      "Tech Stack: Node.js, MongoDB, AWS",
      "Project: Gobooze,Prajapati Foundation",
    ],
  },
  {
    company: "DSG-US",
    position: "Junior - MERN Stack Developer",
    period: "2020 - 2023",
    location: "Bangalore",
    achievements: [
      "Ensured 100% cross-device compatibility for clinical trial software by resolving UI alignment issues",
      "Designed reusable React.js components, reducing development time by 20%",
    ],
  },
];

export let portfilio = [
  {
    title: "Chat-WebApp",
    description: "Chat Web App for Personal Messaging",
    image: chat,
    tags: ["Vite + React", "Tailwind CSS", "Antd", "node", "express"],
    link: "https://silver-mochi-69a5a4.netlify.app/",
    gitlink: "https://github.com/amarkumarprajapati/chatweb_webapp.git",
  },
  {
    title: "Ecomm-Website",
    description:
      "Developed an online grocery delivery platform for convenient shopping and delivery",
    image: ecomm,
    tags: ["Vite + React", "Antd", "Tailwind CSS"],
    link: "https://ecommak.netlify.app/",
    gitlink: "https://github.com/amarkumarprajapati/Ecomm.git",
  },
  {
    title: "Music Player",
    description: "rontend - react, tailwind css, html and express , mongodb",
    image: Music,
    tags: ["Vite + React", "Tailwind CSS", "AWS"],
    link: "https://musicwebappplay.netlify.app/",
    gitlink: "https://github.com/amarkumarprajapati/music_Frontend.git",
  },
  {
    title: "T-shirt",
    description:
      "Crafted an interactive platform for customizing and ordering personalized T-shirts.",
    image: shirts,
    tags: ["Vite + React", "Tailwind CSS", "Three.js"],
    link: "https://tshirts123.netlify.app/",
    gitlink: "https://github.com/amarkumarprajapati/T-shirts_frontend.git",
  },
];

export let SkillsExpertise = [
  {
    category: "Frontend",
    icon: "fa-laptop-code",
    skills: [
      { name: "React/Next.js", level: 80 },
      { name: "Vite + react", level: 80 },
      { name: "JavaScript", level: 88 },
      { name: "Tailwind CSS", level: 70 },
      { name: "WebGL/Three.js", level: 10 },
    ],
  },
  {
    category: "Backend",
    icon: "fa-server",
    skills: [
      { name: "Node.js/Express", level: 90 },
      { name: "Python/fastapi", level: 30 },
      { name: "JavaScript", level: 90 },
    ],
  },
  {
    category: "Database",
    icon: "fa-database",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 92 },
    ],
  },
  {
    category: "DevOps",
    icon: "fa-cloud",
    skills: [
      { name: "AWS/Azure", level: 90 },
      { name: "CI/CD", level: 92 },

      { name: "Linux/Shell", level: 89 },
    ],
  },
];
