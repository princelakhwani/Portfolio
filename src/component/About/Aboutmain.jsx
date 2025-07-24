// src/component/Aboutmain.jsx
import React from "react";
import "/src/Styles/About/Aboutmain.css";
import profileImage from "/src/assets/prince.png"; // Replace with your actual image path

const Aboutmain = () => {
  return (
    <section className="about-main">
      <div className="about-left">
        <div className="image-wrapper">
          <img src={profileImage} alt="Profile" className="about-img" />
          <div className="tape"></div>
          <div className="sticker">HEYYYYYYYY!</div>
        </div>
      </div>

      <div className="about-right">
        <p className="section-label">/ ABOUT ME</p>
        <p className="intro-text">
          I’m a product designer with 5 years of industry experience, but my design journey began much earlier. As a child, I built imaginative creations with Legos, sparking my lifelong curiosity for design and problem-solving. At 13, I wrote my first line of code, a milestone that paved the way for a foundation in frontend development. This coding background not only shaped my transition into design but also ensures seamless handoffs with developers and mastery of no-code tools like Webflow.
        </p>

        <div className="tldr-section">
          <p className="tldr-label">TL;DR</p>
          <div className="tldr-line">
            <span className="tldr-bar" />
            <p><em><strong>5 years industry experience.</strong></em></p>
          </div>
          <div className="tldr-line">
            <span className="tldr-bar" />
            <p><em><strong>First line of code at 13.</strong></em></p>
          </div>
        </div>

        <p className="story-text">
          My love for interactive websites and motion design eventually led me into UI/UX design. I started out designing interfaces and coding them before fully embracing a design-first approach. Over the years, I’ve explored various design disciplines, starting with logo creation and branding projects to creating marketing collaterals while volunteering in student organizations like AIESEC, where I grew to lead marketing teams. A standout moment was running a campaign that converted 65% of registered delegates into paid attendees in less than a month—a testament to teamwork, strategy, and creative execution.
        </p>
      </div>
    </section>
  );
};

export default Aboutmain;
