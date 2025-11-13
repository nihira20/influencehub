// ============================================
// frontend/src/components/influencers/AddInfluencerModal.jsx
// ============================================
import React, { useState } from 'react';
import Modal from '../shared/Modal';
import Input from '../shared/input';

function AddInfluencerModal({ isOpen, onClose, onAdd }) {
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
    onAdd({
      ...formData,
      followers: parseInt(formData.followers),
      engagementRate: parseFloat(formData.engagementRate),
      earnings: parseInt(formData.earnings)
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Influencer">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
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
        <Input
          label="Niche"
          required
          value={formData.niche}
          onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
        />
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Followers"
            type="number"
            required
            value={formData.followers}
            onChange={(e) => setFormData({ ...formData, followers: e.target.value })}
          />
          <Input
            label="Engagement Rate (%)"
            type="number"
            step="0.1"
            required
            value={formData.engagementRate}
            onChange={(e) => setFormData({ ...formData, engagementRate: e.target.value })}
          />
        </div>
        <Input
          label="Earnings ($)"
          type="number"
          required
          value={formData.earnings}
          onChange={(e) => setFormData({ ...formData, earnings: e.target.value })}
        />
        <div className="flex space-x-4 pt-4">
          <button
            type="button"
            onClick={onClose}
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
  );
}

export default AddInfluencerModal;
