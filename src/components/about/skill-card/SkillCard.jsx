import React from "react";
const SkillCard = ({ skill }) => {
  const { svg, tool } = skill;
  return (
    <div className="flexColCenter skill-card">
      <img className="skill-svg" src={svg} alt="Icon"/>
      {tool}
    </div>
  );
};

export default SkillCard;
