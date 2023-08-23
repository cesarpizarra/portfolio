import React from "react";
import { about } from "../constant/index";

const About = () => {
  return (
    <section
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
      id="about"
      className="text-white"
    >
      <h1 className="flex lg:hidden text-2xl font-semibold py-8 uppercase">
        About
      </h1>
      {about.intro.map((text, index) => (
        <div key={index} className="flex items-center flex-col gap-1">
          <p>{text.title}</p>
          <p>{text.subtitle1}</p>
          <p>{text.subtitle2}</p>
        </div>
      ))}
      <div className="mt-6">
        <p className="text-gray-400 font-medium text-xl">
          {about.education.title}
        </p>
        <p className="mt-4 lg:mt-2 ">{about.education.school}</p>
      </div>
    </section>
  );
};

export default About;
