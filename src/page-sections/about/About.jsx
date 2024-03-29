import React, { useContext } from "react";
import "./About.scss";
import skills from "../../utils/skills.json";
import otherSkills from "../../utils/other_skills.json";
import SkillCard from "./skill-card/SkillCard";
import Reveal from "../../utils/animation-components/Reveal";
import { ScrollContext } from "../../utils/context/scroll-context";
import HeaderLine from "../../components/header-line/HeaderLine";
const About = ({lightMode}) => {
  const {aboutRef} = useContext(ScrollContext)
  return (
    <section ref = {aboutRef} id ="about" className="about-section">
      <div className="flexColCenter paddings innerWidth about-container">
        <div className="header-section">
          <h1 className={`section-title ${lightMode ? "light-theme" : null}`}>
            <Reveal>
              Tech Stack
              <div className="separator" />
            </Reveal>
          </h1>
          <HeaderLine/>
        </div>
        <Reveal>
          <p className="primary-text">
             
          </p>
        </Reveal>
        <Reveal>
          <h2>Front-End</h2>
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
          <h2>Data Science</h2>
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
