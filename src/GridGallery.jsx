import React from 'react';
import './GridGallery.css';
import { Link } from 'react-router-dom';

import workImage from './assets/work.jpeg';
import princeImage from './assets/prince2.jpeg';
import resumeImage from './assets/paper-resume.jpeg';

const cards = [
  {
    label: 'SELECTED WORKS',
    year: '23',
    title: 'SHOWCASE',
    image: workImage,
    url: 'https://example.com/critik',
    type: 'external',
  },
  {
    label: 'ABOUT ME',
    year: '',
    title: 'EXPLORATIONS',
    image: princeImage,
    url: '/about',
    type: 'internal',
  },
  {
    label: 'MY RESUME',
    year: '20',
    title: 'CREDENTIALS',
    image: resumeImage,
    url: '/src/assets/Resume.pdf', // This should be in the public folder
    type: 'download',
  },
];

const Grid = () => (
  <div className="grid-bg">
    <div className="gallery-row">
      {cards.map((card, idx) => {
        const content = (
          <>
            <div className="card-label">{card.label}</div>
            {card.year && <div className="card-year">'{card.year}</div>}
            <img src={card.image} alt={card.title} className="card-img" />
            <div className="card-title">{card.title}</div>
          </>
        );

        let linkComponent;
        if (card.type === 'external') {
          linkComponent = (
            <a href={card.url} target="_blank" rel="noopener noreferrer">
              {content}
            </a>
          );
        } else if (card.type === 'internal') {
          linkComponent = <Link to={card.url}>{content}</Link>;
        } else if (card.type === 'download') {
          linkComponent = (
            <a href={card.url} target="_blank" rel="noopener noreferrer" download>
              {content}
            </a>
          );
        }

        return (
          <div className="photo-card" key={idx}>
            {linkComponent}
          </div>
        );
      })}
    </div>
  </div>
);

export default Grid;
