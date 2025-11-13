import React from 'react';

function TabNavigation({ tabs, activeTab, onTabChange }) {
  return (
    <div className="flex space-x-2 mb-6 border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex items-center space-x-2 px-4 py-3 font-medium transition border-b-2 ${
            activeTab === tab.id
              ? 'border-purple-600 text-purple-600'
              : 'border-transparent text-gray-600 hover:text-gray-800'
          }`}
        >
          {tab.icon && <tab.icon size={18} />}
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
}

export default TabNavigation;