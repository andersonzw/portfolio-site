import React, { useContext } from "react";
import experienceData from "../../utils/experience.json";
import ExperienceCard from "./experience-card/ExperienceCard";
import "./Experience.scss";
import { Reveal } from "../../utils/animation-components/Reveal";
import { ScrollContext } from "../../utils/context/scroll-context";
import HeaderLine from "../../components/header-line/HeaderLine";
const Experience = () => {
  const { experienceRef } = useContext(ScrollContext);
  return (
    <section ref={experienceRef} className="experience-section">
      <div className="innerWidth paddings flexColCenter experience-container">
        <div className="header-section">
          <Reveal>
            <h1 className="section-title">
              Experience
              <div className="separator" />
            </h1>
          </Reveal>
          <HeaderLine/>
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
