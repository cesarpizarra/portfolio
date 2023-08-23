import React from "react";
import { projects } from "../constant/index";
import { FiExternalLink } from "react-icons/fi";
const Projects = () => {
  return (
    <section id="projects" className="mt-28">
      <h1 className="flex lg:hidden text-2xl font-semibold py-8 uppercase text-white">
        Projects
      </h1>
      <div>
        <p className="py-4 text-[cyan]">
          Here are some of the projects that I built.
        </p>
        {projects.map((project, index) => (
          <a href={project.project_link}>
            <div
              key={index}
              className="md:flex gap-8 project-box group mb-8 transition duration-300 p-0 lg:p-[25px] "
            >
              <img
                src={project.project_img}
                alt={project.name}
                className="w-48 border border-gray-500 rounded mb-8"
              />
              <div className="flex flex-col gap-2">
                <p className="text-white font-semibold flex">
                  {project.name}{" "}
                  <a
                    href={project.project_link}
                    className="ml-3 cursor-pointer group-hover:translate-y-[-7px] duration-300"
                  >
                    <FiExternalLink size={20} />
                  </a>
                </p>
                <p className="text-gray-400 text-sm">{project.description}</p>

                <ul className="flex gap-4 mt-2">
                  {project.tools &&
                    project.tools.map((tool, toolIndex) => (
                      <li
                        key={toolIndex}
                        className="text-sm font-semibold bg-[cyan] px-3 py-1 rounded-full text-gray-800 "
                      >
                        {tool}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
