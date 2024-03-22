import React from "react";
import "./Hero.scss";
import Arrow from "../arrow/Arrow";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className=" flexCenter  hero-container">
        <div className=" hero-image-div">
          <img className="hero-image" src="/assets/placeholder-pp.jpg" alt="" />
        </div>
        <div className=" flexColCenter hero-description">
          <h1 className="section-title">Anderson Yang</h1>
          <p className="coloured primary-text">
            Data Scientist & Frontend Dev
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
