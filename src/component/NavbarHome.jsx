import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '/src/Styles/NavbarHome.css';

function NavbarHome() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false); // Scrolling down
      } else {
        setShowNavbar(true); // Scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { label: 'SELECTED WORKS', href: '#works', type: 'anchor' },
    { label: 'ABOUT ME', href: '/about', type: 'route' },
    { label: 'PLAYGROUND', href: '#playground', type: 'anchor' },
  ];

  return (
    <nav className={`navbar-home ${isHome ? 'navbar-white' : 'navbar-black'} ${showNavbar ? 'show' : 'hide'}`}>
      <div className="navbar-left">
        <span className="dot" />
        <Link to="/" className="name">
          {'PrinceLakhwani'.split('').map((char, i) => (
            <span className="letter-wrapper" style={{ '--i': i }} key={i}>
              <span className="white-letter">{char}</span>
              <span className="yellow-letter">{char}</span>
            </span>
          ))}
        </Link>
      </div>

      <ul className="navbar-center">
        {navLinks.map((link, index) => (
          <li key={index}>
            {link.type === 'route' ? (
              <Link to={link.href} className="navlink-animated">
                {link.label.split('').map((char, i) => (
                  <span className="letter-wrapper" style={{ '--i': i }} key={i}>
                    <span className="white-letter">{char}</span>
                    <span className="yellow-letter">{char}</span>
                  </span>
                ))}
              </Link>
            ) : (
              <a href={link.href} className="navlink-animated">
                {link.label.split('').map((char, i) => (
                  <span className="letter-wrapper" style={{ '--i': i }} key={i}>
                    <span className="white-letter">{char}</span>
                    <span className="yellow-letter">{char}</span>
                  </span>
                ))}
              </a>
            )}
          </li>
        ))}
      </ul>

      <div className="navbar-right">
        <a
          className="resume resume-animated"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          {'My Resume ↗'.split('').map((char, i) => (
            <span className="letter-wrapper" style={{ '--i': i }} key={i}>
              <span className="white-letter">{char}</span>
              <span className="yellow-letter">{char}</span>
            </span>
          ))}
        </a>
        <a
          className={`cta-button work-animated ${!isHome ? 'work-other-page' : ''}`}
          href="#contact"
        >
          {'WORK WITH ME ↗'.split('').map((char, i) => (
            <span className="letter-wrapper" style={{ '--i': i }} key={i}>
              <span className="white-letter">{char}</span>
              <span className="yellow-letter">{char}</span>
            </span>
          ))}
        </a>
      </div>
    </nav>
  );
}

export default NavbarHome;
