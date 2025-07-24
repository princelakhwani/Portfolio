import React from 'react';
import './GridGallery.css';

const cards = [
  {
    label: 'ENTERTAINMENT',
    year: '22',
    title: 'CRITIK',
    image: '/src/assets/iic.jpg',
  },
  {
    label: 'PLAYGROUND',
    year: '',
    title: 'EXPLORATIONS',
    image: '/src/assets/Aman.jpg',
  },
  {
    label: 'FINTECH',
    year: '20',
    title: 'ACCOUNTABLE',
    image: '/src/assets/Resume.jpg',
  },
];

const Grid = () => (
  <div className="grid-bg">
    <div className="gallery-row">
      {cards.map((card, idx) => (
        <div className="photo-card" key={idx}>
          <div className="card-label">{card.label}</div>
          {card.year && <div className="card-year">'{card.year}</div>}
          <img src={card.image} alt={card.title} className="card-img" />
          <div className="card-title">{card.title}</div>
        </div>
      ))}
    </div>
  </div>
);

export default Grid; 