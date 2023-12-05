import React from "react";
import "./About.scss";
import skills from "../../utils/skills.json";
import otherSkills from "../../utils/other_skills.json";
import SkillCard from "./skill-card/SkillCard";
import Reveal from "../../utils/animation-components/Reveal";
const About = () => {
  return (
    <section className="about-section">
      <div className="flexColCenter paddings innerWidth about-container">
        <div className="header-section">
          <h1 className="section-title">
            <Reveal>
              About Me
              <div className="separator" />
            </Reveal>
          </h1>
          <div className="header-line" />
        </div>
        <Reveal>
          <p className="primary-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
            commodo odio. Etiam lobortis congue nulla a maximus. Cras urna
            sapien, faucibus in lorem in, dignissim sagittis lacus. Donec quis
            suscipit nisi. Praesent dignissim feugiat mauris quis aliquet.
            Vestibulum et iaculis dolor. Nulla dictum purus elit, eu semper
            lorem rhoncus eu.
          </p>
        </Reveal>
        <Reveal>
          <h2>Frontend Skills</h2>
        </Reveal>
        <div className="skills-container">
          {skills.map((skill, i) => {
            return (
              <Reveal key={i}>
                <SkillCard skill={skill} />
              </Reveal>
            );
          })}
        </div>
        <Reveal>
          <h2>Other Skills</h2>
        </Reveal>
        <div className="skills-container">
          {otherSkills.map((skill, i) => {
            return (
              <Reveal key={i}>
                <SkillCard skill={skill} />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
