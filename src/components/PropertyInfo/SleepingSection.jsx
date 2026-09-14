import React from 'react';
import './PropertyInfo.css';

export default function SleepingSection({ arrangements }) {
  if (!arrangements) return null;

  return (
    <div className="sleeping-section">
      <h3 className="section-title">Where you'll sleep</h3>
      <div className="sleeping-cards-grid">
        {arrangements.map((item, idx) => (
          <div key={idx} className="sleep-card">
            <div className="sleep-card-img-box">
              <img src={item.image} alt={item.title} className="sleep-card-img" />
            </div>
            <div className="sleep-card-details">
              <h4 className="sleep-title">{item.title}</h4>
              <p className="sleep-sub">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
