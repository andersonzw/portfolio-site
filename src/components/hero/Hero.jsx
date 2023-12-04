import React from "react";
import "./Hero.scss";
const Hero = () => {
  return (
    <section className=" innerWidth flexCenter paddings  hero-container">
      <div className=" hero-image-div">
        <img className="hero-image" src="/assets/placeholder-pp.jpg" alt="" />
      </div>
      <div className=" flexColCenter hero-description">
        <h1 className="section-title">Anderson Yang</h1>
        <p className="primary-text">
          Statistician/Data Analyst with a hobby in React frontend development
        </p>
      </div>
    </section>
  );
};

export default Hero;
