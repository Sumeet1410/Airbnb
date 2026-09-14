import React from 'react';
import { CalendarX, Key, Shield } from 'lucide-react';
import './ThingsToKnow.css';

export default function ThingsToKnow({ thingsToKnow }) {
  return (
    <div className="things-to-know-section">
      <h3 className="section-title">Things to know</h3>

      <div className="things-grid">
        {/* Column 1: Cancellation policy */}
        <div className="thing-col">
          <div className="thing-icon-box">
            <CalendarX size={24} strokeWidth={1.7} />
          </div>
          <h4 className="thing-title">Cancellation policy</h4>
          <p className="thing-desc">{thingsToKnow.cancellation}</p>
          <button className="thing-learn-more">Learn more</button>
        </div>

        {/* Column 2: House rules */}
        <div className="thing-col">
          <div className="thing-icon-box">
            <Key size={24} strokeWidth={1.7} />
          </div>
          <h4 className="thing-title">House rules</h4>
          <ul className="thing-rules-list">
            {thingsToKnow.houseRules.map((rule, idx) => (
              <li key={idx}>{rule}</li>
            ))}
          </ul>
          <button className="thing-learn-more">Learn more</button>
        </div>

        {/* Column 3: Safety & property */}
        <div className="thing-col">
          <div className="thing-icon-box">
            <Shield size={24} strokeWidth={1.7} />
          </div>
          <h4 className="thing-title">Safety & property</h4>
          <ul className="thing-rules-list">
            {thingsToKnow.safety.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <button className="thing-learn-more">Learn more</button>
        </div>
      </div>
    </div>
  );
}
