import React from "react";
import Header from "./Components/header/Header.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Arrow from "./Components/Up_arrow/Arrow.jsx";
import About from "./Components/About/About.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import Portfolio from "./Components/Portfolio/Portfolio.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/footer/Footer.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Arrow />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
