import React from 'react';
import './GridGallery.css';

// ✅ Import local images properly
import iicImage from './assets/iic.jpg';
import amanImage from './assets/Aman.jpg';
import resumeImage from './assets/Resume.jpg';

const cards = [
  {
    label: 'ENTERTAINMENT',
    year: '22',
    title: 'CRITIK',
    image: iicImage,
    url: 'https://example.com/critik',
  },
  {
    label: 'PLAYGROUND',
    year: '',
    title: 'EXPLORATIONS',
    image: amanImage,
    url: 'https://example.com/explorations',
  },
  {
    label: 'FINTECH',
    year: '20',
    title: 'ACCOUNTABLE',
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
