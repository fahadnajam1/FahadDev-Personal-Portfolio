export const NAV_LINKS = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "experience", title: "Experience" },
  { id: "contact", title: "Contact" }
];

export const STATS = [
  { title: "Projects Completed", value: "10+" },
  { title: "International Clients", value: "3" },
  { title: "Year Freelance Experience", value: "1" },
  { title: "Graduation", value: "2026" }
];

export const SKILLS = [
  { name: "React.js", category: "Frontend", percent: 90 },
  { name: "JavaScript", category: "Frontend", percent: 85 },
  { name: "HTML5", category: "Frontend", percent: 95 },
  { name: "CSS3", category: "Frontend", percent: 90 },
  { name: "Tailwind CSS", category: "Frontend", percent: 90 },
  { name: "Three.js", category: "Frontend", percent: 70 },
  { name: "REST APIs", category: "APIs", percent: 80 },
  { name: "Node.js", category: "Backend", percent: 75 },
  { name: "MongoDB", category: "Backend", percent: 75 },
  { name: "Git", category: "Tools", percent: 85 }
];

export const PROJECTS = [
  {
    title: "Stock2Door",
    description: "Order Management System for Australian eBay clients. Features real-time tracking, inventory management, and automated shipping labels.",
    tags: ["React.js", "REST APIs", "Git"],
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c1590a?auto=format&fit=crop&q=80&w=800",
    liveUrl: "https://stock2door.netlify.app/",
    githubUrl: "#"
  },
  {
    title: "Sunrise Clinic",
    description: "Complete healthcare provider website showcasing clinics, services, and appointment booking functionality.",
    tags: ["React.js", "CSS3", "JavaScript", "Netlify"],
    category: "React.js",
    image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80&w=800",
    liveUrl: "https://sunriseclinix.netlify.app/",
    githubUrl: "#"
  },
  {
    title: "Crispy Bae",
    description: "Modern restaurant website with an interactive menu, online reservations, and a built-in location map.",
    tags: ["React.js", "CSS3", "JavaScript", "Google Maps API"],
    category: "React.js",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    liveUrl: "https://crispybae.netlify.app/",
    githubUrl: "#"
  },
  {
    title: "Flint",
    description: "Fast Food business website for a local brand in Multan. Interactive UI designed for high conversions.",
    tags: ["React.js", "CSS3", "JavaScript"],
    category: "React.js",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800",
    liveUrl: "https://fliint.netlify.app/",
    githubUrl: "#"
  }
];

export const EXPERIENCE = [
  {
    title: "Frontend Developer",
    company: "APIC",
    date: "2024 - Present",
    description: "Developing modern, responsive frontend applications using React.js and modern JavaScript. Collaborating with cross-functional teams to deliver accessible and high-performing web interfaces."
  },
  {
    title: "Freelance Frontend Dev",
    company: "Local Clients Multan",
    date: "2023 - Present",
    description: "Working directly with small businesses to establish their online presence. Designed and built custom websites prioritizing SEO and conversion optimization."
  }
];

import reactImg from '../react.png';

export const CERTIFICATIONS = [
  {
    title: "React JS Bootcamp 2025",
    issuer: "Udemy",
    date: "Aug 2025",
    credentialId: "UC-dd94db84-1c35-414c-add5-248080b27d52",
    verifyUrl: "https://www.udemy.com/certificate/UC-dd94db84-1c35-414c-add5-248080b27d52/",
    image: reactImg
  }
];
