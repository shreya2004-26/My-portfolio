import React from "react";
import Header from "../components/Header";
// import TouchWithMe from "../components/TouchWithMe";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Contact = () => {
  //dom manipuliation
  //element select
  const elem = document.getElementById("title");
  //change the text of element
  elem.innerText = "Contact | Shreya Singh";
  return (
    <>
      <Header />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
