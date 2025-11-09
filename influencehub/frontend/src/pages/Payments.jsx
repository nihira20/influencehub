// ============================================
// src/pages/Payments.jsx
// ============================================
import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Modal from '../components/shared/Modal';
import { Plus, DollarSign, CheckCircle, Clock, AlertCircle } from 'lucide-react';

function Payments() {
  const [payments, setPayments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    influencer: '',
    campaign: '',
    amount: '',
    dueDate: '',
    paymentMethod: 'Bank Transfer',
    notes: ''
  });

  const stats = {
    total: payments.reduce((sum, p) => sum + p.amount, 0),
    paid: payments.filter(p => p.status === 'Paid').reduce((sum, p) => sum + p.amount, 0),
    pending: payments.filter(p => p.status === 'Pending').reduce((sum, p) => sum + p.amount, 0),
    overdue: payments.filter(p => p.status === 'Overdue').reduce((sum, p) => sum + p.amount, 0)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPayment = {
      id: payments.length + 1,
      ...formData,
      amount: parseFloat(formData.amount),
      invoiceNumber: `INV-${String(payments.length + 1).padStart(3, '0')}`,
      status: 'Pending',
      createdAt: new Date().toISOString().split('T')[0]
    };
    setPayments([...payments, newPayment]);
    setIsModalOpen(false);
    setFormData({
      influencer: '',
      campaign: '',
      amount: '',
      dueDate: '',
      paymentMethod: 'Bank Transfer',
      notes: ''
    });
  };

  const SummaryCard = ({ icon: Icon, title, amount, count, color }) => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg bg-${color}-100`}>
          <Icon className={`text-${color}-600`} size={24} />
        </div>
      </div>
      <h3 className="text-3xl font-bold text-gray-800 mb-2">${amount.toLocaleString()}</h3>
      <p className="text-gray-600 text-sm">{title}</p>
      <p className="text-xs text-gray-500 mt-1">{count} payments</p>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Payments</h1>
              <p className="text-gray-600">Track and manage influencer payments</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-600 transition shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <Plus size={20} />
              <span>New Payment</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <SummaryCard
              icon={DollarSign}
              title="Total Payments"
              amount={stats.total}
              count={payments.length}
              color="purple"
            />
            <SummaryCard
              icon={CheckCircle}
              title="Paid"
              amount={stats.paid}
              count={payments.filter(p => p.status === 'Paid').length}
              color="green"
            />
            <SummaryCard
              icon={Clock}
              title="Pending"
              amount={stats.pending}
              count={payments.filter(p => p.status === 'Pending').length}
              color="yellow"
            />
            <SummaryCard
              icon={AlertCircle}
              title="Overdue"
              amount={stats.overdue}
              count={payments.filter(p => p.status === 'Overdue').length}
              color="red"
            />
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Payment Records</h2>
            {payments.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <DollarSign size={48} className="mx-auto mb-4 text-gray-300" />
                <p>No payments found</p>
                <p className="text-sm mt-2">Create your first payment record</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-gray-600">Invoice</th>
                      <th className="text-left py-3 px-4 text-gray-600">Influencer</th>
                      <th className="text-left py-3 px-4 text-gray-600">Campaign</th>
                      <th className="text-left py-3 px-4 text-gray-600">Amount</th>
                      <th className="text-left py-3 px-4 text-gray-600">Due Date</th>
                      <th className="text-left py-3 px-4 text-gray-600">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments.map((payment) => (
                      <tr key={payment.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 font-semibold">{payment.invoiceNumber}</td>
                        <td className="py-3 px-4">{payment.influencer}</td>
                        <td className="py-3 px-4">{payment.campaign}</td>
                        <td className="py-3 px-4 font-semibold">${payment.amount.toLocaleString()}</td>
                        <td className="py-3 px-4">{payment.dueDate}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            payment.status === 'Paid' ? 'bg-green-100 text-green-800' :
                            payment.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {payment.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create New Payment">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Influencer</label>
            <input
              type="text"
              required
              value={formData.influencer}
              onChange={(e) => setFormData({ ...formData, influencer: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Campaign</label>
            <input
              type="text"
              required
              value={formData.campaign}
              onChange={(e) => setFormData({ ...formData, campaign: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Amount ($)</label>
              <input
                type="number"
                required
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Due Date</label>
              <input
                type="date"
                required
                value={formData.dueDate}
                onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
            <select
              value={formData.paymentMethod}
              onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option>Bank Transfer</option>
              <option>PayPal</option>
              <option>Stripe</option>
              <option>Check</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Notes (Optional)</label>
            <textarea
              rows="3"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="flex space-x-4 pt-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:from-purple-700 hover:to-blue-600 transition"
            >
              Create Payment
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Payments;