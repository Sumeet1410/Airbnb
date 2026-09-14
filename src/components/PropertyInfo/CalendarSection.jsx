import React from 'react';
import { ChevronLeft, ChevronRight, Keyboard } from 'lucide-react';
import './PropertyInfo.css';

export default function CalendarSection({
  nights = 5,
  checkInDate = '18 Oct 2026',
  checkOutDate = '23 Oct 2026',
  selectedStart = 18,
  selectedEnd = 23,
  onSelectDate,
  onClearDates
}) {
  // Days of week header
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  // October 2026: Oct 1 starts on Thursday (index 4)
  // Total 31 days
  const octOffset = 4;
  const octDays = Array.from({ length: 31 }, (_, i) => i + 1);

  // November 2026: Nov 1 starts on Sunday (index 0)
  // Total 30 days
  const novOffset = 0;
  const novDays = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="calendar-section">
      <div className="calendar-header-block">
        <h3 className="section-title">{nights} nights in Candolim</h3>
        <p className="calendar-subtitle">{checkInDate} - {checkOutDate}</p>
      </div>

      <div className="calendar-months-container">
        {/* Navigation arrows */}
        <div className="calendar-nav-bar">
          <button className="cal-nav-btn" aria-label="Previous month">
            <ChevronLeft size={18} />
          </button>
          <button className="cal-nav-btn" aria-label="Next month">
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="months-grid">
          {/* Month 1: October 2026 */}
          <div className="month-table">
            <h4 className="month-name">October 2026</h4>
            <div className="weekdays-row">
              {daysOfWeek.map((d, i) => (
                <span key={i} className="weekday-label">{d}</span>
              ))}
            </div>
            <div className="days-grid">
              {Array.from({ length: octOffset }).map((_, i) => (
                <div key={`empty-oct-${i}`} className="cal-day empty" />
              ))}
              {octDays.map((day) => {
                const isStart = day === selectedStart;
                const isEnd = day === selectedEnd;
                const inRange = day > selectedStart && day < selectedEnd;
                let dayClass = 'cal-day';
                if (isStart) dayClass += ' selected-start';
                if (isEnd) dayClass += ' selected-end';
                if (inRange) dayClass += ' in-range';

                return (
                  <button
                    key={`oct-${day}`}
                    className={dayClass}
                    onClick={() => onSelectDate && onSelectDate(day, 'Oct')}
                  >
                    <span>{day}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Month 2: November 2026 */}
          <div className="month-table">
            <h4 className="month-name">November 2026</h4>
            <div className="weekdays-row">
              {daysOfWeek.map((d, i) => (
                <span key={i} className="weekday-label">{d}</span>
              ))}
            </div>
            <div className="days-grid">
              {Array.from({ length: novOffset }).map((_, i) => (
                <div key={`empty-nov-${i}`} className="cal-day empty" />
              ))}
              {novDays.map((day) => {
                const isFaded = day > 17 && day < 24 || day > 28;
                return (
                  <button
                    key={`nov-${day}`}
                    className={`cal-day ${isFaded ? 'faded-day' : ''}`}
                    onClick={() => onSelectDate && onSelectDate(day, 'Nov')}
                  >
                    <span>{day}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Footer controls */}
      <div className="calendar-footer">
        <button className="cal-keyboard-btn" aria-label="Keyboard shortcuts">
          <Keyboard size={18} />
        </button>
        <button className="cal-clear-btn" onClick={onClearDates}>
          Clear dates
        </button>
      </div>
    </div>
  );
}
