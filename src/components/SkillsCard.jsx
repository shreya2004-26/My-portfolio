import React from "react";

const SkillsCard = ({ title, skill }) => {
  return (
    <>
      <div className="skill">
        <h3>{title}</h3>
        <ul>
          {skill.map((curr, index) => {
            return <li key={index}>{curr}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default SkillsCard;
