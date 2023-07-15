import React from "react";
import { useState } from "react";
import { skillsData } from "../constant/api";
import MainLayout from "../layout/MainLayout";

const SkillsPage = () => {
  const [hoveredLetter, setHoveredLetter] = useState(null);

  const handleLetterHover = (index) => {
    setHoveredLetter(index);
  };

  const handleLetterLeave = () => {
    setHoveredLetter(null);
  };

  const text = "Skills";

  return (
    <MainLayout>
      <div
        name="skills"
        className="w-full min-h-screen bg-[#111623] text-white pb-20 pt-44 lg:pt-0 overflow-hidden "
      >
        <div className="max-w-[1200px] w-full h-screen mx-auto px-4 md:px-10 flex flex-col justify-center">
          <div data-aos="fade-up" className="text-left">
            <p className="text-5xl font-bold text-[#2ABC7F]">
              {text.split("").map((letter, index) => (
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
            </p>
            <p className="py-4 text-[#8b9bca]">
              These are the technologies and tools I use for web development
            </p>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-3">
            {skillsData.map((skill, index) => (
              <div
                data-aos="fade-up"
                className="bg-[#1c2131] rounded "
                key={index}
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-10 mx-auto mt-3 hover:scale-125 duration-500"
                />
                <p className="my-4">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SkillsPage;
