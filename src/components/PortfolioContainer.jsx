import React from "react";
import Image1 from "../assests/images/kbc-gameImage.png";
import Image2 from "../assests/images/chat-appImage.png";
import Image3 from "../assests/images/quiz-websiteImage.png";
const PortfolioContainer = () => {
  return (
    <>
      <div className="portfolio">
        <h1>My Portfolio</h1>
        <div className="portfolioContent">
          <div className="portfolioBox">
            <img src={Image1} alt="" />
            <h3>KBC Game</h3>
            <p>Live Demo</p>
          </div>
          <div className="portfolioBox">
            <img src={Image2} alt="" />
            <h3>Chat Application</h3>
            <p>Live Demo</p>
          </div>
          <div className="portfolioBox">
            <img src={Image3} alt="" />
            <h3>Quiz Website</h3>
            <p>Live Demo</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioContainer;
