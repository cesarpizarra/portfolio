import React from "react";
import { skills } from "../constant/index";
const Skills = () => {
  return (
    <section id="skills" className="mt-40">
      <h1 className="flex lg:hidden text-2xl font-semibold py-8 uppercase text-white">
        Skills
      </h1>
      <p className="py-4 text-[cyan] font-medium">
        These are the technologies and tools I use for web development
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {skills.map((skill, index) => (
          <div className="bg-[#1c2131] rounded " key={index}>
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-10 sm:w-6 mx-auto mt-3 hover:scale-125 duration-500 "
            />
            <p className="py-2 text-white text-center text-sm">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
