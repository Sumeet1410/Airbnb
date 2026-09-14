import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Upload, Heart } from 'lucide-react';
import './LightboxModal.css';

export default function LightboxModal({
  isOpen,
  photos,
  activeIndex,
  onClose,
  onPrev,
  onNext
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

  return (
    <div
      className="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer lightbox"
    >
      {/* Top Controls Bar */}
      <div className="lightbox-top-bar">
        <button
          className="lightbox-close-btn"
          onClick={onClose}
          aria-label="Close photo viewer (Press Escape)"
        >
          <X size={20} strokeWidth={2.4} />
          <span className="close-label">Close</span>
        </button>

        <div className="lightbox-counter">
          {activeIndex + 1} / {photos.length}
        </div>

        <div className="lightbox-top-actions">
          <button className="lb-action-btn" aria-label="Share">
            <Upload size={16} strokeWidth={2.2} />
          </button>
          <button className="lb-action-btn" aria-label="Save">
            <Heart size={16} strokeWidth={2.2} />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div className="lightbox-stage">
        {/* Previous Button */}
        <button
          className="lightbox-nav-btn lb-prev-btn"
          onClick={onPrev}
          aria-label="Previous photo (Left arrow)"
        >
          <ChevronLeft size={28} strokeWidth={2} />
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
          className="lightbox-nav-btn lb-next-btn"
          onClick={onNext}
          aria-label="Next photo (Right arrow)"
        >
          <ChevronRight size={28} strokeWidth={2} />
        </button>
      </div>

      {/* Bottom Caption Banner */}
      <div className="lightbox-bottom-bar">
        <p className="lightbox-room-caption">
          {currentPhoto.roomName || currentPhoto.alt || "Photo"}
        </p>
      </div>
    </div>
  );
}
