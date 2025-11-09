// ============================================
// src/pages/Settings.jsx
// ============================================
import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Modal from '../components/shared/Modal';
import { useNavigate } from 'react-router-dom';
import { Bell, Users, Database, Plus, LogOut } from 'lucide-react';

function Settings() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('notifications');
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');
  
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    campaignUpdates: false
  });

  const tabs = [
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'data', label: 'Data', icon: Database }
  ];

  const handleInvite = (e) => {
    e.preventDefault();
    alert(`Invitation sent to ${inviteEmail}`);
    setInviteEmail('');
    setIsInviteModalOpen(false);
  };

  const handleExportData = () => {
    alert('Exporting data as CSV...');
  };

  const handleDeleteData = () => {
    if (window.confirm('Are you sure you want to delete all your data? This action cannot be undone.')) {
      alert('All data has been deleted');
    }
  };

  const handleLogout = () => {
    navigate('/login');
  };

  const handleSavePreferences = () => {
    alert('Preferences saved successfully!');
  };

  const ToggleSwitch = ({ enabled, onChange }) => (
    <button
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
        enabled ? 'bg-purple-600' : 'bg-gray-300'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
          enabled ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Settings</h1>
            <p className="text-gray-600">Manage your account and preferences</p>
          </div>

          {/* Tabs */}
          <div className="flex space-x-2 mb-6 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-3 font-medium transition border-b-2 ${
                  activeTab === tab.id
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-600 hover:text-gray-800'
                }`}
              >
                <tab.icon size={18} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Notification Preferences</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div>
                      <h3 className="font-semibold text-gray-800">Email Notifications</h3>
                      <p className="text-sm text-gray-600">Receive notifications via email</p>
                    </div>
                    <ToggleSwitch
                      enabled={notifications.emailNotifications}
                      onChange={() => setNotifications({ ...notifications, emailNotifications: !notifications.emailNotifications })}
                    />
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <div>
                      <h3 className="font-semibold text-gray-800">Campaign Updates</h3>
                      <p className="text-sm text-gray-600">Get notified about campaign status changes</p>
                    </div>
                    <ToggleSwitch
                      enabled={notifications.campaignUpdates}
                      onChange={() => setNotifications({ ...notifications, campaignUpdates: !notifications.campaignUpdates })}
                    />
                  </div>
                </div>
                <button
                  onClick={handleSavePreferences}
                  className="mt-6 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-600 transition"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          )}

          {/* Team Tab */}
          {activeTab === 'team' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-800">Team Members</h2>
                  <button
                    onClick={() => setIsInviteModalOpen(true)}
                    className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-600 transition flex items-center space-x-2"
                  >
                    <Plus size={18} />
                    <span>Invite Member</span>
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-4 border-b border-gray-100">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                        CU
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Current User</h3>
                        <p className="text-sm text-gray-600">Admin</p>
                      </div>
                    </div>
                    <button className="text-purple-600 hover:text-purple-700 font-medium">
                      Manage
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Data Tab */}
          {activeTab === 'data' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Data Management</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Export Data</h3>
                    <p className="text-sm text-gray-600 mb-4">Download all your data as CSV files</p>
                    <button
                      onClick={handleExportData}
                      className="bg-purple-100 text-purple-700 px-6 py-2 rounded-lg hover:bg-purple-200 transition font-medium"
                    >
                      Export All Data
                    </button>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                      <h3 className="font-semibold text-red-800 mb-2">Danger Zone</h3>
                      <p className="text-sm text-red-600 mb-4">Permanently delete all your data</p>
                      <button
                        onClick={handleDeleteData}
                        className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition font-medium"
                      >
                        Delete All Data
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Account Actions</h2>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Invite Member Modal */}
      <Modal isOpen={isInviteModalOpen} onClose={() => setIsInviteModalOpen(false)} title="Invite Team Member">
        <form onSubmit={handleInvite} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              required
              value={inviteEmail}
              onChange={(e) => setInviteEmail(e.target.value)}
              placeholder="colleague@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option>Admin</option>
              <option>Manager</option>
              <option>Viewer</option>
            </select>
          </div>
          <div className="flex space-x-4 pt-4">
            <button
              type="button"
              onClick={() => setIsInviteModalOpen(false)}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:from-purple-700 hover:to-blue-600 transition"
            >
              Send Invite
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Settings;