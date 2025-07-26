// src/component/Aboutmain.jsx
import React from "react";
import "/src/Styles/About/Aboutmain.css";
import profileImage from "/src/assets/prince.png";

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
        <div className="about-content-wrapper">
          <p className="section-label">/ ABOUT ME</p>

          <p className="intro-text">
            I’m a fullstack developer and creative technologist passionate about crafting smooth, responsive, and visually engaging web experiences.
            I specialize in clean React code, intuitive UI/UX, and seamless page interactions.
            Beyond frontend, I’ve completed a course in Artificial Intelligence and now work as an AI engineer.
            I'm currently learning Machine Learning to deepen my understanding of intelligent systems.
            I enjoy blending design, code, and logic to build meaningful digital products.
            For me, technology is not just a tool — it's a way to tell stories and solve problems. 
          </p>

          <div className="tldr-section">
            <p className="tldr-label">TL;DR</p>
            <div className="tldr-line">
              <span className="tldr-bar" />
              <p><em><strong>FullStack Developer & AI Engineer</strong></em></p>
            </div>
            <div className="tldr-line">
              <span className="tldr-bar" />
              <p><em><strong>First line of code at 16.</strong></em></p>
            </div>
          </div>

          <p className="story-text">
            My work blends structure with creativity — from collaborative projects like hackathons website and student-led platforms to personal experiments in motion and storytelling. I thrive on learning new tools, pushing the boundaries of interaction, and creating experiences that connect design, code, and people.
          </p>

          <div className="tldr-section">
            <p className="tldr-label">TL;DR</p>
            <div className="tldr-line">
              <span className="tldr-bar" />
              <p><em><strong>College journey began in 2023</strong></em></p>
            </div>
            <div className="tldr-line">
              <span className="tldr-bar" />
              <p><em><strong>Manipal University Jaipur</strong></em></p>
            </div>
          </div>

          <p className="story-text">
            My college journey began in 2023 at Manipal University Jaipur, where I stepped into the world of technology with a blend of curiosity and determination. Early on, I found myself drawn to frontend development, experimenting with HTML, CSS, JavaScript, and React to bring interactive ideas to life. Alongside academics, I actively engaged in student clubs and technical communities, where I learned the importance of teamwork, communication, and initiative through hands-on event organizing and collaborative coding projects.
          </p>

          <div className="tldr-section">
            <p className="tldr-label">TL;DR</p>
            <div className="tldr-line">
              <span className="tldr-bar" />
              <p><em><strong>Technical Head - InSell</strong></em></p>
            </div>
            <div className="tldr-line">
              <span className="tldr-bar" />
              <p><em><strong>Tech Team Member and Student Cordinator - IIC </strong></em></p>
            </div>
          </div>

          <p className="story-text">
            As I continued to grow, one of the turning points was contributing as a tech team member and student coordinator for the International Innovation Challenge — a 36-hour hackathon where I helped design and build the official event website.
          </p>

          <p className="story-text">
            This experience, along with several others, led to my selection as the Technical Head of the Junior Board in INSELL, where I worked closely with the Director of International Collaboration. These leadership roles helped me sharpen my skills in design, development, and collaboration while also fueling my passion for full-stack projects using tools like Vite, Firebase, MongoDB, and Webflow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutmain;