import React from "react";
import About from "../pages/About.jsx";
import Skills from "../pages/Skills.jsx";
import Projects from "../pages/Projects.jsx";
import Contact from "../pages/Contact.jsx";

const RightSide = () => {
  return (
    <main className="pt-24 lg:w-1/2 lg:py-12">
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default RightSide;
