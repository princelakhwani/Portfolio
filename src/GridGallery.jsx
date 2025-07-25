import React from 'react';
import './GridGallery.css';

// ✅ Import local images properly
import iicImage from './assets/work.jpeg';
import amanImage from './assets/prince2.jpeg';
import resumeImage from './assets/paper-resume.jpeg';

const cards = [
  {
    label: 'SELECTED WORKS',
    year: '23',
    title: 'SHOWCASE',
    image: iicImage,
    url: 'https://example.com/critik',
  },
  {
    label: 'ABOUT ME',
    year: '',
    title: 'EXPLORATIONS',
    image: amanImage,
    url: 'https://example.com/explorations',
  },
  {
    label: 'MY RESUME',
    year: '20',
    title: 'CREDENTIALS',
    image: resumeImage,
    url: 'https://example.com/accountable',
  },
];

const Grid = () => (
  <div className="grid-bg">
    <div className="gallery-row">
      {cards.map((card, idx) => (
        <div className="photo-card" key={idx}>
          <a
            href={card.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card-label">{card.label}</div>
            {card.year && <div className="card-year">'{card.year}</div>}
            <img src={card.image} alt={card.title} className="card-img" />
            <div className="card-title">{card.title}</div>
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default Grid;
