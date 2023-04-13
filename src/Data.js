import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaFigma,
  FaPhoneAlt,
  FaUser,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaLinkedin,
  FaVuejs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiRedux,
  SiChakraui,
  SiGithub,
  SiMaterialui,
  SiNextdotjs,
  SiWebflow,
  SiTailwindcss,
} from "react-icons/si";
import { wor, work, work1, work2, work3, work4, workk } from "./assets/index";
export const navLinks = ["home", "about", "skills", "portfolio", "contact"];

export const socialIcons = [
  {
    id: 1,
    icon: <FaGithub />,
    link: "https://github.com/Billioma",
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/bilal-omari-978911124/",
  },
];

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Bilal Omar",
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+2349097805302",
    link: "tel:+2349097805302",
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "ibeomari@gmail.com",
    link: "mailto:ibeomari@gmail.com",
  },
];

export const icons = [
  {
    id: 1,
    icon: <FaReact />,
    text: "React",
  },
  {
    id: 2,
    icon: <SiTypescript />,
    text: "TypeScript",
  },
  {
    id: 3,
    icon: <SiNextdotjs />,
    text: "Next.js",
  },
  {
    id: 4,
    icon: <FaVuejs />,
    text: "Vue.js",
  },
  {
    id: 5,
    icon: <FaHtml5 />,
    text: "HTML",
  },
  {
    id: 6,
    icon: <FaCss3 />,
    text: "CSS",
  },
  {
    id: 7,
    icon: <SiChakraui />,
    text: "Chakra UI",
  },
  {
    id: 8,
    icon: <SiMaterialui />,
    text: "MUI",
  },
  {
    id: 9,
    icon: <SiRedux />,
    text: "Redux",
  },
  {
    id: 10,
    icon: <FaSass />,
    text: "SASS",
  },
  {
    id: 11,
    icon: <FaFigma />,
    text: "FIGMA",
  },
  {
    id: 12,
    icon: <SiGithub />,
    text: "GitHub",
  },
  {
    id: 13,
    icon: <SiWebflow />,
    text: "Webflow",
  },
  {
    id: 14,
    icon: <SiTailwindcss />,
    text: "Tailwind CSS",
  },
];

export const experiences = [
  {
    id: 1,
    year: "Mar'23 - Present",
    position: "Software Engineer",
    company: "Travelbay",
  },
  {
    id: 2,
    year: "Dec'22 - Present",
    position: "Front-End Developer",
    company: "Fastamoni",
  },
  {
    id: 3,
    year: "Jul'22 - Feb'23",
    position: "Front-End Team Lead",
    company: "cyberme studios",
  },
  {
    id: 4,
    year: "May'22 - Jul'22",
    position: "Front-End Developer",
    company: "cyberme studios",
  },
  {
    id: 5,
    year: "Jan'22 - Jul'22",
    position: "Front-End Developer",
    company: "3REEN",
  },
  {
    id: 6,
    year: "Apr'20 - Aug'22",
    position: "Front-End Developer",
    company: "Freelance",
  },
];
export const finishes = [
  {
    id: 1,
    number: "5",
    itemName: "Years Of Experience",
  },
  {
    id: 2,
    number: "499+",
    itemName: "Designed Items",
  },
  {
    id: 3,
    number: "37+",
    itemName: "Clients Served",
  },
];

export const workImages = [
  {
    id: 1,
    img: work,
    category: "react",
    git: "private",
    view: "https://fastamoni.com/",
  },
  {
    id: 2,
    img: work4,
    category: "react",
    git: "private",
    view: "https://www.edupali.com/",
  },
  {
    id: 3,
    img: workk,
    category: "react",
    git: "private",
    view: "https://www.app.fastamoni.com/",
  },
  {
    id: 4,
    img: wor,
    category: "typescript",
    git: "https://github.com/Billioma/risefinance",
    view: "https://rise-finance.netlify.app/",
  },
  {
    id: 5,
    img: work1,
    category: "next.js",
    git: "https://github.com/Billioma/oma_realestate",
    view: "https://oma-realestate.vercel.app/",
  },
  {
    id: 6,
    img: work3,
    category: "react",
    git: "https://github.com/Billioma/restaurant-UI",
    view: "https://restaurant-page-ui.vercel.app/",
  },
  {
    id: 7,
    img: work2,
    category: "typescript",
    git: "https://github.com/Billioma/task-tracker",
    view: "https://task-tracker-indol.vercel.app/",
  },
];

export const workNavs = ["All", "Next.JS", "React", "Typescript"];

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Nigeria",
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "ibeomari@gmail.com",
    link: "mailto:ibeomari@gmail.com",
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+234 909 780 5302",
    link: "tel:+2349097805302",
  },
];
