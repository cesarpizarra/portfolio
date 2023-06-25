import React from "react";
import { socialLinks } from "../constant/api.js";

const Footer = () => {
  return (
    <div
    className="w-full bg-[#111623] text-white max-w-[1440px] px-5 md:px-10 mx-auto">
      <footer>
        {/* Social icons */}
        <div className="flex justify-center items-center xl:hidden">
          <ul className="flex mb-4">
            {socialLinks.map((item, index) => (
              <li
                key={index}
                className="hover:text-[#2ABC7F] duration-300 hover:scale-110"
              >
                <a href={item.link}>{item.icon({ size: 30 })}</a>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-center">Built by Cesar G. Pizarra © 2023</p>
      </footer>
    </div>
  );
};

export default Footer;
