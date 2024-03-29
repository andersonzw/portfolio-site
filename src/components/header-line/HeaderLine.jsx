import React, { useContext } from "react";
import { ThemeContext } from "../../utils/context/theme-context";
import "./HeaderLine.scss"
const HeaderLine = () => {
  const { lightMode } = useContext(ThemeContext);
  return <div className={`header-line ${lightMode ? "light-theme" : null}`}></div>;
};

export default HeaderLine;
