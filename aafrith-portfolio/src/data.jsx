import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Mohamed',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Aafrith',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '25 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Sri Lankan',
  },

  {
    id: 5,
    title: 'Current Position : ',
    description: 'Software Engineer Trainee at SLT Mobitel',
  },

  {
    id: 6,
    title: 'Address : ',
    description: '169/B, Osman Road, Sainthamaruthu-05',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+94773054223',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'maafrith15919@gmail.com',
  },

  {
    id: 9,
    title: 'Languages : ',
    description: 'English, Tamil and Sinhala',
  },

  {
    id: 10,
    title: 'Education : ',
    description: 'BSc in Computer Engineering, University of Ruhuna',
  },
];

export const stats = [
  {
    id: 1,
    no: 'Intern',
    title: 'Software Engineer <br /> at SLT',
  },

  {
    id: 2,
    no: '10+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: 'Continuos',
    title: 'Learning & <br /> Development',
  },

  {
    id: 4,
    no: '3+',
    title: 'Coding <br /> Competitions',
  },
];


export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2024 - PRESENT',
    title: 'Software Engineer Trainee <span> SLT Mobitel </span>',
    desc: 'Working as a Software Engineering trainee focusing on Python development and gaining hands-on experience in various projects related to software development, testing, and deployment.',
  },

  {
    id: 2,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2021 - 2025 - Present',
    title: 'BSc(Hons) in Computer Engineering <span> University of Ruhuna </span>',
    desc: 'Pursuing a degree in Computer Engineering with a focus on software development, algorithms, AI, and machine learning techniques.',
  },

  {
    id: 3,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019',
    title: 'Advanced Level <span> Zahira College Kalmunai </span>',
    desc: 'Completed A/Ls with a focus on Mathematics, gaining a strong foundation in analytical thinking and problem-solving.',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '50',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '30',
  },

  {
    id: 3,
    title: 'CSS',
    percentage: '35',
  },

  {
    id: 4,
    title: 'Python',
    percentage: '66',
  },

  {
    id: 5,
    title: 'Django',
    percentage: '68',
  },

  {
    id: 6,
    title: 'Mysql',
    percentage: '50',
  },

  {
    id: 7,
    title: 'Figma',
    percentage: '70',
  },

  {
    id: 8,
    title: 'React',
    percentage: '45',
  },

  {
    id: 9,
    title: 'ML',
    percentage: '50',
  },

  {
    id: 10,
    title: 'AI',
    percentage: '40',
  },

  {
    id: 11,
    title: 'NLP',
    percentage: '40',
  },

  {
    id: 12,
    title: 'Git',
    percentage: '30',
  },

  {
    id: 13,
    title: 'Git Hub',
    percentage: '50',
  },

  {
    id: 14,
    title: 'Bit Bucket',
    percentage: '40',
  },

  {
    id: 14,
    title: 'Tailwind CSS',
    percentage: '42',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Sports Management System',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Sports Management System',
      },
      {
        icon: <FiUser />,
        title: 'Entity : ',
        desc: 'Group Project',
      },
      
      {
        icon: <FaCode />,
        title: ' ',
        desc: 'MERN, Agile, Jira, Scrum, microservices, CI/CD, Netlify and Tailwind CSS.',
      },

      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://eng-ruhuna-sports.netlify.app/',
      },

      
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Age Prediction Project',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Age Prediction Project',
      },
      {
        icon: <FiUser />,
        title: 'Entity : ',
        desc: 'Individual Project',
      },
      {
        icon: <FaCode />,
        title: ' ',
        desc: 'ML, AI, CNN, Python, Streamlit',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/Aafrith/Age-prediction-CNN',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Ecommerce Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Ecommerce Website',
      },
      {
        icon: <FiUser />,
        title: 'Entity : ',
        desc: 'Individual Project',
      },
      {
        icon: <FaCode />,
        title: ' ',
        desc: 'Python, Django, Html, Bootstrap, CSS, and Javascript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/Aafrith/Shopkart',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Portfolio Web Application',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Portfolio Web Application',
      },
      {
        icon: <FiUser />,
        title: 'Entity ',
        desc: 'Individual Project',
      },
      {
        icon: <FaCode />,
        title: ' ',
        desc: 'JavaScript, React, HTML, and CSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/Aafrith/Aafrith-portfolio',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Hotel Management System',
    details: [
      {
        title: 'Project : ',
        desc: 'Hotel Management System',
      },
      {
        title: 'Entity : ',
        desc: 'Individual Project',
      },
      {
        title: ' ',
        desc: 'Python, Django, Html, CSS and JavaScript',
      },
      {
        title: 'Preview : ',
        desc: 'https://github.com/Aafrith/Hotel-Management-System',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Django CRUD Application',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Django CRUD Application',
      },
      {
        icon: <FiUser />,
        title: 'Entity : ',
        desc: 'Individual Project',
      },
      {
        icon: <FaCode />,
        title: ' ',
        desc: 'Python, Django, Html, CSS, Bootstrap, and Javascript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/Aafrith/Python-Crud-app',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
