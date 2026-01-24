import SkillCard from "./SkillCard";
import "./skills.css";

import programmingBg from "../../assets/skills/programming.avif";
import webBg from "../../assets/skills/web-languages.avif";
import dbBg from "../../assets/skills/dbms.avif";
import toolsBg from "../../assets/skills/testing-tools.avif";

const Skills = () => {
  const skillsData = [
    {
      title: "Programming Languages",
      bgImage: programmingBg,
      skills: ["C++", "C", "JavaScript", "TypeScript"],
    },
    {
      title: "Web Development",
      bgImage: webBg,
      skills: ["HTML", "CSS", "React.js", "Node.js", "Express.js", "Nest.js"],
    },
    {
      title: "Testing & Tools",
      bgImage: toolsBg,
      skills: ["Git", "GitHub", "GitLab", "VS Code", "Jest", "Enzyme", "Chai"],
    },
    {
      title: "DBMS",
      bgImage: dbBg,
      skills: ["MySQL", "MongoDB"],
    },
  ];

  return (
    <section id="skills">
      <h5>Skills I have</h5>
      <h2>My Skills</h2>

      <div className="container skills__container">
        {skillsData.map((item) => (
          <SkillCard
            key={item.title}
            title={item.title}
            skills={item.skills}
            bgImage={item.bgImage}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
