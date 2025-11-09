import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Modal from '../components/shared/Modal';
import { Plus, Search, Eye } from 'lucide-react';
import { mockInfluencers } from '../utils/mockData';

function Influencers() {
  const [influencers, setInfluencers] = useState(mockInfluencers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPlatform, setFilterPlatform] = useState('all');
  const [filterNiche, setFilterNiche] = useState('all');
  
  const [formData, setFormData] = useState({
    name: '',
    platform: 'Instagram',
    niche: '',
    followers: '',
    engagementRate: '',
    earnings: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInfluencer = {
      id: influencers.length + 1,
      ...formData,
      followers: parseInt(formData.followers),
      engagementRate: parseFloat(formData.engagementRate),
      earnings: parseInt(formData.earnings),
      image: 'https://via.placeholder.com/100'
    };
    setInfluencers([...influencers, newInfluencer]);
    setIsModalOpen(false);
    setFormData({
      name: '',
      platform: 'Instagram',
      niche: '',
      followers: '',
      engagementRate: '',
      earnings: ''
    });
  };

  const filteredInfluencers = influencers.filter(inf => {
    const matchesSearch = inf.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         inf.niche.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPlatform = filterPlatform === 'all' || inf.platform === filterPlatform;
    const matchesNiche = filterNiche === 'all' || inf.niche === filterNiche;
    return matchesSearch && matchesPlatform && matchesNiche;
  });

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Influencers</h1>
              <p className="text-gray-600">Search and manage influencers across platforms and niches</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-600 transition shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <Plus size={20} />
              <span>Add Influencer</span>
            </button>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search by name or niche..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <select
                value={filterPlatform}
                onChange={(e) => setFilterPlatform(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="all">All Platforms</option>
                <option value="Instagram">Instagram</option>
                <option value="YouTube">YouTube</option>
                <option value="TikTok">TikTok</option>
              </select>
              <select
                value={filterNiche}
                onChange={(e) => setFilterNiche(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="all">All Niches</option>
                <option value="Fashion">Fashion</option>
                <option value="Tech">Tech</option>
                <option value="Lifestyle">Lifestyle</option>
              </select>
            </div>
          </div>

          {/* Influencers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInfluencers.map((influencer) => (
              <div key={influencer.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={influencer.image}
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
                    <span className="font-semibold">{influencer.followers.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Engagement:</span>
                    <span className="font-semibold">{influencer.engagementRate}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Earnings:</span>
                    <span className="font-semibold">${influencer.earnings.toLocaleString()}</span>
                  </div>
                </div>
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-lg transition flex items-center justify-center space-x-2">
                  <Eye size={18} />
                  <span>View Profile</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Influencer Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Influencer"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Platform</label>
            <select
              value={formData.platform}
              onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option>Instagram</option>
              <option>YouTube</option>
              <option>TikTok</option>
              <option>Twitter</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Niche</label>
            <input
              type="text"
              required
              value={formData.niche}
              onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Followers</label>
              <input
                type="number"
                required
                value={formData.followers}
                onChange={(e) => setFormData({ ...formData, followers: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Engagement Rate (%)</label>
              <input
                type="number"
                step="0.1"
                required
                value={formData.engagementRate}
                onChange={(e) => setFormData({ ...formData, engagementRate: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Earnings ($)</label>
            <input
              type="number"
              required
              value={formData.earnings}
              onChange={(e) => setFormData({ ...formData, earnings: e.target.value })}
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
              Save Influencer
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Influencers;