import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

import project1 from '@/assets/projects/project1.webp';
import project2 from '@/assets/projects/project2.webp';
import project3 from '@/assets/projects/project3.webp';
import project4 from '@/assets/projects/project4.webp';
import project5 from '@/assets/projects/project5.webp';
import project6 from '@/assets/projects/project6.webp';
import project7 from '@/assets/projects/project7.webp';

export const PROFILE = {
  name: 'Vitalie Lozan',
  role: 'Frontend Developer in Transition',
  availability: 'Open to Junior Frontend Roles',
  location: 'Germany | Remote-friendly',
};

export const HERO_CONTENT =
  'I build practical, responsive interfaces with React and modern CSS, focused on clean user flows and clear visual hierarchy. My background in logistics and operations helps me design software that is reliable, detail-oriented, and built for real users.';

export const HERO_PITCH =
  'From career transition to consistent product building: I am shaping a frontend profile grounded in execution, curiosity, and continuous improvement.';

export const KEY_METRICS = [
  {
    value: '6+',
    label: 'Deployed web projects',
  },
  {
    value: '2',
    label: 'Active learning tracks',
  },
  {
    value: '24/7',
    label: 'Problem-solving mindset',
  },
];

export const LEARNING_FOCUS = [
  'React Architecture',
  'TypeScript Foundations',
  'UI Animation with Framer Motion',
  'Networking & Cybersecurity Basics',
];

export const TECHNOLOGY_GROUPS = [
  {
    title: 'Frontend Core',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React'],
  },
  {
    title: 'Styling Systems',
    items: ['Tailwind CSS', 'Bootstrap', 'Responsive Design', 'Accessibility'],
  },
  {
    title: 'Backend & Data',
    items: ['Node.js', 'Python', 'Express.js', 'MongoDB', 'REST APIs'],
  },
  {
    title: 'Infrastructure',
    items: ['Git/GitHub', 'Render', 'Vercel', 'Linux CLI'],
  },
];

export const SOCIAL_LINK = [
  {
    icon: FaLinkedin,
    color: 'from-sky-600 to-blue-700',
    href: 'https://www.linkedin.com/in/vitalie-lozan-122745350',
    title: 'LinkedIn',
  },
  {
    icon: FaGithub,
    color: 'from-slate-700 to-slate-900',
    href: 'https://github.com/vitalielozan',
    title: 'Github',
  },
  {
    icon: FaEnvelope,
    color: 'from-orange-500 to-rose-600',
    href: 'mailto:vitalielozan17@outlook.com',
    title: 'Email',
  },
];

export const EXPERIENCES = [
  {
    year: '2024 - Present',
    role: 'Frontend Development Student',
    company: 'TeachBit.ro',
    description:
      'Building production-style projects with React, Tailwind CSS, and modern JavaScript. Focused on reusable components, responsive layouts, and cleaner architecture for maintainable UI code.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React.js'],
  },
  {
    year: '2025 - Present',
    role: 'Network Engineering & Cybersecurity Student',
    company: 'Cisco Networking Academy',
    description:
      'Developing practical networking knowledge through CLI configuration, packet analysis, and simulated infrastructures. Expanding into Linux workflows and Python-based automation for future infrastructure roles.',
    technologies: ['CCNA', 'Linux', 'CLI', 'Cisco Packet Tracer', 'Python'],
  },
  {
    year: '2017 - 2024',
    role: 'Truck Driver & Dispatcher',
    company: 'Spedition Prottengeier GmbH',
    description:
      'Coordinated transport operations and route planning under strict delivery constraints. This experience sharpened execution discipline, communication clarity, and fast decision-making under pressure.',
    technologies: ['Operations', 'Planning', 'Dispatching'],
  },
  {
    year: '2002 - 2005',
    role: 'System Administrator',
    company: 'Medical University',
    description:
      'Maintained and improved institutional IT systems, troubleshooting hardware/software issues and supporting daily technical operations across multiple users and environments.',
    technologies: ['Windows', 'Network', 'Security'],
  },
  {
    year: '1993 - 1999',
    role: 'Student',
    company: 'CRMTC',
    description:
      'Studied core principles of computer science, including architecture, operating systems, and early programming logic. This technical foundation later supported my return to software development.',
    technologies: ['C', 'Assembler', 'Foundational CS'],
  },
];

