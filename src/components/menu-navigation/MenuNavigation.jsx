import React, { useContext } from "react";
import { MenuContext } from "../../utils/context/menu-context";
import "./MenuNavigation.scss";
import { ScrollContext } from "../../utils/context/scroll-context";
import { SlidingMenu } from "../../utils/animation-components/SlidingMenu";
import { ThemeContext } from "../../utils/context/theme-context";

const MenuNavigation = () => {
  const { closeNavigatorMenu } = useContext(MenuContext);
  const { lightMode, toggleLightMode } = useContext(ThemeContext);
  const { aboutRef, projectRef, contactRef, experienceRef, scrollToRef } =
    useContext(ScrollContext);
  const scrollAndClose = (ref) => {
    closeNavigatorMenu();
    scrollToRef(ref);
  };
  return (
    <>
      <SlidingMenu>
        <div
          className={`flexColCenter menu-navigation-container ${
            lightMode ? "light-theme" : null
          }`}
        >
          <div className="close-button" onClick={() => closeNavigatorMenu()}>
            <img src="/assets/cross-svgrepo-com.svg" alt="" />
          </div>
          <div className="navigation-links">
            <ul onClick={() => scrollAndClose(aboutRef)}>About</ul>
            <ul onClick={() => scrollAndClose(projectRef)}>Projects</ul>
            <ul onClick={() => scrollAndClose(experienceRef)}>Experience</ul>
            <ul onClick={() => scrollAndClose(contactRef)}>Contact</ul>

            <img
              onClick={() => toggleLightMode()}
              src="/assets/light-mode-svgrepo-com.svg"
              alt=""
            />
          </div>
        </div>
      </SlidingMenu>
    </>
  );
};

export default MenuNavigation;
