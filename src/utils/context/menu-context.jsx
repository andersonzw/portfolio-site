import React, { useState } from "react";

export const MenuContext = React.createContext({
  openMenu: false,
  setOpenMenu: () => null,
});

export const MenuProvider = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const openNavigatorMenu = () => {
    setOpenMenu(true);
    console.log("menu opened");
  };

  const closeNavigatorMenu = () => {
    setOpenMenu(false);
  };

  const value = { openNavigatorMenu, closeNavigatorMenu, openMenu };
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
