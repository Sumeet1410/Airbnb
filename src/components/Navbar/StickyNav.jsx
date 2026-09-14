import React, { useState, useEffect } from 'react';
import './StickyNav.css';

export default function StickyNav({ onReserveClick }) {
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('Photos');

  useEffect(() => {
    const handleScroll = () => {
      // Appear when user scrolls past hero grid (~540px)
      if (window.scrollY > 540) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      // Determine active section based on scroll position
      const sections = [
        { id: 'photos', name: 'Photos' },
        { id: 'amenities', name: 'Amenities' },
        { id: 'reviews', name: 'Reviews' },
        { id: 'location', name: 'Location' }
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveTab(sections[i].name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elPosition = el.getBoundingClientRect().top;
      const offsetPosition = elPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (!visible) return null;

  return (
    <div className="stickynav-wrapper" role="navigation" aria-label="Page sub-navigation">
      <div className="stickynav-inner page-container">
        {/* Navigation Tabs */}
        <div className="stickynav-tabs">
          {['Photos', 'Amenities', 'Reviews', 'Location'].map((tab) => (
            <button
              key={tab}
              className={`stickynav-tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => scrollToSection(tab.toLowerCase())}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Right Details & Reserve Action */}
        <div className="stickynav-right">
          <div className="stickynav-price-info">
            <div className="stickynav-price">
              <span className="price-bold">₹28,499</span>
              <span className="price-sub"> for 5 nights</span>
            </div>
            <div className="stickynav-rating">
              <span className="star-char">★</span>
              <span>4.95 · </span>
              <span className="reviews-sub">19 reviews</span>
            </div>
          </div>
          <button className="stickynav-reserve-btn" onClick={onReserveClick}>
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}
