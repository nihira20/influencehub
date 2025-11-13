// ============================================
// frontend/src/components/shared/ToggleSwitch.jsx
// ============================================
import React from 'react';

function ToggleSwitch({ enabled, onChange, label }) {
  return (
    <div className="flex items-center justify-between">
      {label && <span className="text-sm font-medium text-gray-700">{label}</span>}
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
    </div>
  );
}

export default ToggleSwitch;