import React from 'react';
import './BusinessInsightCard.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const BusinessInsightCard = ({ icon, title, value, change, description, date }) => {
  return (
    <div className="business-insight-card">
      <div className="card-header">
        <div className="card-icon">
          <i className={`fas ${icon}`}></i>
        </div>
        <div>
          <h2 className="card-title">{title}</h2>
          <p className={`card-change ${change >= 0 ? 'positive' : 'negative'}`}>
            {change >= 0 ? `+${change}%` : `${change}%`} since last month
          </p>
        </div>
      </div>
      
      <div className="card-value">{value}</div>
      
      <p className="card-description">{description}</p>
      
      <div className="card-footer">
        <span>Last updated: {date}</span>
        <i className="fas fa-arrow-right"></i>
      </div>
    </div>
  );
};

export default BusinessInsightCard;
