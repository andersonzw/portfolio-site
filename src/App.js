import "./utils/_theme.module.scss";
import "./App.scss";
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
  const [loadPage, setLoadPage] = useState(true);
  const [fadeOut] = useState(false);
  const { lightMode } = useContext(ThemeContext);

  useEffect(() => {
    document.body.classList = (`${lightMode ? "light-theme" : ''}`);
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
          <MenuNavigation/>
          <Header />
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
          <Footer/>
        </div>
      )}
    </>
  );
}

export default App;
