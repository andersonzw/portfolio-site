import React from "react"
import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"
import HeaderLine from "../../../components/header-line/HeaderLine"
import "./ProjectCard.scss"
const ProjectCard = ({ project }) => {
  const { projectName, image, description, tools, link, githubLink } = project
  return (
    <div className="project-card">
      <a href={link} target="_blank" rel="noreferrer">
        <div className="image-container">
          <a target="_blank" className="live-demo" href={link} rel="noreferrer">
            <img
              className="card-image-overlay"
              src="/assets/placeholder-pp.jpg"
              alt=""
            />
          </a>
          <img className="card-image" src={image} alt="" />
        </div>
      </a>
      <div className="flexColStart card-description">
        <div className="header">
          <h2>{projectName}</h2>
          <HeaderLine />
          <a target="_blank" className="live-demo" href={link} rel="noreferrer">
            Live Demo
          </a>
          <a target="_blank" href={githubLink} rel="noreferrer">
            <FaGithub className="icon" />
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
  )
}

export default ProjectCard
