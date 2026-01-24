import { BsPatchCheckFill } from "react-icons/bs";

const SkillCard = ({ title, skills, bgImage }) => {
  return (
    <div className="skill-card" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="skill-overlay">
        <h3>{title}</h3>
      </div>

      <div className="skills_content">
        {skills.map((skill) => (
          <article className="skills_details" key={skill}>
            <BsPatchCheckFill className="skills_details-icon" />
            <h4>{skill}</h4>
          </article>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
