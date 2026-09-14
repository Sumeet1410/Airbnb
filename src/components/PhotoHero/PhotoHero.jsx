import React from 'react';
import { Grid3X3 } from 'lucide-react';
import './PhotoHero.css';

export default function PhotoHero({ images, onOpenTour }) {
  if (!images || images.length < 5) return null;

  return (
    <div className="photo-hero-wrapper" id="photos-grid">
      <div className="photo-hero-grid">
        {/* Photo 1 (Spans 2 rows) */}
        <button
          className="hero-cell hero-cell-1"
          onClick={onOpenTour}
          type="button"
          aria-label="View photo tour"
        >
          <img
            src={images[0].src}
            alt={images[0].alt}
            loading="eager"
          />
        </button>

        {/* Photo 2 */}
        <button
          className="hero-cell hero-cell-2"
          onClick={onOpenTour}
          type="button"
          aria-label="View photo tour"
        >
          <img
            src={images[1].src}
            alt={images[1].alt}
            loading="eager"
          />
        </button>

        {/* Photo 3 */}
        <button
          className="hero-cell hero-cell-3"
          onClick={onOpenTour}
          type="button"
          aria-label="View photo tour"
        >
          <img
            src={images[2].src}
            alt={images[2].alt}
            loading="eager"
          />
        </button>

        {/* Photo 4 */}
        <button
          className="hero-cell hero-cell-4"
          onClick={onOpenTour}
          type="button"
          aria-label="View photo tour"
        >
          <img
            src={images[3].src}
            alt={images[3].alt}
            loading="eager"
          />
        </button>

        {/* Photo 5 */}
        <button
          className="hero-cell hero-cell-5"
          onClick={onOpenTour}
          type="button"
          aria-label="View photo tour"
        >
          <img
            src={images[4].src}
            alt={images[4].alt}
            loading="eager"
          />
        </button>

        {/* Floating Show all photos Button */}
        <button
          className="show-all-photos-btn"
          onClick={onOpenTour}
          type="button"
          aria-label="Show all photos"
        >
          <Grid3X3 size={15} strokeWidth={2.4} />
          <span>Show all photos</span>
        </button>
      </div>
    </div>
  );
}
