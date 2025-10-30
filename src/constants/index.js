import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

import project1 from '@/assets/projects/project1.webp';
import project2 from '@/assets/projects/project2.webp';
import project3 from '@/assets/projects/project3.webp';
import project4 from '@/assets/projects/project4.webp';
import project5 from '@/assets/projects/project5.webp';
import project6 from '@/assets/projects/project6.webp';

export const HERO_CONTENT = `I am a curious and passionate aspiring full stack developer, currently diving deep into front-end development. Although I studied microelectronics back in 1999, it wasn't until 2024 that I realized software development is truly my calling. I'm all in now — and loving the journey.`;

export const ABOUT_TEXT = `I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const SOCIAL_LINK = [
  {
    icon: FaLinkedin,
    color: 'from-blue-800 to-blue-900',
    href: 'https://www.linkedin.com/in/vitalie-lozan-122745350',
    title: 'LinkedIn',
  },
  {
    icon: FaGithub,
    color: 'from-gray-800 to-gray-900',
    href: 'https://github.com/vitalielozan',
    title: 'Github',
  },
];

export const EXPERIENCES = [
  {
    year: '2024 - Present',
    role: 'Aspiring Frontend Web Developer',
    company: 'TeachBit.ro',
    description: `Student in web development, focusing on building scalable and modern applications using Tailwind CSS and Bootstrap. Skilled in front-end technologies (HTML, CSS, JavaScript, React) and familiar with version control tools (Git, GitHub) and full-stack development practices using Node.js and MongoDB.`,
    technologies: ['HTML', 'CSS', 'Javascript', 'React.js'],
  },
  {
    year: '2025 - Present',
    role: 'Aspiring Network Engineering & Cybersecurity',
    company: 'Cisco Networking Academy',
    description:
      'Currently enrolled in the Cisco Networking Academy, where I am learning a strong foundation in network engineering and cybersecurity. I am gaining hands-on experience with network configuration using CLI, simulating network topologies in Cisco Packet Tracer, and learning core concepts in routing, switching, and network security. I also work with Linux systems and explore network automation using Python. This program is preparing me for the CCNA certification and a future career in IT infrastructure and security.',
    technologies: ['CCNA', 'LINUX', 'CLI', 'Cisco Packet Tracer', 'PYTHON'],
  },
  {
    year: '2017 - 2024',
    role: 'Truck Driver and Dispacher',
    company: 'Spedition Prottengeier GmbH',
    description: `Experienced in both driving and dispatch coordination, ensuring efficient and safe transportation of goods across regional and international routes. Skilled in route planning, vehicle maintenance, and real-time communication with drivers and clients. Proven ability to manage logistics operations from behind the wheel and from the dispatch desk.Key Responsibilitie`,
    technologies: ['Truck', 'Dispaching'],
  },
  {
    year: '2002 - 2005',
    role: 'System Administrator',
    company: 'Medical University',
    description: `IT system developers maintain, test, and improve systems that support the company. They use existing or new technologies to meet specific requirements. They test hardware and software components, diagnose the causes of errors, and fix system issues.`,
    technologies: ['Windows', 'Network', 'Security'],
  },
  {
    year: '1993 - 1999',
    role: 'Student',
    company: 'CRMTC',
    description: `During this period, I studied the foundational principles of Information Technology and computer science during a pivotal time in the evolution of digital technologies. My learning focused on understanding computer architecture, operating systems, basic programming logic, and the use of early software applications. This period marked my initial exposure to digital literacy, data processing, and the emerging role of computers in business and communication, laying the groundwork for my future development in the tech field.`,
    technologies: ['C', 'Assambler', 'Bit', 'Byte'],
  },
];

export const PROJECTS = [
  {
    title: 'Quiz App',
    image: project4,
    description:
      'Built a fun and interactive quiz app with React! Users can answer multiple-choice questions, and track their score — all in a smooth, responsive UI. Great way to practice React state and component logic! As part of my TeachBit.ro learning journey, I created a dynamic quiz app with React — fast, fun, and fully functional!',
    technologies: ['HTML', 'CSS', 'Javascript', 'React', 'Bootstrap'],
    demoUrl: 'https://quiz-app-react-js-beta.vercel.app/',
    githubUrl: 'https://github.com/vitalielozan/Quiz-App-ReactJS',
  },
  {
    title: 'Movie App',
    image: project3,
    description:
      'A Movie App is a lightweight React project that lets users search for movies via a public API and save favorites locally using localStorage. Built with Vite, deployed on Render, and no backend needed.',
    technologies: ['HTML', 'CSS', 'Javascript', 'React', 'Tailwind'],
    demoUrl: 'https://movie-app-mocha-xi.vercel.app/',
    githubUrl: 'https://github.com/vitalielozan/Movie-App',
  },
  {
    title: 'E-Commerce Website',
    image: project1,
    description:
      'A modern full-stack learn project  e-Commerce MERN App Tthis E-Shop web app delivers a smooth shopping experience and a robust admin interface. From secure authentication to imitation payments.Built with the powerful MERN stack, Hosted on Render for fast and reliable performance.',
    technologies: [
      'HTML',
      'CSS',
      'Javascript',
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
      'Developed as a student project to explore full-stack development and web technologies. A modern task management web application built to streamline daily productivity, hosted on Render for fast and reliable performance.',
    technologies: [
      'HTML',
      'CSS',
      'React',
      'Javascript',
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
      'Frizeria Xely is a modern and responsive web application designed for a local barbershop, built using React, JavaScript, HTML, CSS, and Tailwind CSS. The platform showcases the barbershops services, team, pricing, and contact information in a clean and user-friendly interface. Tailwind CSS was used to ensure a sleek, mobile-first design with fast styling capabilities, while React provides dynamic rendering and smooth navigation across the site.',
    technologies: ['HTML', 'CSS', 'Javascript', 'React', 'Tailwind'],
    demoUrl: 'https://frizeria-xely.vercel.app/',
    githubUrl: 'https://github.com/vitalielozan/Xely-ReactJS-App',
  },
  {
    title: 'Spedition Prottengeier',
    image: project6,
    description:
      'Spedition Protengeier is a sleek and responsive web application developed for a logistics and transportation company, built using React, JavaScript, HTML, CSS, and Tailwind CSS. The platform serves as a digital front for showcasing the companyes services, fleet, contact details, and operational values, with a focus on clarity, speed, and modern design.',
    technologies: ['HTML', 'CSS', 'Javascript', 'React', 'Tailwind'],
    demoUrl: 'https://spedition-prottengeier.onrender.com',
    githubUrl: 'https://github.com/vitalielozan/Spedition-Prottengeier',
  },
];

export const CONTACT = {
  address: 'Address str.11, 01234 Stadt, DE ',
  phoneNo: '+49 176 12 34 56 78',
  email: 'vitalielozan@example.com',
};

export const navItems = [
  { name: 'Home', href: '#hero', ariaLabel: 'Home' },
  { name: 'Technologies', href: '#technologies', ariaLabel: 'Technologies' },
  { name: 'Projects', href: '#projects', ariaLabel: 'Projects' },
  { name: 'Experience', href: '#experience', ariaLabel: 'Experience' },
  { name: 'Contact', href: '#contact', ariaLabel: 'Contact' },
];
