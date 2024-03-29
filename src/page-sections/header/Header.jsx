import React, { useContext } from "react";
import "./Header.scss";
import { MenuContext } from "../../utils/context/menu-context";
import { ScrollContext } from "../../utils/context/scroll-context";
import { ThemeContext } from "../../utils/context/theme-context";
const Header = () => {
  const { openNavigatorMenu } = useContext(MenuContext);
  const { projectRef, contactRef, experienceRef, scrollToRef } =
    useContext(ScrollContext);
  const { lightMode, toggleLightMode } = useContext(ThemeContext);
  return (
    <header className="paddings innerWidth flexCenter header-container">
      <div className="header-github-btn">
        <img
          style={{ height: 32 }}
          src={`${
            lightMode
              ? "/assets/github-142-svgrepo-light.svg"
              : "/assets/github-142-svgrepo-com.svg"
          }`}
          alt="github icon"
        />
      </div>
      <div className="flexCenter header-navigator">
        {/* <p onClick={() => scrollToRef(aboutRef)}>About</p> */}
        <p onClick={() => scrollToRef(projectRef)}>Projects</p>
        <p onClick={() => scrollToRef(experienceRef)}>Experiences</p>
        <p onClick={() => scrollToRef(contactRef)}>Contact</p>
      </div>

      <div
        className="header-github-btn"
        onClick={() => {
          toggleLightMode();
        }}
      >
        <img
          style={{ height: 32 }}
          src={`${
            lightMode
              ? "/assets/light-mode-svgrepo-light.svg"
              : "/assets/light-mode-svgrepo-com.svg"
          }`}
          alt="light mode icon"
        />
      </div>

      <div className="header-menu-btn">
        <img
          style={{ height: 32 }}
          src={`${
            lightMode
              ? "/assets/menu-svgrepo-light.svg"
              : "/assets/menu-svgrepo-com.svg"
          }`}
          alt="menu icon"
          onClick={() => {
            openNavigatorMenu();
          }}
        />
      </div>
    </header>
  );
};

export default Header;
