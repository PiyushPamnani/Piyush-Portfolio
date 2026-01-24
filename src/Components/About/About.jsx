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
              <small>1+ year</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>10 Completed</small>
            </article>
          </div>

          <p>
            Full Stack Software Developer with 1+ year of professional experience building scalable web applications. Worked at Deqode Solutions, where I have contributed to multiple production-grade projects, including a full-stack banking application and enterprise client projects, with brief exposure to blockchain-based integrations. Graduated in Electronics and Communication Engineering from MIT World Peace University, Pune with 8.66 CGPA. Completed multiple internships across product-based and service-based companies, gaining hands-on experience in scalable frontend, backend, and testing practices.
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
