
// ============================================
// frontend/src/components/calendar/CalendarCell.jsx
// ============================================
import React from 'react';

function CalendarCell({ day, events, isSelected, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`aspect-square border rounded-lg p-2 cursor-pointer transition ${
        isSelected ? 'bg-purple-100 border-purple-500' : 'border-gray-200 hover:bg-gray-50'
      }`}
    >
      <div className="text-sm font-semibold text-gray-800">{day}</div>
      {events && events.length > 0 && (
        <div className="mt-1">
          {events.slice(0, 2).map(event => (
            <div key={event.id} className="text-xs bg-purple-200 text-purple-800 rounded px-1 py-0.5 mb-1 truncate">
              {event.title}
            </div>
          ))}
          {events.length > 2 && (
            <div className="text-xs text-gray-500">+{events.length - 2} more</div>
          )}
        </div>
      )}
    </div>
  );
}

export default CalendarCell;