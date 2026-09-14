import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import './ThingsToKnow.css';

export default function NearbyStays({ stays }) {
  const trackRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(1);

  const handlePrev = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      setActiveSlide((prev) => (prev > 1 ? prev - 1 : 1));
    }
  };

  const handleNext = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      setActiveSlide((prev) => (prev < stays.length ? prev + 1 : stays.length));
    }
  };

  return (
    <section className="nearby-stays-section">
      <div className="nearby-header">
        <h2 className="section-title">More stays nearby</h2>
        <div className="nearby-controls">
          <span className="page-indicator" id="simCount">1 / 5</span>
          <button
            className="nearby-nav-btn"
            id="simPrev"
            onClick={handlePrev}
            aria-label="Previous stays"
            type="button"
          >
            <ChevronLeft size={16} strokeWidth={2.4} />
          </button>
          <button
            className="nearby-nav-btn"
            id="simNext"
            onClick={handleNext}
            aria-label="Next stays"
            type="button"
          >
            <ChevronRight size={16} strokeWidth={2.4} />
          </button>
        </div>
      </div>

      <div className="nearby-cards-track" id="simTrack" ref={trackRef}>
        {stays.map((stay) => (
          <div key={stay.id} className="nearby-stay-card">
            <div className="nearby-img-box">
              <img src={stay.image} alt={stay.title} className="nearby-img" loading="lazy" />
            </div>
            <div className="nearby-info">
              <h4 className="nearby-title">{stay.title}</h4>
              <div className="nearby-pricing-row">
                <span className="nearby-price">{stay.price}</span>
                <div className="nearby-rating">
                  <Star size={12} fill="#222222" color="#222222" />
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
