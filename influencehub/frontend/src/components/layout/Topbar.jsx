
// ============================================
// frontend/src/components/layout/Topbar.jsx
// ============================================
import React from 'react';
import { Bell, User } from 'lucide-react';

function Topbar() {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          {/* Search or other topbar content */}
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg relative">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg">
            <User size={20} className="text-gray-600" />
            <span className="text-sm font-medium text-gray-700">User</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Topbar;