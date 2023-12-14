import React from "react";
import experienceData from "../../utils/experience.json";
import ExperienceCard from "./experience-card/ExperienceCard";
import "./Experience.scss";
import { Reveal } from "../../utils/animation-components/Reveal";
const Experience = () => {
  return (
    <section className="experience-section">
      <div className="innerWidth paddings flexColCenter experience-container">
        <div className="header-section">
          <Reveal>
            <h1 className="section-title">
              Experience
              <div className="separator" />
            </h1>
          </Reveal>
          <div className="header-line" />
        </div>

        <div className="experience-list-container">
          {experienceData.map((exp, i) => (
            <ExperienceCard key={i} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
