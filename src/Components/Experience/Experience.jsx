import { React, useState } from "react";
import { IconContext } from "react-icons";
import { BsPatchCheckFill } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./experience.css";

const Experience = () => {
  const [isActive, setIsActive] = useState(false);

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
          <span className="experience_details-more">
            <span onClick={() => setIsActive(true)}>View More</span>
          </span>
          <div className={`experience_model ${isActive ? "active-model" : ""}`}>
            <div class="experience_model-content">
              <h4 class="experience_model-title">
                Noted <br /> Accomplishments
              </h4>
              <i
                class="experience_model-close"
                onClick={() => setIsActive(false)}
              >
                <AiOutlineCloseCircle />
              </i>

              <ul class="experience_model-points">
                <IconContext.Provider value={{ size: "1em" }}>
                  <li class="experience_model-point">
                    <BsPatchCheckFill className="experience_details-icon" />
                    <p>Edited and added new features to an existing website.</p>
                  </li>
                  <li class="experience_model-point">
                    <BsPatchCheckFill className="experience_details-icon" />
                    <p>
                      Improved the website's navigation bar and user interface.
                    </p>
                  </li>
                  <li class="experience_model-point">
                    <BsPatchCheckFill className="experience_details-icon" />
                    <p>Dynamic QR code generation with unique runtime URLs.</p>
                  </li>
                  <li class="experience_model-point">
                    <BsPatchCheckFill className="experience_details-icon" />
                    <p>Added a download button for downloading a CSV file.</p>
                  </li>
                </IconContext.Provider>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
