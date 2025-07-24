import React from "react";
import "/src/Styles/About/About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          Welcome to our website! We are passionate developers, designers, and innovators
          dedicated to building solutions that make a difference. Whether it's in AI/ML,
          web development, or mobile apps, our mission is to deliver high-quality, scalable,
          and impactful digital experiences.
        </p>
        <div className="about-cards">
          <div className="about-card">
            <h3>👨‍💻 Web Development</h3>
            <p>We build responsive and high-performing websites using modern tech stacks.</p>
          </div>
          <div className="about-card">
            <h3>🤖 AI & ML</h3>
            <p>We apply AI/ML models to solve real-world problems and build intelligent systems.</p>
          </div>
          <div className="about-card">
            <h3>📱 Mobile Apps</h3>
            <p>We create smooth, cross-platform mobile experiences for iOS and Android.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
