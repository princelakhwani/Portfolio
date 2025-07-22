import React from 'react';
import '/src/Styles/NavbarHome.css'; // optional for styling

function NavbarHome() {
  return (
    <nav className="navbar-home">
      <div className="logo">My Portfolio</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li> {/* Optional: Future use */}
        <li><a href="/projects">Projects</a></li>
      </ul>
    </nav>
  );
}

export default NavbarHome;