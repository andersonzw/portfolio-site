import React from "react";
import "./Projects.scss";
import projectList from "../../utils/project_list.json";
import ProjectCard from "./project-card/ProjectCard";
const Projects = () => {
  return (
    <section className="projects-section">
      <div className="innerWidth paddings flexColCenter projects-container">
        <h1 className="section-title">
          Projects
          <div className="separator" />
        </h1>
        <h2 className="subheading">
          These are some example projects I have worked on
        </h2>
        <div className="flexCenter project-list-container">
          {projectList.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
