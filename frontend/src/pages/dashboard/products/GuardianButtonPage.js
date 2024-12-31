// frontend/src/pages/dashboard/products/GuardianButtonPage.js

import React, { useState } from 'react';

const GuardianButtonPage = () => {
  const [isActive, setIsActive] = useState(true);  // Example state: whether the button is active or not
  const [batteryLevel, setBatteryLevel] = useState(90);  // Example state: battery level

  const handleToggleButton = () => {
    setIsActive(!isActive);  // Toggle the active state of the button
  };

  const handleBatteryChange = (amount) => {
    setBatteryLevel((prevLevel) => Math.min(100, Math.max(0, prevLevel + amount))); // Change the battery level
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Guardian Button Management</h2>
        
        {/* Active State */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Button Status</h3>
          <p>{isActive ? 'The Guardian Button is active' : 'The Guardian Button is inactive'}</p>
          <button
            onClick={handleToggleButton}
            className={`mt-4 px-6 py-3 rounded-lg ${isActive ? 'bg-red-500' : 'bg-green-500'} text-white hover:bg-opacity-80`}
          >
            {isActive ? 'Deactivate Button' : 'Activate Button'}
          </button>
        </div>

        {/* Battery Level */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Battery Level</h3>
          <p>{batteryLevel}%</p>
          <button
            onClick={() => handleBatteryChange(-10)}
            className="mt-4 px-6 py-3 rounded-lg bg-yellow-500 text-white hover:bg-opacity-80"
          >
            Decrease Battery
          </button>
          <button
            onClick={() => handleBatteryChange(10)}
            className="mt-4 ml-4 px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-opacity-80"
          >
            Increase Battery
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuardianButtonPage;
