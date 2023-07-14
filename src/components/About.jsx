import React, { useState } from "react";
import { about } from "../constant/api";
import MainLayout from "../layout/MainLayout";

const About = () => {
  const [hoveredLetter, setHoveredLetter] = useState(null);

  const handleLetterHover = (index) => {
    setHoveredLetter(index);
  };

  const handleLetterLeave = () => {
    setHoveredLetter(null);
  };

  const text = "About";

  return (
    <MainLayout>
      <div className="w-full min-h-screen pt-40 lg:pt-0 bg-[#111623] text-white pb-20">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1200px] mx-auto justify-center items-center px-4 md:px-10 grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="col-span-1">
              <div data-aos="fade-up" className="h-auto">
                <img
                  src={about.mypic}
                  alt="My Picture"
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="text-left col-span-1">
              <p
                data-aos="fade-up"
                className="text-5xl font-bold text-[#2ABC7F] mb-4"
              >
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
              {about.intro.map((paragraph, index) => (
                <p key={index} data-aos="fade-up" className="mb-4">
                  {paragraph}
                </p>
              ))}
              <div data-aos="fade-up" className="pt-10">
                <p className="font-bold text-xl">{about.education.title}</p>
                <p className="text-sm text-[#8892b0]">
                  {about.education.school}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
