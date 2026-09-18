import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import SportsManagement from "./assets/sports-management.svg";
import EcommerceStore from "./assets/ecommerce-store.svg";
import PortfolioApp from "./assets/portfolio-app.svg";
import DjangoCrud from "./assets/django-crud.svg";
import EmotionHci from "./assets/emotion-hci.svg";
import LearningTracking from "./assets/learning-tracking.svg";
import SmartMoney from "./assets/smart-money.svg";
import Work7 from "./assets/ML1.png";
import Work8 from "./assets/DL1.png";
import Work9 from "./assets/DL2.png";
import Work10 from "./assets/AW1.png";
import Work11 from "./assets/AZ1.png";
import Work12 from "./assets/huawei.jpeg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Mohamed",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Aafrith",
  },

  {
    id: 3,
    title: "Age : ",
    description: "27 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Sri Lankan",
  },

  {
    id: 5,
    title: "Current Position : ",
    description: "AI Engineer / Software Engineer",
  },

  {
    id: 6,
    title: "Address : ",
    description: "169/B, Osman Road, Sainthamaruthu-05",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+94773054223",
  },

  {
    id: 8,
    title: "Email : ",
    description: "maafrith15919@gmail.com",
  },

  {
    id: 9,
    title: "Languages : ",
    description: "English, Tamil and Sinhala",
  },

  {
    id: 10,
    title: "Education : ",
    description: "BSc in Computer Engineering, University of Ruhuna",
  },
];

export const stats = [
  {
    id: 1,
    no: "AI Engineer",
    title: "Developer",
  },

  {
    id: 2,
    no: "50+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "Continuos",
    title: "Learning & <br /> Development",
  },

  {
    id: 4,
    no: "3+",
    title: "Coding <br /> Competitions",
  },
];

export const resume = [
  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "JULY 2026 - PRESENT",
    title: "Temporary Academic Instructor <span> University of Sri Jayewardenepura </span>",
    desc: "Delivering lectures, lab sessions, tutorials, assessments, and project supervision in programming, software engineering, and applied computing.",
  },

  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "JANUARY 2025 - FEBRUARY 2026",
    title: "AI Full Stack Developer / Software Engineer <span> SCOPULE FZC </span>",
    desc: "Designing and deploying full-stack applications and AI-powered automation using React, Python, FastAPI, Flask, REST APIs, SQL/NoSQL databases, LLM workflows, computer vision, and cloud-native technologies.",
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "AUGUST 2024 - FEBRUARY 2025",
    title: "Software Engineer (Internship) <span> SLT Mobitel Pvt Ltd </span>",
    desc: "Developed and deployed Flask and PostgreSQL applications, REST API integrations, Docker and Google Cloud Run deployments, CI/CD pipelines, and Bitbucket analytics automation.",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2021 - 2025",
    title:
      "BSc (Hons) in Engineering - Computer Engineering <span> University of Ruhuna </span>",
    desc: "Graduated with a CGPA of 3.21/4.0 (Second Lower Division), with relevant coursework in machine learning, neural networks, data structures, software architecture, blockchain, and cybersecurity.",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "50",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "30",
  },

  {
    id: 3,
    title: "CSS",
    percentage: "35",
  },

  {
    id: 4,
    title: "Python",
    percentage: "66",
  },

  {
    id: 5,
    title: "Django",
    percentage: "68",
  },

  {
    id: 6,
    title: "Mysql",
    percentage: "50",
  },

  {
    id: 7,
    title: "Figma",
    percentage: "70",
  },

  {
    id: 8,
    title: "React",
    percentage: "45",
  },

  {
    id: 9,
    title: "ML",
    percentage: "50",
  },

  {
    id: 10,
    title: "AI",
    percentage: "40",
  },

  {
    id: 11,
    title: "NLP",
    percentage: "40",
  },

  {
    id: 12,
    title: "Git",
    percentage: "30",
  },

  {
    id: 13,
    title: "Git Hub",
    percentage: "50",
  },

  {
    id: 14,
    title: "Bit Bucket",
    percentage: "40",
  },

  {
    id: 14,
    title: "Tailwind CSS",
    percentage: "42",
  },
];

