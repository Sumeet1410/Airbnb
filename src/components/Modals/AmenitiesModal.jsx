import React, { useEffect } from 'react';
import { X, Check } from 'lucide-react';
import { allAmenitiesCategories } from '../../data/amenitiesData';
import './AmenitiesModal.css';

export default function AmenitiesModal({ isOpen, onClose }) {
  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => document.body.classList.remove('modal-open');
  }, [isOpen]);

  // ESC key listener
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

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="amenities-modal-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="All amenities"
      >
        {/* Header */}
        <div className="amen-modal-header">
          <button
            className="amen-modal-close-btn"
            onClick={onClose}
            aria-label="Close amenities modal"
          >
            <X size={18} strokeWidth={2.4} />
          </button>
        </div>

        {/* Content */}
        <div className="amen-modal-content">
          <h2 className="amen-modal-title">What this place offers</h2>

          <div className="amen-categories-list">
            {allAmenitiesCategories.map((cat, idx) => (
              <div key={idx} className="amen-cat-group">
                <h3 className="amen-cat-name">{cat.category}</h3>
                <div className="amen-cat-items">
                  {cat.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className={`amen-modal-row ${!item.available ? 'not-available' : ''}`}
                    >
                      <div className="amen-row-content">
                        <span className={`amen-item-name ${!item.available ? 'strike' : ''}`}>
                          {item.name}
                        </span>
                        {item.subtext && (
                          <span className="amen-item-sub">{item.subtext}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
