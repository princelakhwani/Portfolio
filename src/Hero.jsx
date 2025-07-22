import React from 'react';
import './Hero.css';

const Hero = () => (
  <section className="hero-section">
    <div className="hero-left">
      <div className="dot-label">
        <span className="dot" />
        <span className="dot-text">MOSTLY 2020-2023</span>
      </div>
      <h1 className="hero-title">
        Designer,<br />
        <span className="highlight">skill collector,</span><br />
        harmony hunter.
        <span className="emoji">🎵</span>
        <span className="sticky-note">PRODUCT</span>
      </h1>
      <div className="hero-actions">
        <button className="play-btn">
          <span className="play-icon">▶</span>
        </button>
        <span className="play-label">PLAY PROJECT REELS</span>
      </div>
    </div>
    <div className="hero-right">
      <img src="https://via.placeholder.com/350x250?text=Placeholder+Image" alt="Placeholder" className="hero-image" />
      <span className="available-label">AVAILABLE FOR<br />CONTRACTS & COLLABS</span>
    </div>
  </section>
);

export default Hero; 