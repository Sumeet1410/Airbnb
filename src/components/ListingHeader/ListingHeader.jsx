import React, { useState } from 'react';
import { Upload, Heart } from 'lucide-react';
import './ListingHeader.css';

export default function ListingHeader({ title, onShare }) {
  const [saved, setSaved] = useState(false);

  const handleSaveToggle = () => {
    setSaved(!saved);
  };

  const handleShareClick = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      if (onShare) onShare();
    }
  };

  return (
    <div className="listing-header" id="photos">
      <h1 className="listing-title">{title}</h1>
      <div className="listing-header-actions">
        <button className="header-action-btn" onClick={handleShareClick} aria-label="Share listing">
          <Upload size={16} strokeWidth={2.2} />
          <span className="action-underline">Share</span>
        </button>
        <button
          className={`header-action-btn ${saved ? 'saved' : ''}`}
          onClick={handleSaveToggle}
          aria-label={saved ? "Remove from wishlist" : "Save to wishlist"}
        >
          <Heart
            size={16}
            strokeWidth={2.2}
            fill={saved ? "#FF385C" : "none"}
            color={saved ? "#FF385C" : "currentColor"}
          />
          <span className="action-underline">{saved ? 'Saved' : 'Save'}</span>
        </button>
      </div>
    </div>
  );
}
