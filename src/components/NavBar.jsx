import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { socialLinks, navLinks, logo } from "../constant/api.js";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleClickNav = () => {
    setNav(!nav);
  };

  const handleNavClick = () => {
    if (nav) {
      setNav(false);
      window.scrollTo(0, 0);
    }
  };

  let email = "cpizarra002@gmail.com";
  return (
    <div className="z-10 fixed w-full bg-[#111623] flex justify-between items-center px-3 md:px-10  py-3">
      <div className="flex items-center justify-center">
        <img src={logo.logo} alt="Log" className="w-16" />
      </div>

      {/* menu item */}
      <ul className="hidden md:flex justify-center items-center menu text-white">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.path} onClick={handleNavClick}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger bar menu */}
      <div onClick={handleClickNav} className="md:hidden z-10 cursor-pointer">
        {!nav ? (
          <BiMenuAltRight size={40} className="text-white" />
        ) : (
          <FaTimes size={40} className="text-white" />
        )}
      </div>

      {/* Mobile view */}
      <ul
        className={`${
          !nav
            ? "opacity-0 invisible ease-in duration-500"
            : "opacity-100 visible ease-in duration-500"
        } absolute top-0 left-0 w-full h-screen bg-[#111623] flex flex-col justify-center items-center menu`}
      >
        {navLinks.map((link, index) => (
          <li
            key={index}
            className={`py-6 text-2xl ${
              nav
                ? "animate__animated animate__backInUp"
                : "animate__animated animate__backInDown"
            }`}
            style={{ animationDelay: `${index * 0.5}s` }}
          >
            <Link
              to={link.path}
              onClick={() => {
                handleNavClick();
                link.clicked = true;
              }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social media accounts */}
      <div className="hidden xl:flex fixed flex-col top-[50%] left-0">
        <ul className="mb-4">
          {socialLinks.map((item, index) => (
            <li
              key={index}
              className={`w-[150px] h-[45px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${item.bgColor}`}
            >
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mr-2">{item.label}</span>
                {item.icon({ size: 30 })}
              </a>
            </li>
          ))}
        </ul>
        <div className="bg-white w-px h-44 ml-4"></div>
      </div>

      <div className="  text-white flex-col hidden xl:flex fixed right-8 top-[45%] ">
        {email.split("").map((value, index) => {
          return (
            <p
              key={index}
              className="flex items-start rotate-90 hover:text-[#2ABC7F] duration-300"
              style={{ lineHeight: 0.8 }}
            >
              {value}
            </p>
          );
        })}
        <div className="bg-white w-px h-60 ml-2 mt-3"></div>
      </div>
    </div>
  );
};

export default NavBar;
