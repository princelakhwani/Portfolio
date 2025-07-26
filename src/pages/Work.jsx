// src/pages/Work.jsx
import React from 'react';
import '/src/Styles/Work/Work.css';
import AmanImg from '/src/assets/Aman.jpg';
// import hackathonImg from '/src/assets/hackathon.png';
import doctorlogin from '/src/assets/work.jpeg';

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
];

const Work = () => {
  return (

    <section className="selected-works">
      <div className="header-content">
        <h1 className="main-heading">
          Selected
        </h1>
        <h1 className="main-heading">
          Works
        </h1>
        <div className="tag">FROM 2020 - NOW</div>
      </div>

      <div className="intro-section">
        <img src="/assets/folder-icon.png" alt="Folder Icon" className="folder-icon" />
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
  {workItems.map((item, index) => (
    <div className="project-block" key={index}>
      <div className="image-container">
        <img src={item.image} alt={item.title} className="project-image" />
      </div>

      <div className="project-info">
        <div className="project-meta">
          <span className="project-label">{item.label}</span>
          <span className="project-year">{item.year}</span>
        </div>
        <h2 className="project-title">{item.title}</h2>
        <a href={item.link} target="_blank" rel="noopener noreferrer" className="project-link">
          View Project ↗
        </a>
      </div>

      <hr className="project-divider" />
    </div>
  ))}
</div>

    </section>

    // <section className="work-section">
    //   <h2 className="work-title">My Work</h2>
    //   <div className="work-grid">
    //     {workItems.map((item, index) => (
    //       <div className="work-card" key={index}>
    //         <img src={item.image} alt={item.title} className="work-image" />
    //         <div className="work-content">
    //           <h3>{item.title}</h3>
    //           <p>{item.description}</p>
    //           <a href={item.link} target="_blank" rel="noopener noreferrer" className="work-button">
    //             View Project
    //           </a>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </section>
  );
};

export default Work;