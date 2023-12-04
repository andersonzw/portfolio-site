import React from "react";
import "./ProjectCard.scss";
const ProjectCard = ({ project }) => {
  const { projectName, image, description, tools, link } = project;
  return (
    <div className="project-card">
      <img className="card-image" src={image} alt="" />
      <div className="flexColStart card-description">
        <h2>{projectName}</h2>
        <p className="body-text">{description}</p>
        <div className="tools">
          {tools.map((tool, i) => (
            <span key={i}>{tool}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
