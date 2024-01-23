import React from "react";
import image from "../assests/images/background1.jpeg";
import ExperienceCard from "./ExperienceCard";
const AboutContainer = () => {
  return (
    <>
      <div className="about">
        <h1>About Me</h1>
        <div className="about1">
          <img src={image} alt="Image" className="aboutImg" />
          <div className="about11">
            <div className="about111">
              <ExperienceCard
                title={"Experience"}
                name={"1+ years experience"}
              />
              <ExperienceCard title={"Projects"} name={"10+ Projects"} />
              <ExperienceCard title={"Support"} name={"Online 24/7"} />
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
