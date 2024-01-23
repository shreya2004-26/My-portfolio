import React from "react";

const PortfolioCard = ({ imgSrc, heading }) => {
  return (
    <>
      <div className="portfolioBox">
        <img src={imgSrc} alt="" />
        <h3>{heading}</h3>
        <p>Live Demo</p>
      </div>
    </>
  );
};

export default PortfolioCard;
