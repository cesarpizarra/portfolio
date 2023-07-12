import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaUser,
  FaTiktok,
} from "react-icons/fa";
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
import Logo from "../assets/logo-cesar.png";
import Portfolio from "../assets/projects/Portfolio.png";
import UrlMasterLink from "../assets/projects/url-master.png";
import GradeCalculator from "../assets/projects/GradeCalculator.png";
import IntroSection from "../assets/projects/IntroSection.png";
import LoginForm from "../assets/projects/LoginForm.png";
import TodoApp from "../assets/projects/TodoApp.png";
import MovieFlix from "../assets/projects/MovieFlix.png";
import NewsHomePage from "../assets/projects/NewsHomePage.png";
import WeatherApp from "../assets/projects/WeatherApp.png";

export const logo = {
  logo: Logo,
};

export const navLinks = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/skills",
    label: "Skills",
  },
  {
    path: "/projects",
    label: "Projects",
  },
  {
    path: "/contact",
    label: "Contact",
  },
];

export const socialLinks = [
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/cesar-pizarra-610336258/",
    bgColor: "bg-blue-500",
    label: "LinkedIn",
  },
  {
    icon: FaFacebook,
    link: "https://web.facebook.com/cesar.pizarra.1",
    bgColor: "bg-blue-600",
    label: "Facebook",
  },
  {
    icon: FaGithub,
    link: "https://github.com/cesarpizarra",
    bgColor: "bg-gray-700",
    label: "Github",
  },
  {
    icon: FaTiktok,
    link: "https://www.tiktok.com/@cesar_pizarra?is_from_webapp=1&sender_device=pc",
    bgColor: "bg-red-500",
    label: "TikTok",
  },
  {
    icon: FaUser,
    link: "https://example.com/resume",
    bgColor: "bg-green-600",
    label: "Resume",
  },
];

export const homePage = {
  title: "Hi, I'm",
  name: "Cesar G. Pizarra",
  intro: "I'm a Frontend Developer",
  description:
    "and I'm passionate about creating engaging and user-friendly web experiences.",
};

export const about = {
  intro: [
    "Hi there! I'm Cesar, and I'm on a journey to pursue a career in web development. I've always been fascinated by the power of websites and their ability to solve problems and automate processes.",
    "Since then, my passion for web development has only grown stronger. I began my dedicated journey in 2022, diving into the world of coding and web technologies. With each project, I aim to push boundaries, deliver exceptional user experiences, and make a positive impact through technology.",
    "As I embark on this exciting path, I'm driven by curiosity, a thirst for learning, and a willingness to embrace challenges. I believe that web development holds immense potential, and I'm committed to honing my skills to create innovative web solutions that leave a lasting impression.",
  ],
  education: {
    title: "Bachelor of Science in Computer Science",
    school: "Don Mariano Marcos Memorial State University",
  },
};

export const skillsData = [
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
  // {
  //   name: "Mongo DB",
  //   logo: mongoDbLogo,
  // },
  {
    name: "Git",
    logo: gitLogo,
  },
  {
    name: "VsCode",
    logo: vsCodeLogo,
  },
];

export const projects = [
  {
    backgroundImage: Portfolio,
    title: "My Personal Portfolio",
    description: "This is my personal portfolio: a showcase of my work. ",
    githubLink: "https://github.com/cesarpizarra/portfolio",
    externalLink: "https://cezaru.vercel.app/",
  },
  {
    backgroundImage: UrlMasterLink,
    title: "Url-Shortening-Api-Master",
    description:
      "A Url-Shortening-Api-Master challenge from the Frontend Mentor website.",
    githubLink: "https://github.com/cesarpizarra/url-shortening-api-master",
    externalLink: "https://cesarpizarra.github.io/url-shortening-api-master/",
  },
  {
    backgroundImage: TodoApp,
    title: "Todo App",
    description:
      "A Challenge challenge from the Frontend Mentor website, with a dark/light mode theme switcher and local storage.",
    githubLink: "https://github.com/cesarpizarra/todo-app",
    externalLink: "https://todo-app-teal-nu.vercel.app/",
  },

  // {
  //   backgroundImage: MovieFlix,
  //   title: "Movie Flix",
  //   description:
  //     "Sleek movie app showcasing OMDb API data and stunning visuals.",
  //   githubLink: "https://github.com/cesarpizarra/movie-app",
  //   externalLink: "https://cesarpizarra.github.io/movie-app/",
  // },
  {
    backgroundImage: NewsHomePage,
    title: "News Home Page",
    description: "A News Home Page challenge from the Frontend Mentor website.",
    githubLink: "https://github.com/cesarpizarra/news-homepage",
    externalLink: "https://cesarpizarra.github.io/news-homepage/",
  },
  {
    backgroundImage: IntroSection,
    title: "Intro Section with Dropdown Navigation",
    description:
      "A Intro Section with Dropdown Navigation challenge from the Frontend Mentor website.",
    githubLink:
      "https://github.com/cesarpizarra/intro-section-with-dropdown-navigation-main",
    externalLink:
      "https://cesarpizarra.github.io/intro-section-with-dropdown-navigation-main/",
  },

  {
    backgroundImage: WeatherApp,
    title: "Weather App",
    description:
      "Dynamic weather app with real-time updates and location-based forecasts.",
    githubLink: "https://github.com/cesarpizarra/weather-app",
    externalLink: "https://cesarpizarra.github.io/weather-app/",
  },
  {
    backgroundImage: LoginForm,
    title: "Login Form",
    description: "A simple aesthetic login form",
    githubLink: "https://github.com/cesarpizarra/loginform",
    externalLink: "https://cesarpizarra.github.io/loginform/",
  },
];

export const contacts = {
  get: "Get In Touch",
  info: "I am actively seeking opportunities as a web developer and would love to contribute to real projects while expanding my skill set. If you're interested, don't hesitate to reach out via email. I'm always available to connect and discuss potential collaborations.",
  button: "Say Hello!",
};
