import React from 'react';
import './index.css';

const Card = ({ image, title, date,onClick  }) => {
  return (
    <div className="card" onClick={onClick} style={{ cursor: 'pointer' }}>
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title playfair-display">{title}</h3>
        <p className="card-date poppins-regular">
          <span role="img" aria-label="calendar">📅</span> {date}
        </p>
      </div>
    </div>
  );
};

export default Card;