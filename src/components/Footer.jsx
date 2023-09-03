import React from "react";
import {BiLogoGmail} from "react-icons/bi";
import {FaFacebookMessenger, FaLinkedin, FaGithub} from "react-icons/fa";
import {IoLogoWhatsapp} from "react-icons/io";
import {Link} from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer footer-center p-10 mt-16 gap-5 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <a href="#root" className="link link-hover">
          Main
        </a>
        <a href="#about" className="link link-hover">
          About
        </a>
        <a href="#skills" className="link link-hover">
          Skills
        </a>
        <a href="#projects" className="link link-hover">
          Projects
        </a>
        <a href="#blogs" className="link link-hover">
          Blogs
        </a>
        <a href="#contact" className="link link-hover">
          Contact
        </a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4 text-2xl">
          <Link to={"mailto:zihadulislam066@gmail.com"}>
            <BiLogoGmail />
          </Link>

          <Link to={"https://www.linkedin.com/in/dev-zihad"}>
            <FaLinkedin />
          </Link>
          <Link to={"https://github.com/zihaaad"}>
            <FaGithub />
          </Link>
          <Link to={"https://wa.me/8801871332066"}>
            <IoLogoWhatsapp />
          </Link>
        </div>
      </div>
      <div>
        <p>Designed & Developed by Zihadul Islam</p>
      </div>
    </footer>
  );
};
