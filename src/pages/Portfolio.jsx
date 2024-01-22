import React from "react";
import Header from "../components/Header";
import PortfolioContainer from "../components/PortfolioContainer";
import Footer from "../components/Footer";

const Portfolio = () => {
  document.getElementById("title").innerText="Portfolio | Shreya Singh"
  return (
    <>
      <Header />
      <PortfolioContainer />
      <Footer />
    </>
  );
};

export default Portfolio;
