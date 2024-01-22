import React from "react";
import image from "../assests/images/background1.jpeg";
const AboutContainer = () => {
  return (
    <>
      <div className="about">
        <h1>About Me</h1>
        <div className="about1">
          <img src={image} alt="Image" className="aboutImg" />
          <div className="about11">
            <div className="about111">
              <div className="exp">
                Experience <br />
                <span>1+ years experience</span>
              </div>
              <div className="exp">
                Projects <br />
                <span>20+ Projects</span>
              </div>
              <div className="exp">
                Support <br />
                <span>Online 24/7</span>
              </div>
            </div>
            <div className="about112">
              <p>
                I am an enthusiastic developer who love exploring and trying
                hands at different tech stacks.I have a strong interest in web
                development and problem-solving . I love to work on new
                challenges in this field,building attractive interactive sites
                excite me and learning how to protect them excites me even more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContainer;
