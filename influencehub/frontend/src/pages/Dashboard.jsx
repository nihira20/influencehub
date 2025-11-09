import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import StatCard from '../components/shared/StatCard';
import { Users, Megaphone, DollarSign, Calendar, Plus } from 'lucide-react';

function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
              <p className="text-gray-600">Welcome back! Here's your influence network overview</p>
            </div>
            <button className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-600 transition shadow-lg hover:shadow-xl flex items-center space-x-2">
              <Plus size={20} />
              <span>New Campaign</span>
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              icon={Users}
              title="Total Influencers"
              value="24"
              change="+12% from last month"
              changeColor="green"
            />
            <StatCard
              icon={Megaphone}
              title="Active Campaigns"
              value="8"
              change="2 total"
              changeColor="blue"
            />
            <StatCard
              icon={DollarSign}
              title="Total Budget"
              value="$125,000"
              change="+8% from last month"
              changeColor="green"
            />
            <StatCard
              icon={Calendar}
              title="Scheduled Posts"
              value="15"
              change="0 pending payments"
              changeColor="red"
            />
          </div>

          {/* Top Influencers Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Top Influencers</h2>
            <div className="text-center py-12 text-gray-500">
              <Users size={48} className="mx-auto mb-4 text-gray-300" />
              <p>No influencer data available yet</p>
              <p className="text-sm mt-2">Add influencers to see performance metrics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;