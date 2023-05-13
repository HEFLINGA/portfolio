import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio_img.png";
import IMG2 from "../../assets/bb_img.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Personal Portfolio",
    description: "My personal portfolio for displaying my current skills, experience, and fully completed projects, as well as to showcase my frontend development abilities.",
    tech: "React, Tailwindcss, HTML/CSS",
    github: "https://github.com/HEFLINGA/ExerciseClassProject",
    demo: "https://heflinga.github.io/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Microsoft Software and Systems Academy Final Project",
    description: "Stuff",
    tech: "thing 1, thing 2",
    github: "https://github.com/HEFLINGA/ExerciseClassProject",
    demo: "",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Portfolio</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, description, tech, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item_image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <p><strong>Technology used:</strong> {tech}</p>
              <div className="portfolio_item_cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                {demo !== "" ? (
                  <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
                ) : null }
                
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
