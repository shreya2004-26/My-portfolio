import React from "react";

const SkillsContainer = () => {
  return (
    <>
      <div className="skillsContainer">
        <h1>Skills</h1>
        <div className="skillsBox">
          <div className="skill">
            <h3>Frontend Development</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>React JS</li>
              <li>Next JS</li>
            </ul>
          </div>
          <div className="skill">
            <h3>Backend Development</h3>
            <ul>
              <li>Node JS</li>
              <li>Express JS</li>
              <li>PHP</li>
              <li>Django</li>
              <li>Mongo DB</li>
              <li>My SQL</li>
              <li>AWS</li>
            </ul>
          </div>
          <div className="skill">
            <h3>Programming</h3>
            <ul>
              <li>Java</li>
              <li>Python</li>
              <li>C++</li>
              <li>C</li>
              <li>C#</li>
              <li>JavaScript</li>
              <li>Swift</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsContainer;
