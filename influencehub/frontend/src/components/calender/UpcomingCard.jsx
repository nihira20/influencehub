// ============================================
// frontend/src/components/calendar/UpcomingCard.jsx
// ============================================
import React from 'react';

function UpcomingCard({ event }) {
  return (
    <div className="border-l-4 border-purple-500 pl-4 mb-4">
      <h4 className="font-semibold text-gray-800">{event.title}</h4>
      <p className="text-sm text-gray-600">{event.influencer}</p>
      <div className="flex items-center space-x-2 mt-1">
        <span className="text-xs bg-gray-100 px-2 py-1 rounded">{event.platform}</span>
        <span className="text-xs text-gray-500">{event.date}</span>
      </div>
    </div>
  );
}

export default UpcomingCard;