export const portfolio = [
  {
    id: 1,
    img: SportsManagement,
    title: "Sports Management System",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Sports Management System",
      },
      {
        icon: <FiUser />,
        title: "Entity : ",
        desc: "Group Project",
      },

      {
        icon: <FaCode />,
        title: " ",
        desc: "MERN, Agile, Jira, Scrum, microservices, CI/CD, Netlify and Tailwind CSS.",
      },

      {
        icon: <FiExternalLink />,
        title: "Link : ",
        desc: "https://eng-ruhuna-sports.netlify.app/",
      },
    ],
  },

  {
    id: 2,
    img: EmotionHci,
    title: "Emotion and Speech Aware HCI System",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Emotion and Speech Aware Human Computer Interaction System",
      },
      {
        icon: <FiUser />,
        title: "Entity : ",
        desc: "Group Project",
      },
      {
        icon: <FaCode />,
        title: " ",
        desc: "Python, OpenCV, MediaPipe, emotion recognition, hand gesture control, and voice commands.",
      },
      {
        icon: <FiExternalLink />,
        title: "Link : ",
        desc: "https://github.com/Aafrith/Realtime-Emotion-and-Speech-HCI",
      },
    ],
  },

  {
    id: 3,
    img: EcommerceStore,
    title: "Ecommerce Website",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Ecommerce Website",
      },
      {
        icon: <FiUser />,
        title: "Entity : ",
        desc: "Individual Project",
      },
      {
        icon: <FaCode />,
        title: " ",
        desc: "Python, Django, Html, Bootstrap, CSS, and Javascript",
      },
      {
        icon: <FiExternalLink />,
        title: "Link : ",
        desc: "https://github.com/Aafrith/Shopkart",
      },
    ],
  },

  {
    id: 4,
    img: PortfolioApp,
    title: "Portfolio Web Application",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Portfolio Web Application",
      },
      {
        icon: <FiUser />,
        title: "Entity ",
        desc: "Individual Project",
      },
      {
        icon: <FaCode />,
        title: " ",
        desc: "JavaScript, React, HTML, and CSS",
      },
      {
        icon: <FiExternalLink />,
        title: "Link : ",
        desc: "https://github.com/Aafrith/Aafrith-portfolio",
      },
    ],
  },

  {
    id: 5,
    img: LearningTracking,
    title: "Learning System with Eye and Emotion Tracking",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Learning System with Eye and Emotion Tracking",
      },
      {
        icon: <FiUser />,
        title: "Entity : ",
        desc: "Group Project",
      },
      {
        icon: <FaCode />,
        title: " ",
        desc: "React, FastAPI, MongoDB, Agora, WebSockets, eye tracking, and emotion inference.",
      },
      {
        icon: <FiExternalLink />,
        title: "Link : ",
        desc: "https://github.com/Aafrith/learning-system-with-eye-and-emotion-tracking",
      },
    ],
  },

  {
    id: 6,
    img: SmartMoney,
    title: "Smart Money Management System",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Smart Money Management System",
      },
      {
        icon: <FiUser />,
        title: "Entity : ",
        desc: "Group Project",
      },
      {
        icon: <FaCode />,
        title: " ",
        desc: "FastAPI, MongoDB Atlas, React, Vite, Tailwind CSS, JWT, YOLO OCR, LLaMA, and speech-to-text.",
      },
      {
        icon: <FiExternalLink />,
        title: "Link : ",
        desc: "https://github.com/Aafrith/Money-management-system",
      },
    ],
  },

  {
    id: 7,
    img: DjangoCrud,
    title: "Django CRUD Application",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Django CRUD Application",
      },
      {
        icon: <FiUser />,
        title: "Entity : ",
        desc: "Individual Project",
      },
      {
        icon: <FaCode />,
        title: " ",
        desc: "Python, Django, Html, CSS, Bootstrap, and Javascript",
      },
      {
        icon: <FiExternalLink />,
        title: "Link : ",
        desc: "https://github.com/Aafrith/Python-Crud-app",
      },
    ],
  },

  
];

export const certifications = [
  {
    id: 1,
    img: Work7, // Add your certification images
    title: "Machine learning specialization",
    link: "https://www.coursera.org/account/accomplishments/specialization/NLMJ7QRLT78H",
  },
  {
    id: 2,
    img: Work8,
    title: "Deep learning specialization",
    link: "https://www.coursera.org/account/accomplishments/specialization/DGEKC62VDWCT",
  },
  {
    id: 3,
    img: Work9,
    title: "IBM AI Engineering",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/S6UUD8LVSHMW",
  },
  {
    id: 4,
    img: Work10,
    title: "AWS Cloud Solutions Architect",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/DWCKCMHQTLB6",
  },
  {
    id: 5,
    img: Work11,
    title: "Microsoft Azure Data Scientist",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/RMR3EKCKFEEY",
  },
  {
    id: 6,
    img: Work12,
    title: "Huawei ICT Competition 2023-2024",
    link: "https://drive.google.com/file/d/1aMHnwbgghnhUmflCDLogV_KS23tk-9CZ/view",
  },
  
];


export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
