import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import "./utils/_theme.module.scss";
import "./App.scss";
import Loader from "./components/loader/Loader";
import { useEffect, useState } from "react";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import MenuNavigation from "./components/menu-navigation/MenuNavigation";

function App() {
  const [loadPage, setLoadPage] = useState(false);
  const [fadeOut] = useState(false);
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
