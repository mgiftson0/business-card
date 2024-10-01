// src/components/BusinessInsightCard.js

import React from 'react';
import './BusinessInsightCard.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const BusinessInsightCard = ({ icon, title, value, change, description, gradient }) => {
  return (
    <div className="business-insight-card" style={{ background: gradient }}>
      <div className="card-header">
        <i className={`fas ${icon} card-icon`}></i>
        <div className="card-title-container">
          <h2 className="card-title">{title}</h2>
          <p className={`card-change ${change >= 0 ? 'positive' : 'negative'}`}>
            {change >= 0 ? `+${change}` : `${change}`}% 
          </p>
        </div>
      </div>
      <div className="card-value">{value}</div>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default BusinessInsightCard;
