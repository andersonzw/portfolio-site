import "./utils/_theme.module.scss";

import Loader from "./components/loader/Loader";
import { useContext, useEffect, useState } from "react";

import MenuNavigation from "./components/menu-navigation/MenuNavigation";
import Header from "./page-sections/header/Header";
import About from "./page-sections/about/About";
import Projects from "./page-sections/projects/Projects";
import Experience from "./page-sections/experience/Experience";
import Contact from "./page-sections/contact/Contact";
import Footer from "./page-sections/footer/Footer";
import Hero from "./page-sections/hero/Hero";
import { ThemeContext } from "./utils/context/theme-context";

function App() {
  const [loadPage, setLoadPage] = useState(false);
  const [fadeOut] = useState(false);
  const { lightMode } = useContext(ThemeContext);
  useEffect(() => {
    console.log(lightMode);
  }, [lightMode]);

  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setLoadPage(false);
      return () => clearTimeout(animationTimer);
    }, 3500);

    return () => clearTimeout(animationTimer);
  }, []);
  return (
    <>
      {loadPage ? (
        <Loader className={`${fadeOut ? "fade-out" : ""}`} />
      ) : (
        <div className={`App ${lightMode ? "light-theme" : null}`}>
          <MenuNavigation lightMode={lightMode} />
          <Header lightMode={lightMode} />
          <Hero lightMode={lightMode} />
          <About lightMode={lightMode} />
          <Projects lightMode={lightMode} />
          <Experience lightMode={lightMode} />
          <Contact lightMode={lightMode} />
          <Footer lightMode={lightMode} />
        </div>
      )}
    </>
  );
}

export default App;
