import React, { useState, useEffect } from 'react';
import DashboardHeader from '../../components/mobile/DashboardHeader';

const MobileDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Properly handle time updates
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <DashboardHeader />
      <main className="max-w-screen-xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <section className="bg-gradient-to-r from-[#008B8B] to-[#20B2AA] text-white shadow-lg rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold">Welcome back, Patrick!</h1>
          <p className="mt-2">
            Today is <strong>{currentTime.toLocaleDateString()}</strong>, and the current time is <strong>{currentTime.toLocaleTimeString()}</strong>.
          </p>
        </section>

        {/* Example Overview Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">Active Clients</h2>
            <p className="text-2xl font-bold text-[#008B8B]">245</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">Pending Tickets</h2>
            <p className="text-2xl font-bold text-[#FF7F50]">5</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">Connected Products</h2>
            <p className="text-2xl font-bold text-[#20B2AA]">87%</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MobileDashboard;
