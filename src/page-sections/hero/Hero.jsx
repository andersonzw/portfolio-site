import React, { useEffect } from "react";
import "./Hero.scss";
import TypeReveal from "../../utils/animation-components/TypeReveal";
import Arrow from "../../components/arrow/Arrow";

const Hero = ({lightMode}) => {
  return (
    <section className="hero-section">
      <div className=" flexCenter  hero-container">
        <div className=" hero-image-div">
          <img className="hero-image" src="/assets/placeholder-pp.jpg" alt="" />
        </div>
        <div className=" flexColCenter hero-description">
          <h1 className={`section-title ${lightMode ? "light-theme" : null}`}>Front-End React Developer</h1>
          <TypeReveal>
            <p className={`coloured secondary-text ${lightMode ? "light-theme" : null}`}>
              I'm Anderson, a Data Scientist by day 🌅 and self-taught React
              developer by night 🌙 based in Melbourne.
            </p>
          </TypeReveal>
        </div>
      </div>
      <Arrow/>
    </section>
  );
};

export default Hero;
