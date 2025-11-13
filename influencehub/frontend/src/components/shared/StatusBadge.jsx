// ============================================
// frontend/src/components/shared/StatusBadge.jsx
// ============================================
import React from 'react';

function StatusBadge({ status }) {
  const getStatusColor = (status) => {
    switch(status?.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'completed':
      case 'signed':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
      case 'sent':
        return 'bg-yellow-100 text-yellow-800';
      case 'upcoming':
        return 'bg-purple-100 text-purple-800';
      case 'draft':
        return 'bg-gray-100 text-gray-800';
      case 'overdue':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(status)}`}>
      {status}
    </span>
  );
}

export default StatusBadge;
