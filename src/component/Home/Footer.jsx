// Footer.jsx
import React from "react";
import "/src/Styles/Home/Footer.css";
import spotifyIcon from "/src/assets/spotify-white-icon.svg"; // adjust path

function Footer() {
  return (
    <footer className="custom-footer">
      <div className="footer-left">
        <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer">
          VIMEO ↗
        </a>
        <a href="https://are.na" target="_blank" rel="noopener noreferrer">
          ARENA ↗
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          LINKEDIN ↗
        </a>
      </div>
      <div className="footer-right">
        <img src={spotifyIcon} alt="Spotify" className="spotify-icon" />
        <span>LISTEN</span>
      </div>
    </footer>
  );
}

export default Footer;
