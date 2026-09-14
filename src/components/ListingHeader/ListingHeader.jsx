import React, { useState } from 'react';
import { Upload, Heart } from 'lucide-react';
import './ListingHeader.css';

export default function ListingHeader({ title, onShare, onSaveChange }) {
  const [saved, setSaved] = useState(false);

  const handleSaveToggle = () => {
    const nextSaved = !saved;
    setSaved(nextSaved);
    if (onSaveChange) {
      onSaveChange(nextSaved);
    }
  };

  const handleShareClick = () => {
    if (onShare) {
      onShare();
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
