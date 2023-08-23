import React, { useState, useEffect } from "react";
import { personalInfo, socialIcons, navLinks } from "../constant/index";

const LeftSide = () => {
  const [activeLink, setActiveLink] = useState("");

  // Function to handle scroll events
  const handleScroll = () => {
    const scrollY = window.scrollY;

    // Iterate through your navLinks and check if any section is in the viewport
    navLinks.forEach((link) => {
      const section = document.querySelector(link.url);

      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 0) {
          setActiveLink(link.title);
        }
      }
    });
  };

  // Add a scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (title) => {
    setActiveLink(title);
  };
  return (
    <header className=" lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-12 ">
      <div className="flex lg:fixed justify-center flex-col">
        {/* Information */}
        <div className=" max-w-md">
          {personalInfo.map((personal, index) => (
            <div className="flex justify-center gap-3 flex-col" key={index}>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-200">
                {personal.name}
              </h1>
              <p className="text-2xl sm:text-2xl font-semibold text-[#8892b0]">
                {personal.career}
              </p>
              <p className="text-gray-400 font-medium">
                {personal.description}
              </p>
            </div>
          ))}
        </div>
        {/* Navlinks */}
        <div className="hidden lg:flex mt-8 md:mt-16">
          <ul>
            {navLinks.map((link, index) => (
              <li
                key={index}
                onClick={() => handleNavClick(link.title)}
                className={`${
                  link.title === activeLink ? "text-white" : "text-gray-500"
                } flex items-center gap-2 uppercase font-semibold group mb-2 cursor-pointer hover:text-white`}
              >
                <span
                  className={`${
                    link.title === activeLink
                      ? "w-20 bg-white"
                      : "w-10 bg-gray-500"
                  } w-10 h-[1px] bg-white group-hover:w-20 duration-300 group-hover:bg-white`}
                ></span>
                <a href={link.url}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* Social Icons */}
        <div className="mt-8 md:mt-16">
          <ul className="flex gap-4">
            {socialIcons.map((item, index) => (
              <li
                key={index}
                className="hover:translate-y-[-5px] duration-300 "
              >
                <a
                  className="opacity-40 text-white hover:text-[cyan] "
                  href={item.link}
                >
                  {item.icon({ size: 25 })}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default LeftSide;
