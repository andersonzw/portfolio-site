import React, { useContext } from "react";
import "./ExperienceCard.scss";
import Reveal from "../../../utils/animation-components/Reveal";
import { ThemeContext } from "../../../utils/context/theme-context";
const ExperienceCard = ({ experience }) => {
  const { company, jobTitle, jobDate, jobCity, jobDescription, jobSkills } =
    experience;
  const { lightMode } = useContext(ThemeContext);
  return (
    <div className="experience-card">
      <div className="card-header">
        <Reveal>
          <span>{company}</span>
        </Reveal>
        <Reveal>
          <span className="desktop-680px">{jobDate}</span>
        </Reveal>
      </div>
      <div className="card-subheader">
        <Reveal>
          <span className="coloured">{jobTitle}</span>
        </Reveal>
        <Reveal>
          <span className="desktop-680px">{jobCity}</span>
        </Reveal>
      </div>

      <div className="card-description">
        <Reveal>
          <span className="desktop-680px">{jobDescription}</span>
        </Reveal>
      </div>
      <Reveal>
        <div className="card-skills">
          {jobSkills.map((skill, i) => (
            <span key={i}>{skill}</span>
          ))}
        </div>
      </Reveal>

      <div className="card-separator" />
    </div>
  );
};

export default ExperienceCard;
