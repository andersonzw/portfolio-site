import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import "./ProjectCard.scss";
import { ThemeContext } from "../../../utils/context/theme-context";
const ProjectCard = ({ project }) => {
  const { projectName, image, description, tools, link, githubLink } = project;
  const { lightMode } = useContext(ThemeContext);
  return (
    <div className="project-card">
      <div className="image-container">
        <img className="card-image" src={image} alt="" />
      </div>
      <div className="flexColStart card-description">
        <div className="header">
          <h2>{projectName}</h2>
          <div className="header-line" />
          <a target="_blank" href={githubLink} rel="noreferrer">
            <FaGithub className={`icon ${lightMode ? "light-theme" : null}`} />
          </a>
          <a target="_blank" href={link} rel="noreferrer">
            <FiExternalLink
              className={`icon ${lightMode ? "light-theme" : null}`}
            />
          </a>
        </div>

        <div className="tools">
          {tools.map((tool, i) => (
            <div className="coloured tool" key={i}>
              {tool}
            </div>
          ))}
        </div>
        <p className="body-text">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
