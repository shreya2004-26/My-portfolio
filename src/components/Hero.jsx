import React from "react";
import Image from "../assests/images/background1.jpeg";
import resume from "../assests/Shreya's Resume.pdf";
import htmlLogo from "../assests/images/htmllogo.png";
import cssLogo from "../assests/images/csslogo.png";
import javaScrptLogo from "../assests/images/jslogo.png";
import TouchWithMe from "./TouchWithMe";

const Hero = () => {
  return (
    <>
      <div className="heroContainer">
        <div className="heroContainer1">
          <div className="heroContainer11">
            <h3>Welcome to my world</h3>
            <h1>Hi, I'm Shreya Singh</h1>
            <h3>and I am a Web Developer</h3>
          </div>
          <div className="touchWithMe">
              <TouchWithMe />
          
            <div className="twm">
              <h4>Best skills on</h4>
              <div className="imgBox">
                <img src={htmlLogo} alt="html logo" className="icon" />
                <img src={cssLogo} alt="css logo" className="icon" />
                <img src={javaScrptLogo} alt="js logo" className="icon" />
              </div>
            </div>
          </div>
          <div className="resume">
            <a href={resume} download="Shreya's Resume">
              Download Resume
            </a>
          </div>
        </div>
        <div className="heroContainer2">
          <img src={Image} alt="background image" className="bgImg" />
        </div>
      </div>
    </>
  );
};

export default Hero;
