import React from "react";
import { socialLinks } from "../constant/api.js";

const Footer = () => {
  return (
    <div className="w-full bg-[#111623] text-white max-w-[1440px] px-5 md:px-10 mx-auto">
      <footer>
        {/* Social icons */}
        <div className="card ml-[35px] flex xl:hidden">
          <a href={socialLinks[0].link} className="social-link1">
            {socialLinks[0].icon({ size: 20 })}
          </a>
          <a href={socialLinks[1].link} className="social-link2">
            {socialLinks[1].icon({ size: 20 })}
          </a>
          <a href={socialLinks[2].link} className="social-link3">
            {socialLinks[2].icon({ size: 20 })}
          </a>
          <a href={socialLinks[3].link} className="social-link4">
            {socialLinks[3].icon({ size: 20 })}
          </a>
        </div>
        <p className="text-center">Built by Cesar G. Pizarra © 2023</p>
      </footer>
    </div>
  );
};

export default Footer;
