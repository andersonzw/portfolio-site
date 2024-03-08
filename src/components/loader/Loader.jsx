import React from "react";
import "./Loader.scss";

const Loader = ({ className }) => {
  return (
    <div className={`loader ${className}`}>
      <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" className="stroke-svg">
        <text
          fill="transparent"
          stroke="white"
          strokeWidth="2"
          className="text-fill"
          x="50%"
          y="50%"
          textAnchor="middle"
          strokeLinecap="round"
          dominantBaseline="middle"
        >
          AY
        </text>
      </svg>
    </div>
  );
};

export default Loader;
