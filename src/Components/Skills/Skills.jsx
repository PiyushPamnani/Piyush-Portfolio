import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <h5>The Skills I have</h5>
      <h2>My Skills</h2>

      <div className="container skills__container">
        {/* ================================================ */}

        <div className="programming_languages">
          <h3>Programming Languages</h3>
          <div className="skills_content">
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>C++</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>C</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Python</h4>
            </article>
          </div>
        </div>
        {/* ================================================ */}

        <div className="web_development">
          <h3>Web Development</h3>
          <div className="skills_content">
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>ReactJS</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>JavaScript</h4>
            </article>
          </div>
        </div>
        {/* ================================================ */}

        <div className="dbms">
          <h3>DBMS</h3>
          <div className="skills_content">
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>MySQL</h4>
            </article>
          </div>
        </div>
        {/* ================================================ */}

        <div className="software_development">
          <h3>Software Development</h3>
          <div className="skills_content">
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>DSA</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>OOP</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
