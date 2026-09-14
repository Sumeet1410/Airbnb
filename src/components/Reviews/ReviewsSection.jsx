import React, { useState } from 'react';
import { Star, Key, MessageSquare, Tag } from 'lucide-react';
import './Reviews.css';

export default function ReviewsSection({ reviewsSummary }) {
  const [selectedTag, setSelectedTag] = useState(null);

  const filterReviews = selectedTag
    ? reviewsSummary.items.filter((r) =>
        r.text.toLowerCase().includes(selectedTag.toLowerCase())
      )
    : reviewsSummary.items;

  return (
    <section className="reviews-section" id="reviews">
      {/* Big Guest Favourite Laurel Header */}
      <div className="reviews-hero-header">
        <div className="reviews-laurel-row">
          <img src="/assets/laurel-left.png" alt="" className="rev-laurel-img" />
          <span className="rev-big-number">4.95</span>
          <img src="/assets/laurel-right.png" alt="" className="rev-laurel-img rev-laurel-right" />
        </div>
        <h3 className="rev-gf-title">Guest favourite</h3>
        <p className="rev-gf-subtitle">
          This home is a guest favourite based on ratings, reviews and reliability
        </p>
        <button className="how-reviews-work-btn" type="button">How reviews work</button>
      </div>

      {/* Category Ratings Grid */}
      <div className="ratings-breakdown-grid">
        {/* Overall Bar */}
        <div className="rating-cat-col">
          <div className="cat-title">Overall rating</div>
          <div className="overall-bars-list">
            {[
              { num: 5, pct: 95 },
              { num: 4, pct: 5 },
              { num: 3, pct: 0 },
              { num: 2, pct: 0 },
              { num: 1, pct: 0 }
            ].map((bar) => (
              <div key={bar.num} className="bar-row">
                <span className="bar-label">{bar.num}</span>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: `${bar.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cleanliness */}
        <div className="rating-cat-col">
          <div className="cat-title">Cleanliness</div>
          <div className="cat-score">5.0</div>
          <div className="cat-icon-wrap">
            <img src="/assets/cleanliness.png" alt="" className="cat-png-icon" />
          </div>
        </div>

        {/* Accuracy */}
        <div className="rating-cat-col">
          <div className="cat-title">Accuracy</div>
          <div className="cat-score">5.0</div>
          <div className="cat-icon-wrap">
            <img src="/assets/accuracy.png" alt="" className="cat-png-icon" />
          </div>
        </div>

        {/* Check-in */}
        <div className="rating-cat-col">
          <div className="cat-title">Check-in</div>
          <div className="cat-score">5.0</div>
          <div className="cat-icon-wrap">
            <Key size={26} strokeWidth={1.5} />
          </div>
        </div>

        {/* Communication */}
        <div className="rating-cat-col">
          <div className="cat-title">Communication</div>
          <div className="cat-score">5.0</div>
          <div className="cat-icon-wrap">
            <MessageSquare size={26} strokeWidth={1.5} />
          </div>
        </div>

        {/* Location */}
        <div className="rating-cat-col">
          <div className="cat-title">Location</div>
          <div className="cat-score">4.8</div>
          <div className="cat-icon-wrap">
            <img src="/assets/location.png" alt="" className="cat-png-icon" />
          </div>
        </div>

        {/* Value */}
        <div className="rating-cat-col">
          <div className="cat-title">Value</div>
          <div className="cat-score">4.8</div>
          <div className="cat-icon-wrap">
            <Tag size={26} strokeWidth={1.5} />
          </div>
        </div>
      </div>

      {/* Review Tags Filter */}
      <div className="review-tags-scroller">
        {reviewsSummary.tags.map((t, idx) => (
          <button
            key={idx}
            className={`review-tag-pill ${selectedTag === t.label ? 'active' : ''}`}
            onClick={() => setSelectedTag(selectedTag === t.label ? null : t.label)}
            type="button"
          >
            {t.icon && <img src={t.icon} alt="" className="tag-icon-img" />}
            <span className="tag-name">{t.label}</span>
            <span className="tag-count">{t.count}</span>
          </button>
        ))}
      </div>

      {/* Reviews Cards List */}
      <div className="reviews-cards-grid">
        {(filterReviews.length > 0 ? filterReviews : reviewsSummary.items).map((rev) => (
          <div key={rev.id} className="review-card">
            {/* User row */}
            <div className="rev-user-row">
              {rev.avatar ? (
                <img src={rev.avatar} alt={rev.name} className="rev-avatar-img" />
              ) : (
                <div
                  className="rev-initial-avatar"
                  style={{ backgroundColor: rev.avatarBg, color: rev.avatarColor }}
                >
                  {rev.initial}
                </div>
              )}
              <div className="rev-user-meta">
                <h4 className="rev-user-name">{rev.name}</h4>
                <p className="rev-user-tenure">{rev.tenure}</p>
              </div>
            </div>

            {/* Stars & Date */}
            <div className="rev-stars-row">
              <div className="rev-stars-icons">
                {Array.from({ length: rev.stars || 5 }).map((_, i) => (
                  <Star key={i} size={11} fill="#222222" color="#222222" />
                ))}
              </div>
              <span className="rev-dot">·</span>
              <span className="rev-date">{rev.date}</span>
            </div>

            {/* Review text */}
            <p className="rev-comment-text">{rev.text}</p>
          </div>
        ))}
      </div>

      {/* Show all reviews button matching reference */}
      <button className="show-all-reviews-btn" type="button">
        Show all 19 reviews
      </button>
    </section>
  );
}
