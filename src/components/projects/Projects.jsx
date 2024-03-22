import React from "react";
import "./Projects.scss";
import projectList from "../../utils/project_list.json";
import ProjectCard from "./project-card/ProjectCard";
import ScrollReveal from "../../utils/animation-components/ScrollReveal";
import Reveal from "../../utils/animation-components/Reveal";
const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="innerWidth paddings flexColCenter projects-container">
        <div className="header-section">
          <h1 className="section-title">
            <Reveal>
              Projects
              <div className="separator" />
            </Reveal>
          </h1>
          <div className="header-line" />
        </div>

        <Reveal>
          <p className="primary-text">
            These are some example projects I have worked on
          </p>
        </Reveal>
        <div className="project-list-container">
          {projectList.map((project, i) => (
            <ScrollReveal key={i} width= {'100%'}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
