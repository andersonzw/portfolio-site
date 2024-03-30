import React, { useEffect, useState } from "react";

export const ThemeContext = React.createContext({
  lightMode: false,
  setLightMode: () => null,
});

export const ThemeProvider = ({ children }) => {
  const [lightMode, setLightMode] = useState(()=> {
    const storedMode = localStorage.getItem('storedMode')
    return storedMode === 'false' ? false : true
  });

  const toggleLightMode = () => {
    setLightMode((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem('storedMode', lightMode);
  }, [lightMode]);

  const value = { lightMode, toggleLightMode };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
