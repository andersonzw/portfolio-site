import React, { useCallback, useRef } from "react";

export const ScrollContext = React.createContext({
  scrollTo: (id) => {},
});

export const ScrollProvider = ({ children }) => {
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const experienceRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const value = {
    aboutRef,
    projectRef,
    contactRef,
    experienceRef,
    scrollToRef,
  };
  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  );
};
