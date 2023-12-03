import React from "react";
import "./Hero.scss";
const Hero = () => {
  return (
    <section className=" innerWidth flexCenter paddings  hero-container">
      <div className=" hero-image-div">
        <img className="hero-image" src="/assets/placeholder-pp.jpg" alt="" />
      </div>
      <div className=" hero-description">
        <h1>Anderson Yang</h1>Statistician/Data Analyst with a hobby in React frontend development
      </div>
    </section>
  );
};

export default Hero;
