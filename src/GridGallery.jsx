import React from 'react';
import './GridGallery.css';

const cards = [
  {
    label: 'ENTERTAINMENT',
    year: '22',
    title: 'CRITIK',
    image: 'https://via.placeholder.com/300x300?text=Image+1',
  },
  {
    label: 'PLAYGROUND',
    year: '',
    title: 'EXPLORATIONS',
    image: 'https://via.placeholder.com/300x300?text=Image+2',
  },
  {
    label: 'FINTECH',
    year: '20',
    title: 'ACCOUNTABLE',
    image: 'https://via.placeholder.com/300x300?text=Image+3',
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