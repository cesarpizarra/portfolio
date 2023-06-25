import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { homePage } from "../constant/api";

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
        className="max-w-[1200px] mx-auto px-5 md:px-10 flex flex-col gap-4 justify-center h-screen"
      >
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
          <button className="flex items-center group transition duration-300 border border-[#2ABC7F] hover:bg-[#2ABC7F] text-white px-12 py-3 rounded-lg">
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
