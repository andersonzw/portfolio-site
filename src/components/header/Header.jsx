import React from "react";
import "./Header.scss"
const Header = () => {
  return (
    <header className="paddings flexCenter header-container">
      <div className="flexCenter header-logo">AY</div>
      <div className="flexCenter header-navigator">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Projects</a>
      </div>
      <div className="header-theme-btn">X</div>
    </header>
  );
};

export default Header;
