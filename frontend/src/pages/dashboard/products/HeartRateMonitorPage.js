// frontend/src/pages/dashboard/products/HeartRateMonitorPage.js

import React, { useState } from 'react';

const HeartRateMonitorPage = () => {
  const [heartRate, setHeartRate] = useState(null);
  const [isMonitoring, setIsMonitoring] = useState(false);

  const handleStartMonitoring = () => {
    setIsMonitoring(true);
    setHeartRate(72); // Simulate a heart rate monitoring
  };

  const handleStopMonitoring = () => {
    setIsMonitoring(false);
    setHeartRate(null); // Stop monitoring
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Heart Rate Monitor Management</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Heart Rate Status</h3>
          {isMonitoring ? (
            <div>
              <p>Heart Rate: {heartRate} bpm</p>
              <button
                onClick={handleStopMonitoring}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Stop Monitoring
              </button>
            </div>
          ) : (
            <button
              onClick={handleStartMonitoring}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
              Start Monitoring
            </button>
          )}
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">History</h3>
          <ul>
            <li>12/30/2024: 72 bpm</li>
            <li>12/29/2024: 75 bpm</li>
            {/* Add more history items here */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeartRateMonitorPage;
