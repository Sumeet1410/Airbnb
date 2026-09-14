import React, { useRef, useState, useEffect } from 'react';
import './ThingsToKnow.css';

export default function NearbyStays({ stays }) {
  const trackRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  // Page start indices matching MoreStaysNearby1, 2, 3:
  // Page 1: cards 0, 1, 2 (Stays 1, 2, 3)
  // Page 2: cards 3, 4, 5 (Stays 4, 5, 6)
  // Page 3: cards 5, 6, 7 (Stays 6, 7, 8)
  const pageStartIndices = [0, 3, 5];

  const scrollToPage = (pageNum) => {
    if (!trackRef.current) return;
    const targetCardIndex = pageStartIndices[pageNum - 1];
    const targetCard = trackRef.current.children[targetCardIndex];
    if (targetCard) {
      const scrollPos = targetCard.offsetLeft - trackRef.current.offsetLeft;
      trackRef.current.scrollTo({ left: scrollPos, behavior: 'smooth' });
    }
    setCurrentPage(pageNum);
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      scrollToPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      scrollToPage(currentPage + 1);
    }
  };

  // Sync current page with manual track scrolling
  const handleScroll = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;
    const progress = scrollLeft / maxScroll;
    if (progress < 0.25) {
      setCurrentPage(1);
    } else if (progress > 0.75) {
      setCurrentPage(3);
    } else {
      setCurrentPage(2);
    }
  };

  return (
    <section className="nearby-stays-section">
      <div className="nearby-header">
        <h2 className="section-title">More stays nearby</h2>
        <div className="nearby-controls">
          <span className="page-indicator" id="simCount">
            {currentPage} / {totalPages}
          </span>
          <button
            className={`nearby-nav-btn ${currentPage === 1 ? 'disabled' : ''}`}
            id="simPrev"
            onClick={handlePrev}
            disabled={currentPage === 1}
            aria-label="Previous stays"
            type="button"
          >
            <span className="ico" style={{ display: 'flex', width: 14, height: 14 }}>
              <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}>
                <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd" />
              </svg>
            </span>
          </button>
          <button
            className={`nearby-nav-btn ${currentPage === totalPages ? 'disabled' : ''}`}
            id="simNext"
            onClick={handleNext}
            disabled={currentPage === totalPages}
            aria-label="Next stays"
            type="button"
          >
            <span className="ico" style={{ display: 'flex', width: 14, height: 14 }}>
              <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}>
                <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      <div
        className="nearby-cards-track"
        id="simTrack"
        ref={trackRef}
        onScroll={handleScroll}
      >
        {stays.map((stay) => (
          <div key={stay.id} className="nearby-stay-card">
            <div className="nearby-img-box">
              <img src={stay.image} alt={stay.title} className="nearby-img" loading="lazy" />
            </div>
            <div className="nearby-info">
              <h4 className="nearby-title">{stay.title}</h4>
              <div className="nearby-pricing-row">
                <span className="nearby-price">{stay.price}</span>
                <span className="nearby-rating-sep">&nbsp;</span>
                <div className="nearby-rating">
                  <span className="nearby-star-ico">
                    <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '10px', width: '10px', fill: 'currentColor' }}>
                      <path fillRule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z" />
                    </svg>
                  </span>
                  <span>{stay.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

