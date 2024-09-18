import React from "react"
import "./Footer.scss"

const Footer = () => {
  return (
    <footer className="paddings flexCenter footer-container">
      <span>© Anderson Yang 2024</span>
      <div className="links">
        <a href="https://github.com/andersonzw/" target="_blank">
          <img
            className="github-icon"
            src="/assets/github-142-svgrepo-com.svg"
            style={{ height: "24px" }}
            alt="github icon"
          />
        </a>
      </div>
    </footer>
  )
}

export default Footer
