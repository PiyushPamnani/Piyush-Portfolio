import React from "react";
import ME from "../../assets/about-piyush.jpeg";
import { FiAward } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={ME} alt="about-piyush" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FiAward className="about_icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>10 Completed</small>
            </article>
          </div>

          <p>
            Hello, I am Piyush Pamnani, a final year engineering student in
            Electronics and Communication from MIT World Peace University Pune.
            I have created a professional portfolio showcasing my passion for
            self-learning and my achievements in various projects.
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
