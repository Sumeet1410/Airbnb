import React from 'react';
import {
  Utensils,
  Wifi,
  Laptop,
  Car,
  Waves,
  Bath,
  PawPrint,
  Camera,
  BellOff
} from 'lucide-react';
import './PropertyInfo.css';

export default function AmenitiesSection({ onOpenAmenitiesModal }) {
  const iconMap = {
    Utensils: Utensils,
    Wifi: Wifi,
    Laptop: Laptop,
    Car: Car,
    Waves: Waves,
    Bath: Bath,
    PawPrint: PawPrint,
    Camera: Camera,
    BellOff: BellOff
  };

  const amenities = [
    { label: "Kitchen", icon: "Utensils" },
    { label: "Wifi", icon: "Wifi" },
    { label: "Dedicated workspace", icon: "Laptop" },
    { label: "Free parking on premises", icon: "Car" },
    { label: "Pool", icon: "Waves" },
    { label: "Hot tub", icon: "Bath" },
    { label: "Pets allowed", icon: "PawPrint" },
    { label: "Exterior security cameras on property", icon: "Camera" },
    { label: "Carbon monoxide alarm", icon: "BellOff", strike: true },
    { label: "Smoke alarm", icon: "BellOff", strike: true }
  ];

  return (
    <div className="amenities-section" id="amenities">
      <h3 className="section-title">What this place offers</h3>

      <div className="amenities-grid">
        {amenities.map((item, idx) => {
          const IconComponent = iconMap[item.icon] || Wifi;
          return (
            <div key={idx} className={`amenity-item ${item.strike ? 'amenity-struck' : ''}`}>
              <div className="amenity-icon">
                <IconComponent size={24} strokeWidth={1.6} />
              </div>
              <span className={`amenity-label ${item.strike ? 'line-through' : ''}`}>
                {item.label}
              </span>
            </div>
          );
        })}
      </div>

      <div className="amenities-cta-wrapper">
        <button
          className="show-all-amenities-btn"
          onClick={onOpenAmenitiesModal}
        >
          Show all 50 amenities
        </button>
      </div>
    </div>
  );
}
