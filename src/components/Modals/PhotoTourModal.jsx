import React, { useEffect, useRef } from 'react';
import { ArrowLeft, Upload, Heart } from 'lucide-react';
import { allPhotos } from '../../data/listingData';
import './PhotoTourModal.css';

export default function PhotoTourModal({
  isOpen,
  onClose,
  rooms,
  onSelectPhoto
}) {
  const modalRef = useRef(null);

  // Lock body scroll when tour is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => document.body.classList.remove('modal-open');
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const scrollToRoom = (roomName) => {
    const el = document.getElementById(`tour-room-${roomName}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="photo-tour-overlay" role="dialog" aria-modal="true" aria-label="Photo tour">
      {/* Sticky Top Header */}
      <header className="tour-header-bar">
        <div className="tour-header-left">
          <button
            className="tour-back-btn"
            onClick={onClose}
            aria-label="Back to listing"
          >
            <ArrowLeft size={18} strokeWidth={2.4} />
          </button>
          <h2 className="tour-header-title">Photo tour</h2>
        </div>

        <div className="tour-header-right">
          <button className="tour-action-btn" aria-label="Share">
            <Upload size={16} strokeWidth={2.2} />
          </button>
          <button className="tour-action-btn" aria-label="Save">
            <Heart size={16} strokeWidth={2.2} />
          </button>
        </div>
      </header>

      {/* Main Tour Body */}
      <div className="tour-body-container" ref={modalRef}>
        {/* Category Navigation Pills */}
        <nav className="tour-categories-nav" aria-label="Room categories">
          {rooms.map((room) => (
            <button
              key={room.name}
              className="tour-category-pill"
              onClick={() => scrollToRoom(room.name)}
            >
              {room.images[0] && (
                <img
                  src={room.images[0].src}
                  alt=""
                  className="cat-pill-thumb"
                />
              )}
              <span>{room.name}</span>
            </button>
          ))}
        </nav>

        {/* Categorized Photo Feed */}
        <div className="tour-rooms-feed">
          {rooms.map((room) => (
            <section
              key={room.name}
              id={`tour-room-${room.name}`}
              className="tour-room-section"
            >
                <h3 className="tour-room-heading">{room.name}</h3>
                <div className="tour-room-photos-grid">
                  {room.images.map((img, imgIdx) => {
                    const photoIdx = allPhotos.findIndex((p) => p.src === img.src);
                    const targetIdx = photoIdx !== -1 ? photoIdx : 0;
                    return (
                      <div
                        key={imgIdx}
                        className="tour-photo-item"
                        onClick={() => onSelectPhoto(targetIdx)}
                        role="button"
                        tabIndex={0}
                        aria-label={`View ${room.name} photo ${imgIdx + 1}`}
                        onKeyDown={(e) => e.key === 'Enter' && onSelectPhoto(targetIdx)}
                      >
                        <img
                          src={img.src}
                          alt={img.alt || `${room.name} photo`}
                          className="tour-photo-img"
                          loading="lazy"
                        />
                        <div className="tour-photo-overlay" />
                      </div>
                    );
                  })}
                </div>
              </section>
          ))}
        </div>
      </div>
    </div>
  );
}
