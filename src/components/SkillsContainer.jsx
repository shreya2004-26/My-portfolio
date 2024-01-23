import React from "react";
import SkillsCard from "./SkillsCard";

const SkillsContainer = () => {
  return (
    <>
      <div className="skillsContainer">
        <h1>Skills</h1>
        <div className="skillsBox">
          <SkillsCard
            title={"Frontend Development"}
            skill={[
              "HTML",
              "CSS",
              "Tailwind CSS",
              "Bootstrap",
              "JavaScript",
              "React JS",
              "Next JS",
            ]}
          />
          <SkillsCard
            title={"Backend Development"}
            skill={[
              "Node JS",
              "Express JS",
              "PHP",
              "Django",
              "Mongo DB",
              "My SQL",
              "AWS",
            ]}
          />
          <SkillsCard
            title={"Programming"}
            skill={["Java", "Python", "C++", "C", "C#", "JavaScript", "Swift"]}
          />
        </div>
      </div>
    </>
  );
};

export default SkillsContainer;
