import React, { useState } from "react";
import MainLayout from "../layout/MainLayout";
import { projects } from "../constant/api";
import { FiExternalLink, FiGithub } from "react-icons/fi";
const ProjectPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleItemHover = (index) => {
    setHoveredIndex(index);
  };

  const handleItemLeave = () => {
    setHoveredIndex(null);
  };

  const text = "Projects";

  return (
    <MainLayout>
      <div
        id="project"
        name="projects"
        className="w-full min-h-screen bg-[#111623] text-white pb-20 pt-40 lg:pt-36 overflow-hidden"
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div data-aos="fade-up" className="text-left">
            <h1 className="text-5xl font-bold text-[#2ABC7F]">
              {text.split("").map((letter, index) => (
                <span
                  key={index}
                  className={
                    hoveredIndex === index ? "hover:text-[#2ABC7F]" : ""
                  }
                  onMouseEnter={() => handleItemHover(index)}
                  onMouseLeave={handleItemLeave}
                >
                  {letter}
                </span>
              ))}
            </h1>
            <p className="py-4 text-gray-400">
              Here are some of the projects that I built.
            </p>
          </div>

          {/* Grid items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {projects.map((project, index) => (
              <div key={index}>
                <div
                  data-aos="fade-up"
                  className="dark:bg-slate-800 drop-shadow-2xl w-80 h-96 rounded"
                >
                  <div className="p-2 flex justify-center items-center flex-col">
                    <div className="flex flex-col gap-2">
                      <div className="overflow-hidden">
                        <img
                          src={project.project_img}
                          alt=""
                          className="hover:scale-105 duration-300 transition"
                        />
                      </div>
                      <div className="text-white text-center text-2xl font-semibold pt-2">
                        {project.name}
                      </div>
                      <div className="text-sm text-gray-400">
                        {project.description}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 absolute bottom-4 left-2">
                    <a
                      href={project.project_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="Btn">
                        <div className="sign">
                          <FiExternalLink size={20} />
                        </div>
                        <div className="text">Visit</div>
                      </button>
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="Btn">
                        <div className="sign">
                          <FiGithub size={20} />
                        </div>
                        <div className="text">Code</div>
                      </button>
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
