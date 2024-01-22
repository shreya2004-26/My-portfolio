import React from "react";
import Header from "../components/Header";
import ServicesContainer from "../components/ServicesContainer";
import Footer from "../components/Footer";
const Services = () => {
  document.getElementById("title").innerText="Services | Shreya Singh"
  return (
    <>
      <Header />
      <ServicesContainer />
      <Footer />
    </>
  );
};

export default Services;
