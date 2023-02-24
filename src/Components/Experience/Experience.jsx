import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Journey So far</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="digilytics_systems">
          <h3>Full Stack Developer Intern</h3>
          <small>Digilytics Systems</small>
          <small>July 2, 2022 - January 7, 2023</small>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <h4>ReactJS</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <h4>Python</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <h4>Firebase</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <h4>Flask</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
