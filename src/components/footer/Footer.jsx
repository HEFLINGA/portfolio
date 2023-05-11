import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Auston Hefling
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com/auston.m.rich">
          <FaFacebookF />
        </a>
        <a href="https://linkedin.com/in/austonhefling">
          <BsLinkedin />
        </a>
        <a href="https://github.com/heflinga">
          <FaGithub />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Personal Portfolio. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
