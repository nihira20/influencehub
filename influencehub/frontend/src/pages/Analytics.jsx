import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import { Eye, Heart, Users, DollarSign, ThumbsUp, MessageCircle, Share2 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

function Analytics() {
  const engagementData = [
    { month: 'Jan', views: 12000, engagement: 3200 },
    { month: 'Feb', views: 19000, engagement: 4100 },
    { month: 'Mar', views: 15000, engagement: 3800 },
    { month: 'Apr', views: 22000, engagement: 5200 },
    { month: 'May', views: 28000, engagement: 6500 },
    { month: 'Jun', views: 35000, engagement: 8200 }
  ];

  const platformData = [
    { name: 'Instagram', value: 35, color: '#E1306C' },
    { name: 'YouTube', value: 30, color: '#FF0000' },
    { name: 'TikTok', value: 25, color: '#000000' },
    { name: 'LinkedIn', value: 10, color: '#0077B5' }
  ];

  const StatCard = ({ icon: Icon, title, value, change, gradient }) => (
    <div className={`bg-gradient-to-br ${gradient} rounded-xl p-6 text-white shadow-lg`}>
      <div className="flex items-start justify-between mb-4">
        <div className="bg-white bg-opacity-20 p-3 rounded-lg">
          <Icon size={24} />
        </div>
      </div>
      <h3 className="text-3xl font-bold mb-2">{value}</h3>
      <p className="text-white text-opacity-90 text-sm">{title}</p>
      {change && <p className="text-xs mt-2 text-white text-opacity-80">{change}</p>}
    </div>
  );

  const MetricCard = ({ icon: Icon, title, value }) => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center space-x-3">
        <div className="bg-purple-100 p-3 rounded-lg">
          <Icon className="text-purple-600" size={20} />
        </div>
        <div>
          <p className="text-gray-600 text-sm">{title}</p>
          <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Analytics</h1>
            <p className="text-gray-600">Track your influencer marketing performance</p>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              icon={Eye}
              title="Total Views"
              value="131K"
              change="+12% from last period"
              gradient="from-purple-500 to-purple-600"
            />
            <StatCard
              icon={Heart}
              title="Total Engagement"
              value="31K"
              change="+18% from last period"
              gradient="from-pink-500 to-pink-600"
            />
            <StatCard
              icon={Users}
              title="Active Influencers"
              value="24"
              change="+4 this month"
              gradient="from-blue-500 to-blue-600"
            />
            <StatCard
              icon={DollarSign}
              title="Total Spent"
              value="$78K"
              change="+8% from last month"
              gradient="from-green-500 to-green-600"
            />
          </div>

          {/* Secondary Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <MetricCard icon={ThumbsUp} title="Total Likes" value="18.5K" />
            <MetricCard icon={MessageCircle} title="Total Comments" value="8.2K" />
            <MetricCard icon={Share2} title="Total Shares" value="4.3K" />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Engagement Trend */}
            <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Engagement Trend</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={engagementData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="views" stroke="#8b5cf6" strokeWidth={2} />
                  <Line type="monotone" dataKey="engagement" stroke="#ec4899" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Platform Distribution */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Platform Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={platformData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {platformData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;