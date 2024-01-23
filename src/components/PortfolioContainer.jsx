import React from "react";
import Image1 from "../assests/images/kbc-gameImage.png";
import Image2 from "../assests/images/chat-appImage.png";
import Image3 from "../assests/images/quiz-websiteImage.png";
import PortfolioCard from "./PortfolioCard";
const PortfolioContainer = () => {
  return (
    <>
      <div className="portfolio">
        <h1>My Portfolio</h1>
        <div className="portfolioContent">
          <PortfolioCard imgSrc={Image1} heading="KBC Game" />
          <PortfolioCard imgSrc={Image2} heading="Chat Application" />
          <PortfolioCard imgSrc={Image3} heading="Quiz Website" />
        </div>
      </div>
    </>
  );
};

export default PortfolioContainer;
