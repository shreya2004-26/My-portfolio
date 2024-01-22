import React from 'react'
import Header from './components/Header'
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import AboutContainer from './components/AboutContainer'
import SkillsContainer from './components/SkillsContainer'
import PortfolioContainer from './components/PortfolioContainer'
import ServicesContainer from './components/ServicesContainer'
import ContactForm from './components/ContactForm'
const App = () => {
  document.getElementById("title").innerText="Home | Shreya Singh"
  return (
    <>
      <Header />
      <Hero />
      <AboutContainer />
      <SkillsContainer />
      <ServicesContainer/>
      <PortfolioContainer/>
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default App