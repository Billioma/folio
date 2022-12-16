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
} from "react-icons/si";
import {
  work1,
  work2,
  work3,
  work4,
  work5,
  work6,
  work7,
  work8,
} from "./assets/index";
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
  <FaReact />,
  <SiTypescript />,
  <SiNextdotjs />,
  <FaVuejs />,
  <FaHtml5 />,
  <FaCss3 />,
  <SiChakraui />,
  <SiMaterialui />,
  <SiRedux />,
  <FaSass />,
  <FaFigma />,
  <SiGithub />,
];

export const experiences = [
  {
    id: 1,
    year: "2022 - Present",
    position: "Front-End Team Lead",
    company: "cyberme studios",
  },
  {
    di: 2,
    year: "2022",
    position: "Front-End Developer",
    company: "cyberme studios",
  },
  {
    id: 3,
    year: "2021 - 2022",
    position: "Front-End Developer",
    company: "3REEN",
  },
  {
    id: 4,
    year: "2020 - 2022",
    position: "Front-End Developer",
    company: "Freelance",
  },
];
export const finishes = [
  {
    id: 1,
    number: "5+",
    itemName: "Years Of Experience",
  },
  {
    id: 2,
    number: "699+",
    itemName: "Designed Items",
  },
  {
    id: 3,
    number: "117+",
    itemName: "Clients Served",
  },
];

export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "next.js",
    git: "https://github.com/Billioma/oma_realestate",
    view: "https://oma-realestate.vercel.app/",
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "typescript",
    git: "https://github.com/Billioma/task-tracker",
    view: "https://task-tracker-indol.vercel.app/",
  },
  {
    id: 3,
    img: work5,
    name: "project 5",
    category: "typescript",
    git: "https://github.com/Billioma/videochat",
    view: "https://courtroom.netlify.app/create",
  },
  {
    id: 4,
    img: work3,
    name: "project 3",
    category: "react",
    git: "https://github.com/Billioma/restaurant-UI",
    view: "https://restaurant-page-ui.vercel.app/",
  },
  {
    id: 5,
    img: work4,
    name: "project 4",
    category: "design",
    git: "https://github.com/Billioma/hospital",
    view: "https://ancilla-hospital.netlify.app/",
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "react",
    git: "https://github.com/Billioma/gpt3",
    view: "https://gpt3-js.netlify.app/",
  },
  {
    id: 7,
    img: work7,
    name: "project 7",
    category: "design",
    git: "https://github.com/Billioma/theShu",
    view: "https://theshuu.netlify.app/",
  },
  {
    id: 8,
    img: work8,
    name: "project 8",
    category: "design",
    git: "https://github.com/Billioma/restaurant__website",
    view: "https://chop-restaurant.netlify.app/",
  },
];

export const workNavs = ["All", "Next.JS", "React", "Typescript", "Design"];

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
