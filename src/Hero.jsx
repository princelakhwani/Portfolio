import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <section className={`hero-section${fadeIn ? ' fade-in-bottom' : ''}`}>
      <div className="hero-left">
        <div className="dot-label">
          {/* <span className="dot" /> */}
          {/* <span className="dot-text">MOSTLY 2020-2023</span> */}
        </div>
        <h1 className="hero-title">
          <span
            className="fade-in-line"
            style={{ animationDelay: fadeIn ? '0.1s' : '0s' }}
          >
            Developer,
          </span>
          <br />
          <span
            className="fade-in-line highlight"
            style={{ animationDelay: fadeIn ? '0.5s' : '0s' }}
          >
            skill collector,
          </span>
          <br />
          <span
            className="fade-in-line"
            style={{ animationDelay: fadeIn ? '0.9s' : '0s' }}
          >
            AI enthusiast.
            <span className="emoji">🤖</span>
            <span className="sticky-note">mindset</span>
          </span>
        </h1>
        <div className="hero-actions">
          <button className="play-btn">
            <span className="play-icon">▶</span>
          </button>
          <span className="play-label">PLAY PROJECT REELS</span>
        </div>
      </div>
      <span className="hero-mostly-corner">MOSTLY 2023-2025</span>
      <span className="hero-available-corner">AVAILABLE FOR CONTRACTS & COLLABS</span>
      {/* <div className="hero-right">
        <img src="https://via.placeholder.com/350x250?text=Placeholder+Image" alt="Placeholder" className="hero-image" />
        <span className="available-label">AVAILABLE FOR<br />CONTRACTS & COLLABS</span>
      </div> */}
    </section>
  );
};

export default Hero; 