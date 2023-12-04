import React from "react";
import "./About.scss";
import skills from "../../utils/skills.json";
import otherSkills from "../../utils/other_skills.json";
import SkillCard from "./skill-card/SkillCard";
const About = () => {
  return (
    <section className="about-section">
      <div className="flexColCenter paddings innerWidth about-container">
        <h1 className="section-title">
          About Me
          <div className="separator"/>
        </h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
          commodo odio. Etiam lobortis congue nulla a maximus. Cras urna sapien,
          faucibus in lorem in, dignissim sagittis lacus. Donec quis suscipit
          nisi. Praesent dignissim feugiat mauris quis aliquet. Vestibulum et
          iaculis dolor. Nulla dictum purus elit, eu semper lorem rhoncus eu.
        </p>
        <h2>Frontend Skills</h2>
        <div className="skills-container">
          {skills.map((skill, i) => {
            return <SkillCard key={i} skill={skill} />;
          })}
        </div>
        <h2>Other Skills</h2>
        <div className="skills-container">
          {otherSkills.map((skill, i) => {
            return <SkillCard key={i} skill={skill} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
