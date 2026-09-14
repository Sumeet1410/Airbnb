import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react';
import './ReservationCard.css';

export default function ReservationCard({
  onReserveSuccess,
  checkInDate = '10/18/2026',
  checkOutDate = '10/23/2026',
  nights = 5
}) {
  const [guestDropdownOpen, setGuestDropdownOpen] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);

  const dropdownRef = useRef(null);

  const totalGuests = adults + children;
  const guestLabel = `${totalGuests} guest${totalGuests > 1 ? 's' : ''}${
    infants > 0 ? `, ${infants} infant${infants > 1 ? 's' : ''}` : ''
  }${pets > 0 ? `, ${pets} pet${pets > 1 ? 's' : ''}` : ''}`;

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setGuestDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleReserve = () => {
    if (onReserveSuccess) {
      onReserveSuccess(`Reservation requested for ${nights} nights (${guestLabel})!`);
    }
  };

  return (
    <aside className="booking-aside" id="bookingSticky">
      {/* 10% Off Discount Banner */}
      <div className="discount-banner">
        <img
          src="/assets/discount.svg"
          alt=""
          aria-hidden="true"
          className="discount-badge-icon"
        />
        <div className="discount-copy">
          Get 10% off your next stay.<br />
          <a href="#terms" onClick={(e) => e.preventDefault()}>Terms apply</a>
        </div>
        <button
          className="discount-claim-btn"
          type="button"
          onClick={() => onReserveSuccess && onReserveSuccess("10% discount claimed!")}
        >
          Claim
        </button>
      </div>

      {/* Main Reservation Card */}
      <div className="booking-card">
        {/* Price Row */}
        <div className="booking-price-line">
          <span className="booking-price-amount">₹28,499</span>
          <span className="booking-price-duration">for 5 nights</span>
        </div>

        {/* Date & Guest Inputs Frame */}
        <div className="booking-inputs-frame">
          <div className="booking-dates-row">
            <div className="booking-date-cell cell-left">
              <div className="input-mini-label">CHECK-IN</div>
              <div className="input-date-val">{checkInDate}</div>
            </div>
            <div className="booking-date-cell cell-right">
              <div className="input-mini-label">CHECKOUT</div>
              <div className="input-date-val">{checkOutDate}</div>
            </div>
          </div>

          <div
            className="booking-guests-row"
            ref={dropdownRef}
            onClick={() => setGuestDropdownOpen(!guestDropdownOpen)}
            role="button"
            tabIndex={0}
            aria-expanded={guestDropdownOpen}
            onKeyDown={(e) => e.key === 'Enter' && setGuestDropdownOpen(!guestDropdownOpen)}
          >
            <div>
              <div className="input-mini-label">GUESTS</div>
              <div className="input-date-val">{guestLabel}</div>
            </div>
            <span className="guest-chevron">
              {guestDropdownOpen ? (
                <ChevronUp size={16} strokeWidth={2} />
              ) : (
                <ChevronDown size={16} strokeWidth={2} />
              )}
            </span>

            {/* Guest Selector Popover */}
            {guestDropdownOpen && (
              <div
                className="booking-guest-popover"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="guest-pop-row">
                  <div>
                    <div className="guest-pop-title">Adults</div>
                    <div className="guest-pop-sub">Age 13+</div>
                  </div>
                  <div className="guest-pop-controls">
                    <button
                      className="pop-btn"
                      disabled={adults <= 1}
                      onClick={() => setAdults(adults - 1)}
                      type="button"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="pop-count">{adults}</span>
                    <button
                      className="pop-btn"
                      disabled={adults + children >= 3}
                      onClick={() => setAdults(adults + 1)}
                      type="button"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>

                <div className="guest-pop-row">
                  <div>
                    <div className="guest-pop-title">Children</div>
                    <div className="guest-pop-sub">Ages 2–12</div>
                  </div>
                  <div className="guest-pop-controls">
                    <button
                      className="pop-btn"
                      disabled={children <= 0}
                      onClick={() => setChildren(children - 1)}
                      type="button"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="pop-count">{children}</span>
                    <button
                      className="pop-btn"
                      disabled={adults + children >= 3}
                      onClick={() => setChildren(children + 1)}
                      type="button"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>

                <div className="guest-pop-row">
                  <div>
                    <div className="guest-pop-title">Infants</div>
                    <div className="guest-pop-sub">Under 2</div>
                  </div>
                  <div className="guest-pop-controls">
                    <button
                      className="pop-btn"
                      disabled={infants <= 0}
                      onClick={() => setInfants(infants - 1)}
                      type="button"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="pop-count">{infants}</span>
                    <button
                      className="pop-btn"
                      disabled={infants >= 2}
                      onClick={() => setInfants(infants + 1)}
                      type="button"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>

                <div className="guest-pop-row">
                  <div>
                    <div className="guest-pop-title">Pets</div>
                    <div className="guest-pop-sub">Service animals allowed</div>
                  </div>
                  <div className="guest-pop-controls">
                    <button
                      className="pop-btn"
                      disabled={pets <= 0}
                      onClick={() => setPets(pets - 1)}
                      type="button"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="pop-count">{pets}</span>
                    <button
                      className="pop-btn"
                      disabled={pets >= 2}
                      onClick={() => setPets(pets + 1)}
                      type="button"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>

                <div className="guest-pop-footer">
                  <button
                    className="guest-pop-close"
                    type="button"
                    onClick={() => setGuestDropdownOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Cancellation Notice */}
        <div className="booking-cancellation-notice">
          Free cancellation before <b>17 October</b>
        </div>

        {/* Reserve Action Button */}
        <button
          className="booking-reserve-btn"
          type="button"
          id="reserveBtn"
          onClick={handleReserve}
        >
          Reserve
        </button>

        {/* Subtext */}
        <div className="booking-no-charge-text">
          You won't be charged yet
        </div>
      </div>

      {/* Report this listing Link */}
      <div className="report-listing-row">
        <span className="report-flag-icon">
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}
          >
            <path d="m7.5011 1c.5272 0 .9591.40794.99725.92537l.00275.07463v1h5.5c.31265 0 .5435.281645.4935.581075l-.01275.056285-.96125 3.36264.96125 3.36265c.08055.2818-.0967.5625-.36775.62465l-.0554.00945-.0576.00325h-5.5c-.5272 0-.9591-.40795-.99725-.92535l-.00275-.07465v-1h-5v6h-1v-14zm1 3h-1v4h1z" />
          </svg>
        </span>
        <a href="#report" onClick={(e) => e.preventDefault()}>Report this listing</a>
      </div>
    </aside>
  );
}
