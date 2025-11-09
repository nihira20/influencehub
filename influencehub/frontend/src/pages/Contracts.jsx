// ============================================
// src/pages/Contracts.jsx
// ============================================
import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Modal from '../components/shared/Modal';
import { Plus, FileText, Search } from 'lucide-react';
import { mockContracts } from '../utils/mockData';

function Contracts() {
  const [contracts, setContracts] = useState(mockContracts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const [formData, setFormData] = useState({
    title: '',
    influencer: '',
    campaign: '',
    startDate: '',
    endDate: '',
    value: '',
    status: 'Draft'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContract = {
      id: contracts.length + 1,
      ...formData,
      value: parseInt(formData.value)
    };
    setContracts([...contracts, newContract]);
    setIsModalOpen(false);
    setFormData({
      title: '',
      influencer: '',
      campaign: '',
      startDate: '',
      endDate: '',
      value: '',
      status: 'Draft'
    });
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Signed': return 'bg-blue-100 text-blue-800';
      case 'Sent': return 'bg-yellow-100 text-yellow-800';
      case 'Draft': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const stats = {
    total: contracts.length,
    active: contracts.filter(c => c.status === 'Active').length,
    pending: contracts.filter(c => c.status === 'Sent').length,
    totalValue: contracts.reduce((sum, c) => sum + c.value, 0)
  };

  const filteredContracts = contracts.filter(contract => {
    const matchesSearch = contract.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contract.influencer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || contract.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Contracts</h1>
              <p className="text-gray-600">Manage influencer contracts and agreements</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-600 transition shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <Plus size={20} />
              <span>New Contract</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <FileText className="text-purple-600" size={20} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{stats.total}</h3>
              </div>
              <p className="text-gray-600 text-sm">Total Contracts</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-green-100 rounded-lg">
                  <FileText className="text-green-600" size={20} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{stats.active}</h3>
              </div>
              <p className="text-gray-600 text-sm">Active</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FileText className="text-blue-600" size={20} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{stats.pending}</h3>
              </div>
              <p className="text-gray-600 text-sm">Pending Signature</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <FileText className="text-orange-600" size={20} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">${stats.totalValue.toLocaleString()}</h3>
              </div>
              <p className="text-gray-600 text-sm">Total Value</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search contracts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="all">All Status</option>
                <option value="Draft">Draft</option>
                <option value="Sent">Sent</option>
                <option value="Signed">Signed</option>
                <option value="Active">Active</option>
              </select>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-4 px-6 text-gray-600 font-semibold">Contract Title</th>
                    <th className="text-left py-4 px-6 text-gray-600 font-semibold">Influencer</th>
                    <th className="text-left py-4 px-6 text-gray-600 font-semibold">Campaign</th>
                    <th className="text-left py-4 px-6 text-gray-600 font-semibold">Duration</th>
                    <th className="text-left py-4 px-6 text-gray-600 font-semibold">Value</th>
                    <th className="text-left py-4 px-6 text-gray-600 font-semibold">Status</th>
                    <th className="text-left py-4 px-6 text-gray-600 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredContracts.map((contract) => (
                    <tr key={contract.id} className="border-t border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-6 font-semibold text-gray-800">{contract.title}</td>
                      <td className="py-4 px-6 text-gray-600">{contract.influencer}</td>
                      <td className="py-4 px-6 text-gray-600">{contract.campaign}</td>
                      <td className="py-4 px-6 text-gray-600 text-sm">{contract.startDate} - {contract.endDate}</td>
                      <td className="py-4 px-6 font-semibold text-gray-800">${contract.value.toLocaleString()}</td>
                      <td className="py-4 px-6">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(contract.status)}`}>
                          {contract.status}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <button className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create New Contract">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Contract Title</label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
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
                value={formData.campaign}
                onChange={(e) => setFormData({ ...formData, campaign: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Optional"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
              <input
                type="date"
                required
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
              <input
                type="date"
                required
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Total Value ($)</label>
              <input
                type="number"
                required
                value={formData.value}
                onChange={(e) => setFormData({ ...formData, value: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option>Draft</option>
                <option>Sent</option>
                <option>Signed</option>
                <option>Active</option>
              </select>
            </div>
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
              Create Contract
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Contracts;