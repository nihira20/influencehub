// ============================================
// frontend/src/components/payments/PaymentCard.jsx
// ============================================
import React from 'react';
import StatusBadge from '../shared/StatusBadge';

function PaymentCard({ payment }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold text-gray-800">{payment.invoiceNumber}</h3>
          <p className="text-sm text-gray-600">{payment.influencer}</p>
        </div>
        <StatusBadge status={payment.status} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Campaign:</span>
          <span className="font-semibold">{payment.campaign}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Amount:</span>
          <span className="font-semibold">${payment.amount?.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Due Date:</span>
          <span className="font-semibold">{payment.dueDate}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Method:</span>
          <span className="font-semibold">{payment.paymentMethod}</span>
        </div>
      </div>
    </div>
  );
}

export default PaymentCard;