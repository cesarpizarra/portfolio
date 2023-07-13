import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { projects } from "../constant/api";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Project = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(3);

  const text = "Projects";

  const handleItemHover = (index) => {
    setHoveredIndex(index);
  };

  const handleItemLeave = () => {
    setHoveredIndex(null);
  };

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const handleDotClick = (index) => {
    const swiperInstance = swiperRef.current.swiper;
    swiperInstance.slideTo(index); // Navigate to the slide with the specified index
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full min-h-screen pt-40 lg:pt-0 bg-[#111623] text-white pb-20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">
        <div data-aos="fade-up" className="text-left">
          <h1 className="text-5xl font-bold text-[#2ABC7F]">
            {text.split("").map((letter, index) => (
              <span
                key={index}
                className={
                  hoveredIndex === index
                    ? "rubber-band hover:text-[#2ABC7F]"
                    : ""
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
        <div
          className="ml-4 flex gap-8 justify-center items-center relative flex-wrap"
          data-aos="fade-up"
        >
          <Swiper
            ref={swiperRef} // Add ref to access the Swiper instance
            slidesPerView={slidesPerView}
            spaceBetween={25}
            centeredSlides={true}
            pagination={{ clickable: true }}
            onSlideChange={handleSlideChange}
          >
            {projects.map((project, key) => (
              <SwiperSlide key={key}>
                <div className="dark:bg-slate-800 shadow-lg w-80 h-96 rounded ">
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
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination absolute bottom-[-2rem] left-0 right-0 flex justify-center items-center">
            {projects.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 cursor-pointer rounded-full mx-1 transition-all duration-300 ${
                  activeIndex === index ? "bg-[#2ABC7F]" : "bg-gray-400"
                }`}
                onClick={() => handleDotClick(index)} // Add onClick event
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
