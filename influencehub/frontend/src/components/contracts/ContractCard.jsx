import React from 'react';
import StatusBadge from '../shared/StatusBadge';

function ContractCard({ contract }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold text-gray-800">{contract.title}</h3>
          <p className="text-sm text-gray-600">{contract.influencer}</p>
        </div>
        <StatusBadge status={contract.status} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Campaign:</span>
          <span className="font-semibold">{contract.campaign || 'N/A'}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Duration:</span>
          <span className="font-semibold">{contract.startDate} - {contract.endDate}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Value:</span>
          <span className="font-semibold">${contract.value?.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}

export default ContractCard;