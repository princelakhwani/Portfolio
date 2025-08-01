import React, { useRef, useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "/src/Styles/Footer.css";

const Footer = () => {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const handleNavClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(path);
    }
  };

  return (
    <footer
      ref={footerRef}
      className={`footer ${isVisible ? "footer-visible" : "footer-hidden"}`}
    >
      <div className="footer-columns">
        <div className="footer-col">
          <p className="footer-label">/REACH ME</p>
          <a
            href="mailto:princelakhwani1608@gmail.com"
            className="footer-email"
          >
            princelakhwani1608@gmail.com
          </a>
        </div>

        <div className="footer-col">
          <p className="footer-label">/NAVIGATE TO</p>
          <span onClick={() => handleNavClick('/')} className="footer-link">Home</span>
          <span onClick={() => handleNavClick('/work')} className="footer-link">Selected works</span>
          <span onClick={() => handleNavClick('/about')} className="footer-link">Info</span>
        </div>

        <div className="footer-col">
          <p className="footer-label">/STALK ME :)</p>
          <a
            href="https://www.linkedin.com/in/princelakhwani"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <a
            href="/src/assets/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            download={true}
          >
            My resume
          </a>
        </div>
      </div>

      <Link to="/contact" smooth className="footer-cta-link">
        <div className="footer-cta-container">
          <h1 className="footer-cta-text">Let’s create together</h1>
          <div className="footer-cta-line"></div>
          <div className="footer-arrow-bubble">
            <span className="arrow">→</span>
          </div>
        </div>
      </Link>


      <div className="footer-bottom">
        <div className="footer-socials">
          <a
            href="https://linkedin.com/in/princelakhwani"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            LINKEDIN ↗
          </a>
          <a
            href="https://github.com/princelakhwani"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            GITHUB ↗
          </a>
          <a
            href="https://www.instagram.com/prince_lakhwani_06/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            INSTAGRAM ↗
          </a>
        </div>
        <p className="footer-credit">DEVELOP & BUILT WITH 💛 BY ME</p>
      </div>
    </footer>
  );
};

export default Footer;
