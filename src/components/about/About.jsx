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

        {/* ------ END ABOUT ME IMAGE */}

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>2+ Years Fullstack Experience</small>
              <div className="line"></div>
              <small>
                4+ Years Professional and Academic General Programming
                Experience
              </small>
            </article>
            <article className="about_card">
              <HiAcademicCap className="about_icon" />
              <h5>Academics</h5>
              <small>Summa Cum Laude Honor Graduate</small>
              <div className="line"></div>
              <small>"Outstanding CSCI Student" Award Recipient</small>
            </article>
            <article className="about_card">
              <TfiLayoutPlaceholder className="about_icon" />
              <h5>PLACEHOLDER</h5>
              <small>blah blah PLACEHOLDER </small>
            </article>
          </div>
          <p>
            I am a Summa Cum Laude honor graduate with a Bachelors of Science in
            Computer Science from Coastal Carolina University (CCU). I also
            recieved the "Outstanding Computer Science Student" award for
            academic and professional performance while attending CCU. I enjoy
            programming both professionally, as well as in my free time for
            personal projects such as developing websites or video games.
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
