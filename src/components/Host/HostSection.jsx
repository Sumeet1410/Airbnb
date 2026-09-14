import React from 'react';
import { ShieldCheck, GraduationCap, Sparkles, Check } from 'lucide-react';
import './Host.css';

export default function HostSection({ host, onMessageHost }) {
  return (
    <section className="host-section" id="host">
      <h2 className="section-title">Meet your host</h2>

      <div className="host-layout-split">
        {/* Left Column (340px): Host Profile Card & Facts */}
        <div className="host-left-column">
          <div className="host-profile-card">
            {/* Card Left: Avatar & Name */}
            <div className="host-card-left">
              <div className="host-avatar-container">
                <img src={host.avatar} alt={host.name} className="host-large-img" />
                <div className="host-verified-badge" aria-label="Identity verified">
                  <Check size={14} color="#ffffff" strokeWidth={3} />
                </div>
              </div>
              <h3 className="host-card-name">{host.name}</h3>
              <span className="host-card-role">{host.badge}</span>
            </div>

            {/* Card Right: Key Stats */}
            <div className="host-card-right">
              <div className="host-stat-item">
                <span className="stat-number">{host.totalReviews?.toLocaleString()}</span>
                <span className="stat-label">Reviews</span>
              </div>
              <div className="host-stat-divider" />
              <div className="host-stat-item">
                <span className="stat-number">
                  {host.rating}
                  <span className="stat-star">★</span>
                </span>
                <span className="stat-label">Rating</span>
              </div>
              <div className="host-stat-divider" />
              <div className="host-stat-item">
                <span className="stat-number">{host.yearsHosting}</span>
                <span className="stat-label">Years hosting</span>
              </div>
            </div>
          </div>

          {/* Host Background Details */}
          <div className="host-facts-list">
            <div className="host-fact-item">
              <Sparkles size={20} className="fact-icon" />
              <span>{host.bornIn}</span>
            </div>
            <div className="host-fact-item">
              <GraduationCap size={20} className="fact-icon" />
              <span>Where I went to school: {host.school}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Co-Hosts, Details & Contact */}
        <div className="host-right-column">
          {/* Co-Hosts Section */}
          <div className="co-hosts-container">
            <h3 className="co-hosts-title">Co-Hosts</h3>
            <div className="co-hosts-grid">
              {host.coHosts.map((co, idx) => (
                <div key={idx} className="co-host-card">
                  {co.avatar ? (
                    <img src={co.avatar} alt={co.name} className="co-host-avatar" />
                  ) : (
                    <div
                      className="co-host-initial-avatar"
                      style={{ backgroundColor: co.bg, color: co.color }}
                    >
                      {co.initial}
                    </div>
                  )}
                  <span className="co-host-name">{co.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Host Details & Contact */}
          <div className="host-details-footer">
            <h3 className="host-details-title">Host details</h3>
            <p className="host-detail-line">Response rate: {host.responseRate}</p>
            <p className="host-detail-line">{host.responseTime}</p>

            <button className="message-host-btn" type="button" onClick={onMessageHost}>
              Message host
            </button>

            {/* Protection Disclaimer */}
            <div className="host-protection-notice">
              <ShieldCheck size={26} strokeWidth={1.5} className="shield-icon" />
              <p className="protection-text">
                To help protect your payment, always use Airbnb to send money and communicate with hosts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
