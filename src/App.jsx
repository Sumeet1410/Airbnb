import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import StickyNav from './components/Navbar/StickyNav';
import ListingHeader from './components/ListingHeader/ListingHeader';
import PhotoHero from './components/PhotoHero/PhotoHero';
import ReservationCard from './components/Reservation/ReservationCard';
import PropertyOverview from './components/PropertyInfo/PropertyOverview';
import SleepingSection from './components/PropertyInfo/SleepingSection';
import AmenitiesSection from './components/PropertyInfo/AmenitiesSection';
import CalendarSection from './components/PropertyInfo/CalendarSection';
import ReviewsSection from './components/Reviews/ReviewsSection';
import LocationSection from './components/Location/LocationSection';
import HostSection from './components/Host/HostSection';
import ThingsToKnow from './components/ThingsToKnow/ThingsToKnow';
import NearbyStays from './components/ThingsToKnow/NearbyStays';
import PhotoTourModal from './components/Modals/PhotoTourModal';
import LightboxModal from './components/Modals/LightboxModal';
import AmenitiesModal from './components/Modals/AmenitiesModal';

import { listingData, allPhotos } from './data/listingData';
import './App.css';

export default function App() {
  // Modal & Overlay states
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isAmenitiesOpen, setIsAmenitiesOpen] = useState(false);

  // Date selection state
  const [selectedStart, setSelectedStart] = useState(18);
  const [selectedEnd, setSelectedEnd] = useState(23);
  const [startMonth, setStartMonth] = useState('Oct');
  const [endMonth, setEndMonth] = useState('Oct');

  // Feedback Toast state
  const [toast, setToast] = useState(null);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  // Date calculations
  const calculateNights = () => {
    if (selectedStart && selectedEnd && selectedEnd > selectedStart) {
      return selectedEnd - selectedStart;
    }
    return 5;
  };

  const currentNights = calculateNights();
  const checkInString = `${selectedStart} ${startMonth} 2026`;
  const checkOutString = `${selectedEnd} ${endMonth} 2026`;

  const handleSelectDate = (day, month) => {
    if (!selectedStart || (selectedStart && selectedEnd)) {
      setSelectedStart(day);
      setStartMonth(month);
      setSelectedEnd(null);
    } else if (selectedStart && !selectedEnd) {
      if (day > selectedStart) {
        setSelectedEnd(day);
        setEndMonth(month);
      } else {
        setSelectedStart(day);
        setStartMonth(month);
      }
    }
  };

  const handleClearDates = () => {
    setSelectedStart(null);
    setSelectedEnd(null);
  };

  // Lightbox handlers (invoked strictly from within PhotoTourModal)
  const handleOpenLightbox = (index = 0) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const handlePrevPhoto = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : allPhotos.length - 1));
  };

  const handleNextPhoto = () => {
    setLightboxIndex((prev) => (prev < allPhotos.length - 1 ? prev + 1 : 0));
  };

  // Reserve button action
  const handleScrollToReserve = () => {
    const el = document.getElementById('bookingSticky');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="airbnb-app-root">
      {/* Toast Notification */}
      {toast && (
        <div className="airbnb-toast" role="alert">
          {toast}
        </div>
      )}

      {/* Top Main Navigation */}
      <Navbar />

      {/* Sticky Subnav on scroll */}
      <StickyNav onReserveClick={handleScrollToReserve} />

      {/* Main Listing Content Container */}
      <main className="page-container listing-main-container" id="main">
        {/* Listing Title & Share/Save */}
        <ListingHeader
          title={listingData.title}
          onShare={() => showToast("Share options")}
          onSaveChange={(isSaved) =>
            showToast(isSaved ? "Saved to wishlist" : "Removed from wishlist")
          }
        />

        {/* 5-Photo Hero Grid - Clicking any photo opens strictly the Photo Tour */}
        <PhotoHero
          images={listingData.heroImages}
          onOpenTour={() => setIsTourOpen(true)}
        />

        {/* 2-Column Split: Content on Left, Sticky Reservation Card on Right */}
        <div className="listing-layout-columns">
          {/* Left Column: Details, Sleeping, Amenities, Interactive Calendar */}
          <div className="listing-left-column" id="contentLeft">
            {/* Property Specs, Guest Favourite, Host Row, Highlights, Description */}
            <PropertyOverview data={listingData} />

            <div className="section-divider" />

            {/* Sleeping Arrangements */}
            <SleepingSection arrangements={listingData.sleepingArrangements} />

            <div className="section-divider" />

            {/* Amenities Grid */}
            <AmenitiesSection onOpenAmenitiesModal={() => setIsAmenitiesOpen(true)} />

            <div className="section-divider" />

            {/* Interactive 2-Month Calendar */}
            <CalendarSection
              nights={currentNights}
              checkInDate={checkInString}
              checkOutDate={checkOutString}
              selectedStart={selectedStart}
              selectedEnd={selectedEnd}
              onSelectDate={handleSelectDate}
              onClearDates={handleClearDates}
            />
          </div>

          {/* Right Column: Sticky Reservation Widget */}
          <div className="listing-right-column">
            <ReservationCard
              price={listingData.price}
              rating={listingData.rating}
              checkInDate={checkInString}
              checkOutDate={checkOutString}
              nights={currentNights}
              onReserveSuccess={(msg) => showToast(msg)}
            />
          </div>
        </div>

        {/* Full-width Wide Sections below calendar */}
        <div id="wideSections" className="wide-sections">
          {/* Reviews Section */}
          <ReviewsSection reviewsSummary={listingData.reviewsSummary} />

          <div className="section-divider" />

          {/* Location Section */}
          <LocationSection
            location={listingData.location}
            neighbourhoodBio={listingData.host.bio}
          />

          <div className="section-divider" />

          {/* Host Section */}
          <HostSection
            host={listingData.host}
            onMessageHost={() => showToast("Host messaging opened!")}
          />

          <div className="section-divider" />

          {/* Things to Know */}
          <ThingsToKnow thingsToKnow={listingData.thingsToKnow} />

          <div className="section-divider" />

          {/* More Stays Nearby */}
          <NearbyStays stays={listingData.nearbyStays} />
        </div>
      </main>

      {/* View 2: Full-screen Photo Tour Modal */}
      <PhotoTourModal
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
        rooms={listingData.photoTourRooms}
        onSelectPhoto={(idx) => {
          handleOpenLightbox(idx);
        }}
      />

      {/* View 3: Single-Photo Lightbox Viewer (Accessible via Photo Tour) */}
      <LightboxModal
        isOpen={isLightboxOpen}
        photos={allPhotos}
        activeIndex={lightboxIndex}
        onClose={() => setIsLightboxOpen(false)}
        onPrev={handlePrevPhoto}
        onNext={handleNextPhoto}
        onReturnToTour={() => {
          setIsLightboxOpen(false);
          setIsTourOpen(true);
        }}
      />

      {/* Amenities Modal */}
      <AmenitiesModal
        isOpen={isAmenitiesOpen}
        onClose={() => setIsAmenitiesOpen(false)}
      />
    </div>
  );
}
