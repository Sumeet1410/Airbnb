import React from 'react';
import { Search, Globe, Menu, User } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar-container">
      <div className="navbar-inner page-container">
        {/* Logo */}
        <a href="/" className="navbar-logo" aria-label="Airbnb homepage">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            className="airbnb-svg-logo"
          >
            <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.479.96 3.396l.011.315c0 4.298-3.047 7.806-7.1 7.806-2.585 0-4.945-1.423-6.4-3.673-1.455 2.25-3.815 3.673-6.4 3.673-4.053 0-7.1-3.508-7.1-7.806 0-1.127.279-2.221.849-3.513l.267-.598c.986-2.296 5.146-11.006 7.1-14.836l.533-1.025C9.537 1.963 10.992 1 13 1h3zm0 2h-3c-1.393 0-2.394.664-3.39 2.441l-.478.922C7.26 10.024 3.167 18.601 2.24 20.76l-.234.526c-.502 1.139-.706 2.034-.706 2.908 0 3.23 2.19 5.806 5.1 5.806 2.408 0 4.542-1.637 5.347-4.103l.253-.78.8 2.46c.805 2.466 2.939 4.103 5.347 4.103 2.91 0 5.1-2.576 5.1-5.806 0-.874-.204-1.769-.706-2.908l-.234-.526c-.927-2.159-5.02-10.736-6.892-14.397l-.478-.922C17.394 3.664 16.393 3 15 3h1zm0 13c2.485 0 4.5 2.015 4.5 4.5 0 2.213-1.488 4.072-3.535 4.434l-.265.037-.2.019-.2-.019c-2.047-.362-3.535-2.221-3.535-4.434 0-2.485 2.015-4.5 4.5-4.5zm0 2c-1.381 0-2.5 1.119-2.5 2.5 0 1.258.928 2.299 2.13 2.469l.17.021.2-.021c1.202-.17 2.13-1.211 2.13-2.469 0-1.381-1.119-2.5-2.5-2.5z" />
          </svg>
          <span className="airbnb-brand-text">airbnb</span>
        </a>

        {/* Compact Search Bar matching reference */}
        <div className="search-bar-pill">
          <button className="search-pill-btn search-pill-highlight">
            <img src="/assets/searchbar-house.png" alt="" className="searchbar-house-icon" />
            <span>Anywhere</span>
          </button>
          <span className="search-pill-divider" />
          <button className="search-pill-btn">
            <span>Anytime</span>
          </button>
          <span className="search-pill-divider" />
          <button className="search-pill-btn search-pill-guests">
            <span className="guests-text">Add guests</span>
            <div className="search-icon-circle">
              <Search size={14} strokeWidth={3} color="#ffffff" />
            </div>
          </button>
        </div>

        {/* User Navigation Right */}
        <div className="navbar-right">
          <button className="navbar-btn-link">Become a host</button>
          <button className="navbar-globe-btn" aria-label="Choose a language">
            <Globe size={18} />
          </button>
          <div className="navbar-profile-pill">
            <Menu size={16} strokeWidth={2.5} />
            <div className="navbar-user-avatar">
              <User size={16} color="#717171" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
