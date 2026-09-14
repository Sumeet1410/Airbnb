import React, { useState } from 'react';
import { ChevronRight, Waves, Fan, Key } from 'lucide-react';
import './PropertyInfo.css';

export default function PropertyOverview({ data }) {
  const [showFullDesc, setShowFullDesc] = useState(false);

  return (
    <div className="property-overview-section">
      {/* Title & Stats */}
      <div className="prop-title-block">
        <h2 className="prop-type-heading">{data.type}</h2>
        <p className="prop-specs-text">{data.specs.summary}</p>
      </div>

      {/* Guest Favourite Laurel Banner */}
      <div className="guest-favourite-card">
        <div className="gf-left">
          <img src="/assets/laurel-left.png" alt="" className="laurel-img" />
          <div className="gf-label-box">
            <span className="gf-tag-top">Guest</span>
            <span className="gf-tag-bottom">favourite</span>
          </div>
          <img src="/assets/laurel-right.png" alt="" className="laurel-img laurel-right" />
        </div>

        <p className="gf-desc">One of the most loved homes on Airbnb, according to guests</p>

        <div className="gf-right">
          <div className="gf-rating-box">
            <span className="gf-score">4.95</span>
            <div className="gf-stars">★★★★★</div>
          </div>
          <div className="gf-divider" />
          <div className="gf-reviews-box">
            <span className="gf-rev-count">19</span>
            <span className="gf-rev-label">Reviews</span>
          </div>
        </div>
      </div>

      {/* Host Preview Row */}
      <div className="prop-host-row">
        <div className="host-avatar-wrapper">
          <img src={data.host.avatar} alt={data.host.name} className="host-round-avatar" />
        </div>
        <div className="host-meta">
          <h3 className="host-name">Hosted by {data.host.name}</h3>
          <p className="host-years">{data.host.yearsHosting} years hosting</p>
        </div>
      </div>

      <div className="section-divider" />

      {/* Key Highlights */}
      <div className="prop-highlights-list">
        <div className="highlight-item">
          <div className="highlight-icon">
            <Waves size={24} strokeWidth={1.7} />
          </div>
          <div className="highlight-content">
            <h4 className="highlight-title">Outdoor entertainment</h4>
            <p className="highlight-desc">The pool and alfresco dining are great for summer trips.</p>
          </div>
        </div>

        <div className="highlight-item">
          <div className="highlight-icon">
            <Fan size={24} strokeWidth={1.7} />
          </div>
          <div className="highlight-content">
            <h4 className="highlight-title">Designed for staying cool</h4>
            <p className="highlight-desc">Beat the heat with the A/C and ceiling fan.</p>
          </div>
        </div>

        <div className="highlight-item">
          <div className="highlight-icon">
            <Key size={24} strokeWidth={1.7} />
          </div>
          <div className="highlight-content">
            <h4 className="highlight-title">Self check-in</h4>
            <p className="highlight-desc">You can check in with the building staff.</p>
          </div>
        </div>
      </div>

      <div className="section-divider" />

      {/* Translation notice banner */}
      <div className="translation-badge">
        <span>Some info has been automatically translated. </span>
        <button className="btn-underline" type="button">Show original</button>
      </div>

      {/* Listing Description */}
      <div className="prop-description-block">
        <p className="description-paragraph" id="descText">
          {showFullDesc ? data.description.full : data.description.short}
        </p>
        <button
          className="show-more-btn"
          id="descMore"
          type="button"
          onClick={() => setShowFullDesc(!showFullDesc)}
        >
          <span>{showFullDesc ? 'Show less' : 'Show more'}</span>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
