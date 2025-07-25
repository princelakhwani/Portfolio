// src/pages/Work.jsx
import React from 'react';
import '/src/Styles/Work/Work.css';

const workItems = [
  {
    title: 'AmanStar Website',
    description: 'A full-stack product management website built using React and Node.js with dynamic image uploads.',
    link: 'https://amanstar.example.com',
    image: '/images/amanstar.png',
  },
  {
    title: 'Hackathon Site',
    description: '36-hour Hackathon event registration and details website hosted on mujiic.com.',
    link: 'https://mujiic.com',
    image: '/images/hackathon.png',
  },
  {
    title: 'Doctor Login App',
    description: 'Doctor login portal with Firebase authentication and custom validation.',
    link: '/doctor-login',
    image: '/images/doctor-login.png',
  },
];

const Work = () => {
  return (
    <section className="work-section">
      <h2 className="work-title">My Work</h2>
      <div className="work-grid">
        {workItems.map((item, index) => (
          <div className="work-card" key={index}>
            <img src={item.image} alt={item.title} className="work-image" />
            <div className="work-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="work-button">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;