import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Grid3X3 } from 'lucide-react';
import './LightboxModal.css';

export default function LightboxModal({
  isOpen,
  photos,
  activeIndex,
  onClose,
  onPrev,
  onNext,
  onReturnToTour
}) {
  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => document.body.classList.remove('modal-open');
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        onPrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        onNext();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onPrev, onNext, onClose]);

  if (!isOpen || !photos || photos.length === 0) return null;

  const currentPhoto = photos[activeIndex] || photos[0];
  const isFirst = activeIndex === 0;
  const isLast = activeIndex === photos.length - 1;

  return (
    <div
      className="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer lightbox"
    >
      {/* Top Controls Bar matching required2.png */}
      <div className="lightbox-top-bar">
        <button
          className="lightbox-grid-btn"
          onClick={onReturnToTour || onClose}
          aria-label="View all photos in grid"
          title="All photos"
        >
          <Grid3X3 size={18} strokeWidth={2.2} />
        </button>

        <div className="lightbox-center-title">
          {currentPhoto.roomName || currentPhoto.alt || "Photo"}
        </div>

        <div className="lightbox-right-controls">
          <span className="lightbox-counter-text">
            {activeIndex + 1} of {photos.length}
          </span>
          <button
            className="lightbox-close-btn"
            onClick={onClose}
            aria-label="Close photo viewer"
          >
            <X size={20} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div className="lightbox-stage">
        {/* Previous Button */}
        <button
          className={`lightbox-nav-btn lb-prev-btn ${isFirst ? 'disabled' : ''}`}
          onClick={onPrev}
          disabled={isFirst}
          aria-label="Previous photo"
        >
          <ChevronLeft size={20} strokeWidth={2.4} />
        </button>

        {/* Active Image */}
        <div className="lightbox-img-wrapper">
          <img
            key={currentPhoto.src}
            src={currentPhoto.src}
            alt={currentPhoto.alt || currentPhoto.roomName || "Listing photo"}
            className="lightbox-img"
          />
        </div>

        {/* Next Button */}
        <button
          className={`lightbox-nav-btn lb-next-btn ${isLast ? 'disabled' : ''}`}
          onClick={onNext}
          disabled={isLast}
          aria-label="Next photo"
        >
          <ChevronRight size={20} strokeWidth={2.4} />
        </button>
      </div>
    </div>
  );
}
