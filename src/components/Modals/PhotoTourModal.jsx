import React, { useEffect, useRef } from 'react';
import { photoTourCategories, photoTourSections } from '../../data/photoTourData';
import './PhotoTourModal.css';

export default function PhotoTourModal({
  isOpen,
  onClose,
  onSelectPhoto,
  onShare,
  onSave
}) {
  const scrollContainerRef = useRef(null);

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

  const scrollToRoom = (roomId) => {
    const targetEl = document.getElementById(roomId);
    if (targetEl && scrollContainerRef.current) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="photo-tour-overlay" role="dialog" aria-modal="true" aria-label="Photo tour">
      {/* Sticky Top Header Bar matching reference */}
      <header className="tour-header-bar">
        <div className="tour-header-left">
          <button
            className="tour-back-btn"
            onClick={onClose}
            aria-label="Back to listing"
            type="button"
          >
            <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: 16, width: 16, fill: 'none', stroke: 'currentColor', strokeWidth: 3, overflow: 'visible' }}>
              <path d="M20 28 8.67 16.67a1 1 0 0 1 0-1.34L20 4" />
            </svg>
          </button>
          <h2 className="tour-header-title">Photo tour</h2>
        </div>

        <div className="tour-header-right">
          <button
            className="tour-action-btn"
            aria-label="Share"
            type="button"
            onClick={onShare}
          >
            <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: 16, width: 16, fill: 'none', stroke: 'currentColor', strokeWidth: 2, overflow: 'visible' }}>
              <path d="m27 18v9c0 1.1046-.8954 2-2 2h-18c-1.10457 0-2-.8954-2-2v-9m11-15v21m-10-11 9.2929-9.29289c.3905-.39053 1.0237-.39053 1.4142 0l9.2929 9.29289" />
            </svg>
          </button>
          <button
            className="tour-action-btn"
            aria-label="Save"
            type="button"
            onClick={onSave}
          >
            <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: 16, width: 16, fill: 'none', stroke: 'currentColor', strokeWidth: 2, overflow: 'visible' }}>
              <path d="m15.9998 28.6668c7.1667-4.8847 14.3334-10.8844 14.3334-18.1088 0-1.84951-.6993-3.69794-2.0988-5.10877-1.3996-1.4098-3.2332-2.11573-5.0679-2.11573-1.8336 0-3.6683.70593-5.0668 2.11573l-2.0999 2.11677-2.0988-2.11677c-1.3995-1.4098-3.2332-2.11573-5.06783-2.11573-1.83364 0-3.66831.70593-5.06683 2.11573-1.39955 1.41083-2.09984 3.25926-2.09984 5.10877 0 7.2244 7.16667 13.2241 14.3333 18.1088z" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Tour Scrollable Body */}
      <div className="_EpiBQR" id="tourScroll" ref={scrollContainerRef}>
        <div className="_hKlfpJ">
          {/* Top Categories Grid (9 cards, 4 columns, hover enlarge) */}
          <nav className="_tHVclZ" id="tourNav" aria-label="Photo categories">
            {photoTourCategories.map((cat) => (
              <button
                key={cat.id}
                className="_gKVFNL"
                type="button"
                aria-label={cat.ariaLabel}
                onClick={() => scrollToRoom(cat.id)}
              >
                <img loading="lazy" alt="" src={cat.thumb} />
                <span className="_tAbhrW">{cat.name}</span>
              </button>
            ))}
          </nav>

          {/* Categorized Rooms Photo Feed */}
          <div className="tour-rooms" id="tourRooms">
            {photoTourSections.map((section) => (
              <section key={section.id} className="_AWcqip" id={section.id}>
                <div className="_yZYwUW">
                  <div className="_AnkvRF">{section.title}</div>
                  {section.subtitle && (
                    <div className="_hvJgUS">{section.subtitle}</div>
                  )}
                </div>

                <div className="_MbzoEk">
                  {section.rows.map((row, rowIdx) => (
                    <div
                      key={rowIdx}
                      className={`_wdcjGJ ${row.layout === 'full' ? '_vmCONz' : '_DLVRjk'}`}
                    >
                      {row.photos.map((photo) => (
                        <button
                          key={photo.idx}
                          className="_GXrMIo"
                          type="button"
                          data-idx={photo.idx}
                          aria-label={photo.ariaLabel || `${section.title} image`}
                          onClick={() => onSelectPhoto(photo.idx)}
                        >
                          <img
                            loading="lazy"
                            alt={section.title}
                            src={photo.src}
                          />
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
