import React, { useState } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./experience.css";

const Experience = () => {
  const [isActive, setIsActive] = useState(null);

  const experiences = [
    {
      title: "App Developer Intern",
      company: "Jio",
      duration: "March 2024 - Present",
      skills: ["React-Native", "ReactJS"],
      details: ["Gaining hands-on experience with React Native."],
    },
    {
      title: "Web Developer Intern",
      company: "Evolve Webinfo Pvt. Ltd.",
      duration: "December 2023 - March 2024",
      skills: ["JavaScript", "PHP", "MySQL", "Wordpress"],
      details: [
        `Collaborated effectively with the development team to enhance the company's software solutions.`,
        `Designed visually appealing reports and efficiently managed data within MySQL databases.`,
        `Developed user interfaces using PHP`,
        `Implemented download functionality and report redirection, alongside JavaScript-powered calculations.`,
        `Designed and implemented Custom WordPress Themes and Plugins.`,
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company: "Digilytics Systems",
      duration: "July 2022 - January 2023",
      skills: ["ReactJS", "Python", "Firebase", "Flask"],
      details: [
        "Edited and added new features to an existing website.",
        "Improved the website's navigation bar and user interface.",
        "Implemented Dynamic QR code generation with unique runtime URLs.",
        "Added a download button for downloading a CSV file.",
      ],
    },
  ];

  return (
    <section id="experience">
      <h5>Journey So far</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {experiences.map((exp, index) => (
          <div className="digilytics_systems" key={index}>
            <h3>{exp.title}</h3>
            <small>{exp.company}</small>
            <small>{exp.duration}</small>
            <div className="experience_content">
              {exp.skills.map((skill, skillIndex) => (
                <article className="experience_details" key={skillIndex}>
                  <BsPatchCheckFill className="experience_details-icon" />
                  <h4>{skill}</h4>
                </article>
              ))}
            </div>
            <span className="experience_details-more">
              <span onClick={() => setIsActive(index)}>View More</span>
            </span>
            <div
              className={`experience_model ${
                isActive === index ? "active-model" : ""
              }`}
            >
              <div class="experience_model-content">
                <h4 class="experience_model-title">
                  Noted <br /> Accomplishments
                </h4>
                <i
                  class="experience_model-close"
                  onClick={() => setIsActive(null)}
                >
                  <AiOutlineCloseCircle />
                </i>

                <ul class="experience_model-points">
                  {exp.details.map((detail, detailIndex) => (
                    <li class="experience_model-point" key={detailIndex}>
                      <BsPatchCheckFill className="experience_details-icon" />
                      <p>{detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
