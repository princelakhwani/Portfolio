import React from 'react';
import '/src/Styles/NavbarHome.css';

function NavbarHome() {
  return (
    <nav className="navbar-home">
      <div className="navbar-left">
        <span className="dot" /> <span className="name">Prince Lakhwani</span>
      </div>

      <ul className="navbar-center">
        <li><a href="#works">SELECTED WORKS</a></li>
        <li><a href="#about">ABOUT ME</a></li>
        <li><a href="#playground">PLAYGROUND</a></li>
      </ul>

      <div className="navbar-right">
        <a className="resume" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          My Resume ↗
        </a>
        <a className="cta-button" href="#contact">
          WORK WITH ME ↗
        </a>
      </div>
    </nav>
  );
}

export default NavbarHome;
