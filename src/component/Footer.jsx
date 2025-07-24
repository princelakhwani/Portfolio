import React from "react";
import "/src/Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-col">
          <p className="footer-label">/REACH ME</p>
          <p className="footer-email">timothy.ogundipe@gmail.com</p>
        </div>
        <div className="footer-col">
          <p className="footer-label">/NAVIGATE TO</p>
          <p>Home</p>
          <p>Selected works</p>
          <p>Info</p>
          <p>Playground</p>
        </div>
        <div className="footer-col">
          <p className="footer-label">/STALK ME :)</p>
          <p>LinkedIn</p>
          <p>My resume</p>
        </div>
      </div>

      {/* Full clickable CTA section */}
      <a href="#contact" className="footer-cta-link">
        <div className="footer-cta-container">
          <h1 className="footer-cta-text">Let’s create together</h1>
          <div className="footer-cta-line"></div>
          <div className="footer-arrow-bubble">
            <span className="arrow">→</span>
          </div>
        </div>
      </a>

      <div className="footer-bottom">
        <div className="footer-socials">
          <span>TWITTER ↗</span>
          <span>BEHANCE ↗</span>
          <span>LINKEDIN ↗</span>
        </div>
        <p className="footer-credit">DESIGNED & BUILT WITH 💛 BY ME</p>
      </div>
    </footer>
  );
};

export default Footer;
