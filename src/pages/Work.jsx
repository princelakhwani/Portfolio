// src/pages/Work.jsx
import React from 'react';
import '/src/Styles/Work/Work.css';
import AmanImg from '/src/assets/Aman.jpg';
import doctorlogin from '/src/assets/work.jpeg';
import Footer from '../component/Footer'; // ✅ Import Footer
import folder from '/src/assets/folder.png';

const workItems = [
  {
    title: 'AmanStar Website',
    description: 'A full-stack product management website built using React and Node.js with dynamic image uploads.',
    link: 'https://amanstar.example.com',
    image: AmanImg,
  },
  {
    title: 'Hackathon Site',
    description: '36-hour Hackathon event registration and details website hosted on mujiic.com.',
    link: 'https://mujiic.com',
    image: doctorlogin,
  },
  {
    title: 'Doctor Login App',
    description: 'Doctor login portal with Firebase authentication and custom validation.',
    link: '/doctor-login',
    image: doctorlogin,
  },
  {
    title: 'Doctor Login App',
    description: 'Doctor login portal with Firebase authentication and custom validation.',
    link: '/doctor-login',
    image: doctorlogin,
  },
  {
    title: 'Doctor Login App',
    description: 'Doctor login portal with Firebase authentication and custom validation.',
    link: '/doctor-login',
    image: doctorlogin,
  },
  {
    title: 'Doctor Login App',
    description: 'Doctor login portal with Firebase authentication and custom validation.',
    link: '/doctor-login',
    image: doctorlogin,
  },
];

const Work = () => {
  return (
    <>
      <section className="selected-works">
        <div className="header-content">
          <h1 className="main-heading">Selected</h1>
          <h1 className="main-heading">Works</h1>
          <div className="tag">FROM 2020 - NOW</div>
        </div>

        <div className="intro-section">
          <img src={folder} alt="Folder Icon" className="folder-icon" />
          <p className="description">
            Projects cutting across product and visual design and an additional section, playground, that
            contains shots from my exploration into my other design passions.
          </p>
        </div>

        <div className="arrow-wrapper">
          <span className="material-icons scroll-arrow">arrow_downward</span>
        </div>

        <div className="intro-divider" />

        <div className="work-list">
          {/* Full-width project 1 */}
          <div className="project-block" key={0}>
            <div className="image-container">
              <img src={workItems[0].image} alt={workItems[0].title} className="project-image" />
            </div>
            <div className="project-info">
              <div className="project-meta">
                <span className="project-label">{workItems[0].label}</span>
                <span className="project-year">{workItems[0].year}</span>
              </div>
              <h2 className="project-title">{workItems[0].title}</h2>
              <a href={workItems[0].link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project ↗
              </a>
            </div>
            <hr className="project-divider" />
          </div>

          {/* Side-by-side projects 2 & 3 */}
          <div className="project-row">
            {[1, 2].map((i) => (
              <div className="project-half" key={i}>
                <div className="image-container">
                  <img src={workItems[i].image} alt={workItems[i].title} className="project-image" />
                </div>
                <div className="project-info">
                  <div className="project-meta">
                    <span className="project-label">{workItems[i].label}</span>
                    <span className="project-year">{workItems[i].year}</span>
                  </div>
                  <h2 className="project-title">{workItems[i].title}</h2>
                  <a href={workItems[i].link} className="project-link" target="_blank" rel="noopener noreferrer">
                    View Project ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
          <hr className="project-divider" />

          {/* Full-width project 4 */}
          <div className="project-block" key={3}>
            <div className="image-container">
              <img src={workItems[3].image} alt={workItems[3].title} className="project-image" />
            </div>
            <div className="project-info">
              <div className="project-meta">
                <span className="project-label">{workItems[3].label}</span>
                <span className="project-year">{workItems[3].year}</span>
              </div>
              <h2 className="project-title">{workItems[3].title}</h2>
              <a href={workItems[3].link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project ↗
              </a>
            </div>
            <hr className="project-divider" />
          </div>

          {/* Side-by-side projects 5 & 6 */}
          <div className="project-row">
            {[4, 5].map((i) => (
              <div className="project-half" key={i}>
                <div className="image-container">
                  <img src={workItems[i].image} alt={workItems[i].title} className="project-image" />
                </div>
                <div className="project-info">
                  <div className="project-meta">
                    <span className="project-label">{workItems[i].label}</span>
                    <span className="project-year">{workItems[i].year}</span>
                  </div>
                  <h2 className="project-title">{workItems[i].title}</h2>
                  <a href={workItems[i].link} className="project-link" target="_blank" rel="noopener noreferrer">
                    View Project ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      <Footer /> {/* ✅ Add Footer here */}
    </>
  );
};

export default Work;