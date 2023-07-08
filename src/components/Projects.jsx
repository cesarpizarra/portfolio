import React, { useState } from "react";
import MainLayout from "../layout/MainLayout";
import { FiGithub } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";
import { projects } from "../constant/api";
import { Link } from "react-router-dom";

const Project = () => {
  const [hoveredLetter, setHoveredLetter] = useState(null);

  const handleLetterHover = (index) => {
    setHoveredLetter(index);
  };

  const handleLetterLeave = () => {
    setHoveredLetter(null);
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const text = "Projects";

  const slicedProjects = projects.slice(0, 6); // Slice the first 6 projects

  return (
    <MainLayout>
      <div
        id="project"
        name="projects"
        className="w-full min-h-screen bg-[#111623] text-white pt-40 lg:pt-20"
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 flex flex-col justify-center h-full">
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
          <div className="flex-grow">
            {slicedProjects.map((project, index) => (
              <div key={index} className="mb-7" data-aos="fade-up">
                <div className="grid md:grid-cols-2">
                  <div className="cursor-pointer relative overflow-hidden group">
                    <a
                      href={project.externalLink}
                      className="block w-full h-full"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={project.backgroundImage}
                        alt={project.title}
                        className="w-full h-full transition-transform duration-300 group-hover:scale-105 group-hover:opacity-100"
                      />
                      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25 transition-opacity duration-300 group-hover:opacity-0"></div>
                    </a>
                  </div>

                  <div className="flex flex-col justify-center ml-4">
                    <h2 className="text-lg text-center mb-2">
                      {project.title}
                    </h2>
                    <p className="text-center text-[#8b9bca] text-sm tracking-normal">
                      {project.description}
                    </p>
                    <div className="flex justify-center gap-2 py-2">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiGithub
                          className="text-[#2ABC7F] hover:text-[#2ABC7F] transition-colors duration-300"
                          size={25}
                        />
                      </a>
                      <a
                        href={project.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BiLinkExternal
                          className="text-[#2ABC7F] hover:text-[#2ABC7F] transition-colors duration-300"
                          size={25}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-center py-10">
              <Link
                to="/projects"
                className="border border-[#2ABC7F] py-2 px-8 hover:bg-[#2ABC7F] transition duration-300 rounded-lg"
                onClick={handleLinkClick}
              >
                See more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Project;
