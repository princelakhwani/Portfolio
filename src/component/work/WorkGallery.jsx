import React from 'react';
import '/src/Styles/Work/WorkGallery.css';
import AmanImg from '/src/assets/amanwork.png';
import doctorlogin from '/src/assets/work.jpeg';

const workItems = [
  {
    title: 'AmanStar Website',
    description: 'A full-stack product management website built using React and Node.js with dynamic image uploads.',
    link: 'https://amanstar.netlify.in',
    image: AmanImg,
    label: 'Product • Full‑stack',
    year: '2025',
  },
  {
    title: 'Hackathon Site',
    description: '36-hour Hackathon event registration and details website hosted on mujiic.com.',
    link: 'https://mujiic.com',
    image: doctorlogin,
    label: 'Web • Event',
    year: '2024',
  },
  {
    title: 'Doctor Login App',
    description: 'Doctor login portal with Firebase authentication and custom validation.',
    link: '/doctor-login',
    image: doctorlogin,
    label: 'Auth • React • Firebase',
    year: '2024',
  },
  {
    title: 'Doctor Login App',
    description: 'Doctor login portal with Firebase authentication and custom validation.',
    link: '/doctor-login',
    image: doctorlogin,
    label: 'Auth • React • Firebase',
    year: '2024',
  },
  {
    title: 'Doctor Login App',
    description: 'Doctor login portal with Firebase authentication and custom validation.',
    link: '/doctor-login',
    image: doctorlogin,
    label: 'Auth • React • Firebase',
    year: '2024',
  },
  {
    title: 'Doctor Login App',
    description: 'Doctor login portal with Firebase authentication and custom validation.',
    link: '/doctor-login',
    image: doctorlogin,
    label: 'Auth • React • Firebase',
    year: '2024',
  },
];

const WorkGallery = () => {
  return (
    <div className="work-list">
      {/* Full-width Project */}
      <a
        href={workItems[0].link}
        className="project-wrapper"
        key={0}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="project-block">
          <div className="image-container">
            <img src={workItems[0].image} alt={workItems[0].title} className="project-image" />
          </div>
          <div className="project-info">
            <div className="project-meta">
              <span className="project-label">{workItems[0].label}</span>
              <span className="project-year">{workItems[0].year}</span>
            </div>
            <h2 className="project-title">{workItems[0].title}</h2>
            <p className="project-desc">{workItems[0].description}</p>
          </div>
          <hr className="project-divider" />
        </div>
      </a>

      {/* Row 1 */}
      <div className="project-row">
        {[1, 2].map((i) => (
          <a
            href={workItems[i].link}
            className="project-wrapper project-wrapper-half"
            key={i}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-half">
              <div className="image-container">
                <img src={workItems[i].image} alt={workItems[i].title} className="project-image" />
              </div>
              <div className="project-info">
                <div className="project-meta">
                  <span className="project-label">{workItems[i].label}</span>
                  <span className="project-year">{workItems[i].year}</span>
                </div>
                <h2 className="project-title">{workItems[i].title}</h2>
                <p className="project-desc">{workItems[i].description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      <hr className="project-divider" />

      {/* Full-width Project */}
      <a
        href={workItems[3].link}
        className="project-wrapper"
        key={3}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="project-block">
          <div className="image-container">
            <img src={workItems[3].image} alt={workItems[3].title} className="project-image" />
          </div>
          <div className="project-info">
            <div className="project-meta">
              <span className="project-label">{workItems[3].label}</span>
              <span className="project-year">{workItems[3].year}</span>
            </div>
            <h2 className="project-title">{workItems[3].title}</h2>
            <p className="project-desc">{workItems[3].description}</p>
          </div>
          <hr className="project-divider" />
        </div>
      </a>

      {/* Row 2 */}
      <div className="project-row">
        {[4, 5].map((i) => (
          <a
            href={workItems[i].link}
            className="project-wrapper project-wrapper-half"
            key={i}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-half">
              <div className="image-container">
                <img src={workItems[i].image} alt={workItems[i].title} className="project-image" />
              </div>
              <div className="project-info">
                <div className="project-meta">
                  <span className="project-label">{workItems[i].label}</span>
                  <span className="project-year">{workItems[i].year}</span>
                </div>
                <h2 className="project-title">{workItems[i].title}</h2>
                <p className="project-desc">{workItems[i].description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default WorkGallery;
