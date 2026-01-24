"use client";

import { useState } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./experience.css";

import { experiences } from "./myExperiences";

const Experience = () => {
  const [isActive, setIsActive] = useState(null);

  return (
    <section id="experience">
      <h5>Journey So Far</h5>
      <h2>My Experience</h2>

      <div className="container experience__timeline">
        {experiences.map((exp, index) => (
          <div
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            key={index}
          >
            <div className="timeline-dot"></div>

            <div
              className="timeline-content"
              onClick={() => setIsActive(index)}
            >
              <h3 className="timeline-role">{exp.title}</h3>

              <div className="timeline-company">
                <span>{exp.company}</span>
                {exp.logo && (
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="timeline-logo"
                  />
                )}
              </div>

              <small className="timeline-duration">{exp.duration}</small>
            </div>

            <div
              className={`experience_model ${
                isActive === index ? "active-model" : ""
              }`}
            >
              <div className="experience_model-content">
                <h4 className="experience_model-title">
                  Noted <br /> Accomplishments
                </h4>

                <i
                  className="experience_model-close"
                  onClick={() => setIsActive(null)}
                >
                  <AiOutlineCloseCircle />
                </i>

                <ul className="experience_model-points">
                  {exp.details.map((detail, detailIndex) => (
                    <li className="experience_model-point" key={detailIndex}>
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
