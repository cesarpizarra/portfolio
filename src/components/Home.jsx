import React, { useState } from "react";
import { socialLinks } from "../constant/api";
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
        className="max-w-[1200px] mx-auto px-4 flex flex-col gap-4 justify-center h-screen"
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
        <div className="card hidden md:flex">
          <a href={socialLinks[0].link} className="social-link1">
            {socialLinks[0].icon({ size: 20 })}
          </a>
          <a href={socialLinks[1].link} className="social-link2">
            {socialLinks[1].icon({ size: 20 })}
          </a>
          <a href={socialLinks[2].link} className="social-link3">
            {socialLinks[2].icon({ size: 20 })}
          </a>
          <a href={socialLinks[3].link} className="social-link4">
            {socialLinks[3].icon({ size: 20 })}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
