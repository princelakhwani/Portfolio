import React from 'react';
import '/src/Styles/NavbarHome.css';

function NavbarHome() {
  return (
    <nav className="navbar-home">
      <div className="navbar-left">
        <span className="dot" />
        <span className="name">
          {'PrinceLakhwani'.split('').map((char, i) => (
            <span className="letter-wrapper" style={{ '--i': i }} key={i}>
              <span className="white-letter">{char}</span>
              <span className="yellow-letter">{char}</span>
            </span>
          ))}
        </span>
      </div>

      <ul className="navbar-center">
        {[
          { label: 'SELECTED WORKS', href: '#works' },
          { label: 'ABOUT ME', href: '#about' },
          { label: 'PLAYGROUND', href: '#playground' },
        ].map((link, index) => (
          <li key={index}>
            <a href={link.href} className="navlink-animated">
              {link.label.split('').map((char, i) => (
                <span className="letter-wrapper" style={{ '--i': i }} key={i}>
                  <span className="white-letter">{char}</span>
                  <span className="yellow-letter">{char}</span>
                </span>
              ))}
            </a>
          </li>
        ))}
      </ul>

      <div className="navbar-right">
        <a className="resume resume-animated" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          {'My Resume ↗'.split('').map((char, i) => (
            <span className="letter-wrapper" style={{ '--i': i }} key={i}>
              <span className="white-letter">{char}</span>
              <span className="yellow-letter">{char}</span>
            </span>
          ))}
        </a>
        <a className="cta-button" href="#contact">
          WORK WITH ME ↗
        </a>
      </div>
    </nav>
  );
}

export default NavbarHome;