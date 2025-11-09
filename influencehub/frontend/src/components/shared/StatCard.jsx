import React from 'react';

function StatCard({ icon: Icon, title, value, change, changeColor = 'green' }) {
  const colorClasses = {
    green: 'text-green-600',
    red: 'text-red-600',
    blue: 'text-blue-600',
    yellow: 'text-yellow-600'
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-gray-600 text-sm mb-2">{title}</p>
          <h3 className="text-3xl font-bold text-gray-800 mb-2">{value}</h3>
          {change && (
            <p className={`text-sm font-medium ${colorClasses[changeColor]}`}>
              {change}
            </p>
          )}
        </div>
        <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-3 rounded-lg">
          <Icon className="text-purple-600" size={24} />
        </div>
      </div>
    </div>
  );
}

export default StatCard;