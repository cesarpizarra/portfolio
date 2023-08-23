import { FaGithub, FaLinkedin, FaFacebook, FaTiktok } from "react-icons/fa";
import htmlLogo from "../assets/htmlicon.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/js.png";
import tailwindLogo from "../assets/tailwind.png";
import viteLogo from "../assets/vite.png";
import reactLogo from "../assets/react.png";
import nodejsLogo from "../assets/node js.png";
import mongoDbLogo from "../assets/mongo db.png";
import gitLogo from "../assets/git.png";
import vsCodeLogo from "../assets/vs code.png";
import figma from "../assets/figma.png";
import Portfolio from "../assets/projects/Portfolio.png";
import UrlMasterLink from "../assets/projects/url-master.png";
import GradeCalculator from "../assets/projects/GradeCalculator.png";
import IntroSection from "../assets/projects/IntroSection.png";
import LoginForm from "../assets/projects/LoginForm.png";
import TodoApp from "../assets/projects/TodoApp.png";
import MovieFlix from "../assets/projects/MovieFlix.png";
import NewsHomePage from "../assets/projects/NewsHomePage.png";
import WeatherApp from "../assets/projects/WeatherApp.png";

export const personalInfo = [
  {
    name: "Cesar G. Pizarra",
    career: "I'm a Web Developer",
    description:
      "I'm passionate about creating engaging and user-friendly web experiences.",
  },
];

export const navLinks = [
  {
    title: "About",
    url: "#about",
  },
  {
    title: "Skills",
    url: "#skills",
  },
  {
    title: "Projects",
    url: "#projects",
  },
  {
    title: "Contact",
    url: "#contact",
  },
];

export const socialIcons = [
  {
    icon: FaGithub,
    link: "https://github.com/cesarpizarra",
  },
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/cesar-pizarra-610336258/",
  },
  {
    icon: FaFacebook,
    link: "https://web.facebook.com/cesar.pizarra.1",
  },
  {
    icon: FaTiktok,
    link: "https://www.tiktok.com/@cesar_pizarra?is_from_webapp=1&sender_device=pc",
  },
];

export const about = {
  intro: [
    {
      title:
        "Hi there! I'm Cesar, and I'm on a journey to pursue a career in web development. I've always been fascinated by the power of websites and their ability to solve problems and automate processes.",
    },
    {
      subtitle1:
        "Since then, my passion for web development has only grown stronger. I began my dedicated journey in 2022, diving into the world of coding and web technologies. With each project, I aim to push boundaries, deliver exceptional user experiences, and make a positive impact through technology.",
    },
    {
      subtitle2:
        "As I embark on this exciting path, I'm driven by curiosity, a thirst for learning, and a willingness to embrace challenges. I believe that web development holds immense potential, and I'm committed to honing my skills to create innovative web solutions that leave a lasting impression.",
    },
  ],
  education: {
    title: "Bachelor of Science in Computer Science",
    school: "Don Mariano Marcos Memorial State University",
  },
};

export const skills = [
  {
    name: "HTML",
    logo: htmlLogo,
  },
  {
    name: "CSS",
    logo: cssLogo,
  },
  {
    name: "JavaScript",
    logo: jsLogo,
  },
  {
    name: "Tailwind",
    logo: tailwindLogo,
  },
  {
    name: "Vite",
    logo: viteLogo,
  },
  {
    name: "React JS",
    logo: reactLogo,
  },
  {
    name: "NodeJs",
    logo: nodejsLogo,
  },
  {
    name: "Mongo DB",
    logo: mongoDbLogo,
  },
  {
    name: "Git",
    logo: gitLogo,
  },
  {
    name: "VsCode",
    logo: vsCodeLogo,
  },
  {
    name: "Figma",
    logo: figma,
  },
];

export const projects = [
  {
    project_img: Portfolio,
    name: "My Personal Portfolio",
    description:
      "This is my personal portfolio, where I showcase a collection of my work to demonstrate my skills and expertise. ",
    githubLink: "https://github.com/cesarpizarra/portfolio",
    project_link: "https://cezaru.vercel.app/",
    tools: ["React", "Vite", "Tailwind"],
  },
  {
    project_img: UrlMasterLink,
    name: "Url Shortening Api",
    description:
      "A Url-Shortening-Api-Master challenge from the Frontend Mentor website.",
    githubLink: "https://github.com/cesarpizarra/url-shortening-api-master",
    project_link: "https://cesarpizarra.github.io/url-shortening-api-master/",
    tools: ["React", "Vite", "Tailwind"],
  },
  {
    project_img: TodoApp,
    name: "Todo App",
    description:
      "A  challenge from the Frontend Mentor website, with a dark/light mode theme switcher and local storage.",
    githubLink: "https://github.com/cesarpizarra/todo-app",
    project_link: "https://todo-app-teal-nu.vercel.app/",
    tools: ["React", "Vite", "Tailwind"],
  },

  {
    project_img: NewsHomePage,
    name: "News Home Page",
    description: "A News Home Page challenge from the Frontend Mentor website.",
    githubLink: "https://github.com/cesarpizarra/news-homepage",
    project_link: "https://cesarpizarra.github.io/news-homepage/",
    tools: ["React", "Vite", "Tailwind"],
  },
  {
    project_img: IntroSection,
    name: "Intro Section Dropdown ",
    description:
      "A Intro Section with Dropdown Navigation challenge from the Frontend Mentor website.",
    githubLink:
      "https://github.com/cesarpizarra/intro-section-with-dropdown-navigation-main",
    project_link:
      "https://cesarpizarra.github.io/intro-section-with-dropdown-navigation-main/",
    tools: ["React", "Vite", "Tailwind"],
  },

  {
    project_img: WeatherApp,
    name: "Weather App",
    description:
      "Dynamic weather app with real-time updates and location-based forecasts.",
    githubLink: "https://github.com/cesarpizarra/weather-app",
    project_link: "https://cesarpizarra.github.io/weather-app/",
    tools: ["React", "Vite", "Tailwind"],
  },
  {
    project_img: LoginForm,
    name: "Login Form",
    description:
      "This is a simple responsive login form created using Tailwind CSS and HTML. ",
    githubLink: "https://github.com/cesarpizarra/loginform",
    project_link: "https://cesarpizarra.github.io/loginform/",
    tools: ["HTML", "JS", "Tailwind"],
  },
];

export const contacts = {
  get: "Get In Touch",
  info: "I am actively seeking opportunities as a web developer and would love to contribute to real projects while expanding my skill set. If you're interested, don't hesitate to reach out via email. I'm always available to connect and discuss potential collaborations.",
};
