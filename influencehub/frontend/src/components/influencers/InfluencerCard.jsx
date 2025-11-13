// ============================================
// frontend/src/components/influencers/InfluencerCard.jsx
// ============================================
import React from 'react';
import { Eye } from 'lucide-react';

function InfluencerCard({ influencer, onView }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={influencer.image || 'https://via.placeholder.com/100'}
          alt={influencer.name}
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className="font-bold text-gray-800">{influencer.name}</h3>
          <p className="text-sm text-gray-600">{influencer.platform}</p>
        </div>
      </div>
      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Niche:</span>
          <span className="font-semibold">{influencer.niche}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Followers:</span>
          <span className="font-semibold">{influencer.followers?.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Engagement:</span>
          <span className="font-semibold">{influencer.engagementRate}%</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Earnings:</span>
          <span className="font-semibold">${influencer.earnings?.toLocaleString()}</span>
        </div>
      </div>
      <button 
        onClick={() => onView && onView(influencer)}
        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-lg transition flex items-center justify-center space-x-2"
      >
        <Eye size={18} />
        <span>View Profile</span>
      </button>
    </div>
  );
}

export default InfluencerCard;