export const PROJECTS = [
  {
    title: 'Quiz App',
    image: project4,
    description:
      'Interactive quiz experience built with React. Features smooth progression, instant scoring, and responsive layouts while exercising clean component-driven state management.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'],
    demoUrl: 'https://quiz-app-react-js-beta.vercel.app/',
    githubUrl: 'https://github.com/vitalielozan/Quiz-App-ReactJS',
  },
  {
    title: 'Movie App',
    image: project3,
    description:
      'Movie discovery app using a public API with local favorite persistence via localStorage. Built for fast browsing, practical state handling, and clean responsive behavior.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind'],
    demoUrl: 'https://movie-app-mocha-xi.vercel.app/',
    githubUrl: 'https://github.com/vitalielozan/Movie-App',
  },
  {
    title: 'E-Commerce Website',
    image: project1,
    description:
      'MERN learning project featuring product browsing, cart flow, and admin-oriented capabilities. Focused on end-to-end architecture, secure authentication patterns, and deployment.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
    demoUrl: 'https://e-commerce-mern-app-jes3.onrender.com/',
    githubUrl: 'https://github.com/vitalielozan/E-Commerce-MERN-App',
  },
  {
    title: 'Task Management App',
    image: project2,
    description:
      'Task manager designed to improve daily planning with CRUD flows and intuitive UI states. Built as a full-stack training project with practical deployment workflows.',
    technologies: [
      'HTML',
      'CSS',
      'React',
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
    demoUrl: 'https://todolist-app-react-js.onrender.com/',
    githubUrl: 'https://github.com/vitalielozan/ToDoList-APP-React-JS',
  },
  {
    title: 'Frizeria Xely',
    image: project5,
    description:
      'Brand-focused website for a local barbershop, designed with a mobile-first approach. Showcases services, pricing, and team presentation with polished transitions and clear navigation.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind'],
    demoUrl: 'https://frizeria-xely.vercel.app/',
    githubUrl: 'https://github.com/vitalielozan/Xely-ReactJS-App',
  },
  {
    title: 'Spedition Prottengeier',
    image: project6,
    description:
      'Corporate presentation website for a transportation company. Built to communicate services and trust signals through structured content and responsive, performance-oriented UI.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind'],
    demoUrl: 'https://spedition-prottengeier.onrender.com',
    githubUrl: 'https://github.com/vitalielozan/Spedition-Prottengeier',
  },
  {
    title: 'Dental Practice Information',
    image: project7,
    description:
      'A fullstack web application for browsing dental clinics, viewing details, and adding ratings and comments. The project is split into two main parts: a Node.js/Express backend and a React frontend.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Tailwind',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
    demoUrl: 'https://dental-practices-information-app.onrender.com',
    githubUrl:
      'https://github.com/vitalielozan/Dental-Practices-Information-App',
  },
];

export const CONTACT = {
  address: 'Germany',
  phoneNo: '+49 176 12 34 56 78',
  email: 'vitalielozan17@outlook.com',
  preferredChannel: 'Email or LinkedIn',
};

export const navItems = [
  { name: 'Start', href: '#hero', ariaLabel: 'Home' },
  { name: 'Stack', href: '#technologies', ariaLabel: 'Technologies' },
  { name: 'Work', href: '#projects', ariaLabel: 'Projects' },
  { name: 'Journey', href: '#experience', ariaLabel: 'Experience' },
  { name: 'Contact', href: '#contact', ariaLabel: 'Contact' },
];
