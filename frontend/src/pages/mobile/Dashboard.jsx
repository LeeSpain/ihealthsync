import React, { useEffect, useState } from 'react';
import { Users, AlertTriangle, Activity, Package, Calendar } from 'lucide-react';

import DashboardHeader from '../../components/mobile/DashboardHeader';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [greeting, setGreeting] = useState('');
  const [aiResponse, setAiResponse] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const hour = currentTime.getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 18) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');

    return () => clearInterval(timer);
  }, [currentTime]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setTimeout(() => {
          const mockData = {
            kpis: {
              activeClients: 6000,
              systemUptime: '99.8%',
              dashboardsAccessed: 5000,
              products: {
                sosPendant: 3200,
                glucoseMonitoring: 1800,
                medicationDispensers: 1500,
                aiGuardian: 2200,
              },
            },
            professionalServices: {
              videoConsultations: 1200,
              welfareCalls: 800,
              prescriptionsDelivered: 450,
            },
            appointments: [
              { title: 'Team Meeting', date: '2025-01-13T10:00', type: 'Online' },
              { title: 'Client Consultation', date: '2025-01-13T15:00', type: 'In-Person' },
              { title: 'Project Review', date: '2025-01-14T09:00', type: 'Online' },
              { title: 'Strategy Session', date: '2025-01-14T14:00', type: 'In-Person' },
            ],
          };
          setData(mockData);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError('Failed to load data. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAiQuery = async (query) => {
    if (!query) return;
    setAiResponse(`Fetching information for: "${query}"...`);
    setTimeout(() => {
      setAiResponse(`Response for "${query}": Client details are up-to-date.`);
    }, 2000);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg font-medium text-gray-600">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg font-medium text-red-600">{error}</p>
      </div>
    );
  }

  const products = data?.kpis?.products || {};
  const services = data?.professionalServices || {};
  const appointments = data?.appointments || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <DashboardHeader />

      <main className="max-w-7xl mx-auto px-6 py-8 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Welcome Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-3xl font-bold text-gray-900">{greeting}, Patrick</h1>
            <p className="text-gray-600 mt-1">
              {currentTime.toLocaleDateString([], {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <p className="text-[#008B8B] font-medium mt-2">iHealth-Sync × MobileCare</p>
            <p className="text-gray-700 mt-4">
              Welcome back! Here's what you might want to check today:
            </p>
            <ul className="list-disc ml-5 mt-2 text-gray-700">
              <li>Dashboards accessed: {data.kpis.dashboardsAccessed}</li>
              <li>System uptime: {data.kpis.systemUptime}</li>
              <li>Total active clients: {data.kpis.activeClients}</li>
            </ul>
          </div>

          {/* AI Guardian */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">AI Guardian</h2>
            <p className="text-gray-600 mb-4">
              Hi Patrick, I'm your AI Guardian. Ask me anything about your clients, staff, or system,
              and I'll provide quick, accurate answers.
            </p>

            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Ask a question..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008B8B]"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleAiQuery(e.target.value);
                }}
              />
              <button
                onClick={() => handleAiQuery(document.querySelector('input').value)}
                className="absolute top-0 right-0 mt-2 mr-2 px-4 py-2 bg-[#008B8B] text-white text-sm font-medium rounded-lg hover:bg-[#007070]"
              >
                Ask
              </button>
            </div>

            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="text-gray-700 font-medium mb-2">AI Response:</h3>
              <p className="text-gray-700">{aiResponse || 'No query yet. Ask me something to get started!'}</p>
            </div>
          </div>
        </div>

        {/* Product Metrics */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Product Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(products).map(([key, value]) => (
              <div key={key} className="bg-gray-100 rounded-lg p-4">
                <p className="text-sm font-medium text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
                <p className="text-2xl font-bold text-gray-900">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Services Metrics */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Professional Services Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(services).map(([key, value]) => (
              <div key={key} className="bg-gray-100 rounded-lg p-4">
                <p className="text-sm font-medium text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
                <p className="text-2xl font-bold text-gray-900">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Appointments</h2>
          <ul className="divide-y divide-gray-200">
            {appointments.map((appointment, index) => (
              <li key={index} className="py-4 flex justify-between items-center">
                <div>
                  <p className="text-gray-900 font-medium">{appointment.title}</p>
                  <p className="text-sm text-gray-500">{new Date(appointment.date).toLocaleString()}</p>
                </div>
                <span className="text-sm font-medium text-gray-700">{appointment.type}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
