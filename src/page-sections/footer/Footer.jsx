import React from "react";
import "./Footer.scss";

const Footer = ({ lightMode }) => {
  return (
    <footer
      className={`paddings flexCenter footer-container ${
        lightMode ? "light-theme" : null
      }`}
    >
      <span>Anderson Yang 2024</span>
      <div className="links">
        <img
          src="/assets/github-142-svgrepo-com.svg"
          style={{ height: "24px" }}
          alt="github icon"
        />
      </div>
    </footer>
  );
};

export default Footer;
