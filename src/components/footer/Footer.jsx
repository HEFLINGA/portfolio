import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#" className="footer_logo">
        Auston Hefling
      </a>
      <ul className="permalinks">
        <li>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
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
        <a href="https://facebook.com/auston.m.rich" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://linkedin.com/in/austonhefling" target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
        <a href="https://github.com/heflinga" target="_blank" rel="noreferrer">
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
