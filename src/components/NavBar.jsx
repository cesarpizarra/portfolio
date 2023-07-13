import React, { useState, useEffect } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { navLinks } from "../constant/api.js";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logoImage from "../assets/logo-cesar.png";

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

  return (
    <div className="max-w-[1300px] w-full mx-auto">
      <div className="z-10 fixed w-full bg-[#111623] flex justify-between items-center px-2 py-2 md:px-12 ">
        <div className="flex items-center justify-center">
          <img src={logoImage} alt="Logo" className="w-16 " />
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
      </div>
    </div>
  );
};

export default NavBar;
