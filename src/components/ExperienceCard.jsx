import React from "react";

const ExperienceCard = ({ title, name }) => {
  return (
    <>
      <div className="exp">
        {title} <br />
        <span>{name}</span>
      </div>
    </>
  );
};

export default ExperienceCard;
