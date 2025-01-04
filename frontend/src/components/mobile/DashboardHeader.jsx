import React, { useState, useEffect } from 'react';
// Temporarily replace with placeholder if needed to debug
import DashboardHeader from '../../components/mobile/DashboardHeader';

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const formattedDate = currentTime.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Replace this with <div>Header Placeholder</div> to test */}
      <DashboardHeader />
      <main className="max-w-screen-xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <section className="bg-gradient-to-r from-[#008B8B] to-[#20B2AA] text-white shadow-lg rounded-lg p-8 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold">Welcome back, Patrick</h1>
              <p className="text-lg mt-2">
                Today is {formattedDate}, and the current time is {formattedTime}.
              </p>
              <p className="mt-4">
                iHealth-Sync is proud to collaborate with MobileCare to enhance healthcare services and connectivity.
              </p>
            </div>
            <div className="flex flex-col items-end">
              <div className="bg-white text-[#008B8B] p-4 rounded-lg shadow-md">
                <p className="text-lg font-bold">Quick Overview</p>
                <ul className="mt-2 space-y-1">
                  <li>Active Clients: <strong>245</strong></li>
                  <li>Pending Tickets: <strong>5</strong></li>
                  <li>Connected Products: <strong>87%</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Grid Layout for Main Features */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Clients Overview',
              description: 'Track and manage all your active clients and their services.',
              buttonText: 'View Clients',
              bgColor: '#008B8B',
              hoverColor: '#20B2AA',
            },
            {
              title: 'Products Status',
              description: 'Monitor and resolve device connectivity issues in real-time.',
              buttonText: 'View Products',
              bgColor: '#FF7F50',
              hoverColor: '#FF6347',
            },
            {
              title: 'Messages & Communication',
              description: 'Communicate with clients, staff, and teams efficiently.',
              buttonText: 'View Messages',
              bgColor: '#008B8B',
              hoverColor: '#20B2AA',
            },
            {
              title: 'Tickets Summary',
              description: 'Manage and track issues raised, from open to resolution.',
              buttonText: 'View Tickets',
              bgColor: '#FF7F50',
              hoverColor: '#FF6347',
            },
            {
              title: 'Reports & Analytics',
              description: 'Gain insights into operations and performance trends.',
              buttonText: 'View Reports',
              bgColor: '#008B8B',
              hoverColor: '#20B2AA',
            },
            {
              title: 'AI Mobile-Care Guardian',
              description: 'Ask questions, get insights, and streamline your decisions.',
              buttonText: 'Interact with AI',
              bgColor: '#FF7F50',
              hoverColor: '#FF6347',
            },
          ].map((card, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800">{card.title}</h2>
              <p className="text-gray-600 mt-2">{card.description}</p>
              <button
                className={`mt-4 text-white px-4 py-2 rounded-lg`}
                style={{
                  backgroundColor: card.bgColor,
                  transition: 'background-color 0.3s',
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = card.hoverColor)}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = card.bgColor)}
              >
                {card.buttonText}
              </button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
