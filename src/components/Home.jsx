import React, { useState } from "react";
import { socialLinks } from "../constant/api";
import { homePage } from "../constant/api";
import { AiOutlineArrowRight } from "react-icons/ai";

const Home = () => {
  const [hoveredLetter, setHoveredLetter] = useState(null);

  const handleLetterHover = (index) => {
    setHoveredLetter(index);
  };

  const handleLetterLeave = () => {
    setHoveredLetter(null);
  };

  const { title, name, intro, description } = homePage;

  return (
    <div name="home" className="w-full min-h-screen bg-[#111623]">
      {/* Container for Hero */}
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="max-w-[1200px] mx-auto px-4 md:px-14 flex flex-col gap-2 md:gap-3 justify-center h-screen"
      >
        {/* Social media accounts */}
        <div className="hidden xl:flex fixed flex-col top-[40%] left-[-40px]">
          <ul className="mb-4">
            {socialLinks.map((item, index) => (
              <li
                key={index}
                className="w-[150px] h-[45px] flex justify-between items-center "
              >
                <a
                  className="flex justify-between items-center w-full text-gray-300 hover:text-[#2ABC7F] duration-300"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon({ size: 30 })}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-[#2ABC7F] text-3xl font-medium">{title}</p>
        {/* Animate hover */}
        <h1 className="text-white font-bold text-4xl lg:text-8xl">
          {name.split("").map((letter, index) => (
            <span
              key={index}
              className={
                hoveredLetter === index && letter !== " "
                  ? "rubber-band hover:text-[#2ABC7F]"
                  : ""
              }
              onMouseEnter={() => handleLetterHover(index)}
              onMouseLeave={handleLetterLeave}
            >
              {letter}
            </span>
          ))}
        </h1>
        <h2 className="text-2xl lg:text-5xl font-bold text-[#8892b0]">
          {intro}
        </h2>
        <p className="text-white">{description}</p>
        <div>
          <button className="flex items-center group transition duration-300 border border-[#2ABC7F] button text-white px-12 py-3 rounded-lg">
            Projects
            <span className="group-hover:rotate-90 duration-300">
              <a href="#project">
                <AiOutlineArrowRight size={20} className="ml-3" />
              </a>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
