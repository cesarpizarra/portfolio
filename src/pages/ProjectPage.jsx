import React, { useEffect, useState } from "react";
import MainLayout from "../layout/MainLayout";
import { FiGithub } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";
import { projects } from "../constant/api";

const ProjectPage = () => {
  const [hoveredLetter, setHoveredLetter] = useState(null);

  const handleLetterHover = (index) => {
    setHoveredLetter(index);
  };

  const handleLetterLeave = () => {
    setHoveredLetter(null);
  };

  const text = "Projects";

  return (
    <MainLayout>
      <div
        id="project"
        name="projects"
        className="w-full min-h-screen bg-[#111623] text-white pb-20 pt-40 lg:pt-44 overflow-hidden"
      >
        <div className="max-w-[1200px] w-full md:h-screen mx-auto px-5 md:px-10 flex flex-col justify-center flex-grow">
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
            <p className="py-4 text-[#8892b0]">
              Here are some of the projects that I built.
            </p>
          </div>

          {/* Grid items */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="shadow-md shadow-[#040c16] group container flex flex-col justify-end mx-auto relative overflow-hidden"
              >
                <a
                  href={project.externalLink}
                  className="block w-full h-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.backgroundImage}
                    alt={project.title}
                    className="w-full h-full group-hover:scale-105 transition-transform duration-300 object-cover"
                  />
                </a>
                {/* Title and icons */}
                <div className="bg-[#1c2131] px-2  py-2 flex items-center justify-center flex-col group-hover:opacity-100">
                  <span className="text-md">{project.title}</span>
                  <p className="text-center text-[#8b9bca] text-md tracking-normal">
                    {project.description}
                  </p>
                  <div className="text-[#2ABC7F] flex justify-center gap-6 pt-2">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub className="cursor-pointer" size={25} />
                    </a>
                    <a
                      href={project.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BiLinkExternal className="cursor-pointer" size={25} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProjectPage;
