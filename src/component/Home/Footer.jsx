import React from "react";
import "/src/Styles/Home/Footer.css";
import spotifyIcon from "/src/assets/spotify-white-icon.svg"; // adjust path

function AnimatedText({ text, className = "" }) {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <span className="letter-wrapper" style={{ "--i": i }} key={i}>
          <span className="white-letter">{char}</span>
          <span className="yellow-letter">{char}</span>
        </span>
      ))}
    </span>
  );
}

function Footer() {
  return (
    <footer className="custom-footer">
      <div className="footer-left">
        <a
          href="https://www.linkedin.com/in/princelakhwani/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link-animated"
        >
          <AnimatedText text="LINKEDIN ↗" />
        </a>
        <a
          href="https://github.com/princelakhwani"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link-animated"
        >
          <AnimatedText text="Github ↗" />
        </a>
        <a
          href="https://www.instagram.com/prince_lakhwani_06/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link-animated"
        >
          <AnimatedText text="INSTAGRAM ↗" />
        </a>
      </div>
      <div className="footer-right">
        <a href="https://open.spotify.com/" className="footer-link-animated listen-button">
          <img src={spotifyIcon} alt="Spotify" className="spotify-icon" />
          <AnimatedText text="LISTEN" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
