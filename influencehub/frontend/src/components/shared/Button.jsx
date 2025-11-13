// ============================================
// frontend/src/components/shared/Button.jsx
// ============================================
import React from 'react';

function Button({ children, onClick, variant = 'primary', type = 'button', className = '' }) {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:from-purple-700 hover:to-blue-600 shadow-lg hover:shadow-xl',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50',
    danger: 'bg-red-600 text-white hover:bg-red-700'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
