import React, { useState } from "react";
import MainLayout from "../layout/MainLayout";
import { projects } from "../constant/api";

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
            <h1 className="text-5xl font-bold text-green-500">
              {text.split("").map((letter, index) => (
                <span
                  key={index}
                  className={
                    hoveredIndex === index ? "hover:text-green-500" : ""
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
              <div
                key={index}
                data-aos="fade-up"
                className={`overflow-hidden w-full rounded ${
                  index === 0 && projects.length > 1 ? "md:col-span-2" : ""
                } ${index === projects.length - 1 ? "lg:col-span-2" : ""}`}
              >
                <div
                  className="relative"
                  onMouseEnter={() => handleItemHover(index)}
                  onMouseLeave={handleItemLeave}
                >
                  <img
                    src={project.backgroundImage}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  {hoveredIndex === index && (
                    <div className="absolute inset-0 flex">
                      <div className="bg-black bg-opacity-75 p-4  w-full flex  items-center justify-center flex-col">
                        <h2 className="text-xl font-bold text-white mb-2">
                          {project.title}
                        </h2>
                        <p className="text-sm text-gray-300">
                          {project.description}
                        </p>

                        <div className="pt-2">
                          <a
                            href={project.externalLink}
                            className="block border border-green-500 py-2 px-6 hover:bg-green-500 "
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Site
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
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
