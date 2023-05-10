import React from "react";
import "./about.css";
import ME from "../../assets/prof_img.png";
import { FaAward } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { TfiLayoutPlaceholder } from "react-icons/tfi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_img">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>blah blah years experience</small>
            </article>
            <article className="about_card">
              <HiAcademicCap className="about_icon" />
              <h5>Academics</h5>
              <small>blah blah academics</small>
            </article>
            <article className="about_card">
              <TfiLayoutPlaceholder className="about_icon" />
              <h5>PLACEHOLDER</h5>
              <small>blah blah PLACEHOLDER </small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Tincidunt id aliquet risus feugiat. Convallis convallis tellus id
            interdum velit laoreet id donec. Non odio euismod lacinia at. Eget
            velit aliquet sagittis id consectetur purus ut faucibus pulvinar.
            Eget magna fermentum iaculis eu non diam phasellus.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
