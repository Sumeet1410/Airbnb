import React, { useState } from 'react';
import { Plus, Minus, Search, Home, ChevronRight } from 'lucide-react';
import './Location.css';

export default function LocationSection({ location, neighbourhoodBio }) {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [showFullNeighbourhood, setShowFullNeighbourhood] = useState(false);

  return (
    <div className="location-section" id="location">
      <h3 className="section-title">Where you’ll be</h3>
      <p className="location-name-subtitle">{location}</p>

      {/* Stylized Interactive Map Preview */}
      <div className="map-container-box">
        <div
          className="map-vector-canvas"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          {/* Water region */}
          <div className="map-water-layer" />
          {/* Land region with grid */}
          <div className="map-land-layer">
            <div className="map-grid-overlay" />
            <div className="map-green-circle circle-1" />
            <div className="map-green-circle circle-2" />
          </div>

          {/* Center Listing Pin */}
          <div className="map-center-pin">
            <div className="pin-circle-black">
              <Home size={22} color="#ffffff" strokeWidth={2} />
            </div>
          </div>
        </div>

        {/* Map UI Controls */}
        <div className="map-controls-left">
          <button className="map-ctrl-btn" aria-label="Search map">
            <Search size={16} />
          </button>
        </div>
        <div className="map-controls-right">
          <button
            className="map-ctrl-btn"
            onClick={() => setZoomLevel(Math.min(zoomLevel + 0.15, 1.45))}
            aria-label="Zoom in"
          >
            <Plus size={16} />
          </button>
          <button
            className="map-ctrl-btn"
            onClick={() => setZoomLevel(Math.max(zoomLevel - 0.15, 0.85))}
            aria-label="Zoom out"
          >
            <Minus size={16} />
          </button>
        </div>
      </div>

      <p className="map-footer-notice">Exact location will be provided after booking.</p>

      {/* Neighbourhood Highlights */}
      <div className="neighbourhood-block">
        <h4 className="neighbourhood-title">Neighbourhood highlights</h4>
        <p className="neighbourhood-desc">
          {neighbourhoodBio}
          {showFullNeighbourhood &&
            " The neighbourhood is quiet yet vibrant. Within walking distance, you'll find beach shacks, famous Goan seafood eateries, supermarkets, and boutique shops. Candolim Beach is just a short 5-minute stroll away."}
        </p>
        <button
          className="show-more-btn"
          onClick={() => setShowFullNeighbourhood(!showFullNeighbourhood)}
        >
          <span>{showFullNeighbourhood ? 'Show less' : 'Show more'}</span>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
