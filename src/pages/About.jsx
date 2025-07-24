// src/pages/About.jsx
import React from "react";
import AboutHero from "/src/component/About/Abouthero.jsx"; // Adjust path if needed
import Aboutmain from "../component/About/Aboutmain";
import Services from "../component/About/Service";

const About = () => {
  return (
    <div>
      <AboutHero />
      <Aboutmain />
      <Services />
    </div>
  );
};

export default About;
