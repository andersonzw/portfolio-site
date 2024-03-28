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
    <header className="paddings flexCenter header-container">
      <div className="flexCenter header-logo">AY</div>
      <div className="flexCenter header-navigator">
        {/* <p onClick={() => scrollToRef(aboutRef)}>About</p> */}
        <p onClick={() => scrollToRef(projectRef)}>Projects</p>
        <p onClick={() => scrollToRef(experienceRef)}>Experiences</p>
        <p onClick={() => scrollToRef(contactRef)}>Contact</p>
      </div>
      <div
        onClick={() => {
          toggleLightMode();
          console.log(lightMode);
        }}
      >
        lightmode
      </div>
      <div className="header-github-btn">
        <img
          style={{ height: 32 }}
          src="/assets/github-142-svgrepo-com (2).svg"
          alt="github icon"
        />
      </div>
      <div className="header-menu-btn">
        <img
          style={{ height: 32 }}
          src="/assets/menu-svgrepo-com.svg"
          alt="github icon"
          onClick={() => {
            openNavigatorMenu();
          }}
        />
      </div>
    </header>
  );
};

export default Header;
