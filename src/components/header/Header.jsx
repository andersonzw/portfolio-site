import React from "react";
import "./Header.scss";
const Header = () => {
  return (
    <header className="paddings flexCenter header-container">
      <div className="flexCenter header-logo">AY</div>
      <div className="flexCenter header-navigator">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
      </div>
      <div className="header-github-btn">
        <img
          style={{ height: 32}}
          src="/assets/github-142-svgrepo-com (2).svg"
          alt="github icon"
        />
      </div>
      <div className="header-menu-btn">
        <img
          style={{ height: 32}}
          src="/assets/menu-svgrepo-com.svg"
          alt="github icon"
        />
      </div>
    </header>
  );
};

export default Header;
