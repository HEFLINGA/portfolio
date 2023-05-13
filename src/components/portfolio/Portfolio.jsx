import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio_img.png";
import IMG2 from "../../assets/bb_img.jpg";
import IMG3 from "../../assets/vscode_cc_img.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Personal Portfolio",
    description: "My personal portfolio for displaying my current skills, experience, and fully completed projects, as well as to showcase my frontend development abilities",
    tech: "React, Tailwindcss, HTML/CSS, EmailJs",
    github: "https://github.com/HEFLINGA/ExerciseClassProject",
    demo: "https://heflinga.github.io/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Microsoft Software and Systems Academy Final Project",
    description: "The final project for a fullstack web application bootcamp with a focus on cloud application development put on by Microsoft and Embry-Riddle Aeronautical University",
    tech: "ASP.NET, MVC, Agile/KanBan, JavaScript, C#, REST, Azure, Bootstrap",
    github: "https://github.com/HEFLINGA/ExerciseClassProject",
    demo: "",
  },
  {
    id: 3,
    image: IMG3,
    title: "VSCode Code Auto Completion Extension",
    description: "An extension created for Los Alamos National Laboratory while working as a developer/research intern. This extension gives completion suggestions based on current context in Python scripts, using Huggingface LLM API",
    tech: "TypeScript, HuggingFace LLM API, VSCode, Python",
    github: "https://github.com/HEFLINGA/VSCodeExtension_CodeCompletion",
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
              <p><strong>Relevent Skills:</strong> {tech}</p>
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
