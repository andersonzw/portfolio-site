import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import "./utils/_theme.module.scss";
import "./App.scss";
import Arrow from "./components/arrow/Arrow";
import Loader from "./components/loader/Loader";
import { useEffect, useState } from "react";

function App() {
  const [loadPage, setLoadPage] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
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
        <div className="App">
          <Header />
          <Hero />
          <Arrow />
          <About />
          <Projects />
          <Experience />
        </div>
      )}
    </>
  );
}

export default App;
