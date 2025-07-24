// src/pages/About.jsx
import React from "react";
import AboutHero from "/src/component/About/Abouthero.jsx"; // Adjust path if needed
import Aboutmain from "../component/About/Aboutmain";
import Services from "../component/About/Service";
import MyExperience from "../component/About/MyExperience";

const About = () => {
  return (
    <div>
      <AboutHero />
      <Aboutmain />
      <Services />
      <MyExperience />
    </div>
  );
};

export default About;
