import React from "react";
import Header from "../components/Header";
import AboutContainer from "../components/AboutContainer";
import SkillsContainer from "../components/SkillsContainer";
import Footer from "../components/Footer";

const About = () => {
  //dom manipuliation
  //element select
  const elem = document.getElementById("title");
  //change the text of element
  elem.innerText = "About | Shreya Singh";

  return (
    <>
      <Header />
      <AboutContainer />
      <SkillsContainer />
      <Footer />
    </>
  );
};

export default About;
