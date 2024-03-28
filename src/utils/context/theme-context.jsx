import React, { useState } from "react";

export const ThemeContext = React.createContext({
  lightMode: false,
  setLightMode: () => null,
});

export const ThemeProvider = ({ children }) => {
  const [lightMode, setLightMode] = useState(false);
  const toggleLightMode = () => {
    setLightMode((prev) => !prev);
  };
  const value = { lightMode, toggleLightMode };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
