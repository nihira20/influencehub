
// ============================================
// frontend/src/components/campaigns/CampaignCard.jsx
// ============================================
import React from 'react';
import StatusBadge from '../shared/StatusBadge';

function CampaignCard({ campaign }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-1">{campaign.name}</h3>
          <p className="text-gray-600">{campaign.client}</p>
        </div>
        <StatusBadge status={campaign.status} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Platform:</span>
          <span className="font-semibold">{campaign.platform}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Duration:</span>
          <span className="font-semibold">{campaign.startDate} - {campaign.endDate}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Budget:</span>
          <span className="font-semibold">${campaign.budget?.toLocaleString()}</span>
        </div>
      </div>
      {campaign.description && (
        <p className="text-sm text-gray-600 mt-4">{campaign.description}</p>
      )}
    </div>
  );
}

export default CampaignCard;
