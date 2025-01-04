import React, { useEffect, useState } from 'react';
import { Package, Users, Ticket, MessageSquare, Activity, Building } from 'lucide-react';
import DashboardHeader from '../../components/mobile/DashboardHeader';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [greeting, setGreeting] = useState('');

  // Data for AI-supported devices
  const aiDevices = [
    { id: 1, name: 'Guardian Button', active: 300 },
    { id: 2, name: 'Heart Rate Monitor', active: 250 },
    { id: 3, name: 'Smart Scales', active: 200 },
    { id: 4, name: 'Thermometer', active: 180 },
    { id: 5, name: 'Bed Sensor', active: 150 },
    { id: 6, name: 'Family Dashboard', active: 400 }
  ];

  // Data for professional services
  const professionalServices = [
    { id: 1, name: 'Med Dispenser', active: 120 },
    { id: 2, name: 'Glucose Monitor', active: 110 },
    { id: 3, name: 'SOS Call Center', active: 600 },
    { id: 4, name: 'Personal Nurse', active: 50 }
  ];

  // Data for care companies
  const careCompanies = [
    { id: 1, name: 'CarePlus Ltd', devices: 180, services: 90 },
    { id: 2, name: 'HealthWatch Services', devices: 150, services: 85 },
    { id: 3, name: 'SeniorCare Solutions', devices: 160, services: 75 },
    { id: 4, name: 'Guardian Healthcare', devices: 120, services: 70 },
    { id: 5, name: 'Comfort Care Co', devices: 130, services: 80 },
    { id: 6, name: 'LiveWell Services', devices: 140, services: 65 },
    { id: 7, name: 'Homecare Plus', devices: 120, services: 95 },
    { id: 8, name: 'Elite Care Services', devices: 110, services: 85 },
    { id: 9, name: 'SafeHaven Care', devices: 130, services: 75 },
    { id: 10, name: 'PrimeCare Ltd', devices: 90, services: 60 },
    { id: 11, name: 'CareFirst Group', devices: 80, services: 55 },
    { id: 12, name: 'VitalCare Solutions', devices: 70, services: 45 }
  ];

  // Helper function to calculate totals
  const calculateTotal = (items, key) => items.reduce((sum, item) => sum + item[key], 0);

  // Calculate totals
  const totalAIDevices = calculateTotal(aiDevices, 'active');
  const totalServices = calculateTotal(professionalServices, 'active');
  const totalCompanyDevices = calculateTotal(careCompanies, 'devices');
  const totalCompanyServices = calculateTotal(careCompanies, 'services');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);

      const hour = now.getHours();
      if (hour < 12) setGreeting('Good Morning');
      else if (hour < 18) setGreeting('Good Afternoon');
      else setGreeting('Good Evening');
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulating API call with realistic data for a large-scale provider
        setTimeout(() => {
          const mockData = {
            stats: {
              totalClients: 6000,
              careCompanies: 12,
              activeDevices: 1480,
              totalServices: 880,
              connectionRate: 94,
              openTickets: 23,
              deviceTypes: {
                guardianButton: 300,
                heartRateMonitor: 250,
                smartScales: 200,
                thermometer: 180,
                bedSensor: 150,
                familyDashboard: 400
              },
              services: {
                medDispenser: 120,
                glucoseMonitor: 110,
                sosCallCenter: 600,
                personalNurse: 50
              }
            }
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
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <DashboardHeader />

      <main className="max-w-7xl mx-auto px-6 py-8 pt-24">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900">{greeting}, Products Overview</h1>
              <p className="text-gray-600 mt-2">
                Monitor and manage your complete portfolio of AI-powered healthcare devices 
                and professional services across all care companies. Track device status, 
                service utilization, and performance metrics from a single dashboard.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 w-full md:w-auto">
              <div className="text-center">
                <p className="text-sm font-medium text-gray-500">Total Connected</p>
                <p className="text-2xl font-bold text-[#008B8B]">{data.stats.activeDevices + data.stats.totalServices}</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-gray-500">Total Live</p>
                <p className="text-2xl font-bold text-[#008B8B]">{Math.round((data.stats.activeDevices + data.stats.totalServices) * (data.stats.connectionRate / 100))}</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-gray-500">Total Offline</p>
                <p className="text-2xl font-bold text-[#FF7F50]">{Math.round((data.stats.activeDevices + data.stats.totalServices) * ((100 - data.stats.connectionRate) / 100))}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* AI Devices Overview */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">AI Devices Overview</h2>
            <div className="space-y-4">
              {aiDevices.map(device => (
                <div key={device.id} className="flex justify-between items-center">
                  <span className="text-gray-700">{device.name}</span>
                  <span className="text-lg font-semibold text-[#008B8B]">{device.active}</span>
                </div>
              ))}
              <div className="pt-4 mt-2 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total AI Devices</span>
                  <span className="text-lg font-bold text-[#008B8B]">{totalAIDevices}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Services Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Professional Services</h2>
            <div className="space-y-4">
              {professionalServices.map(service => (
                <div key={service.id} className="flex justify-between items-center">
                  <span className="text-gray-700">{service.name}</span>
                  <span className="text-lg font-semibold text-[#FF7F50]">{service.active}</span>
                </div>
              ))}
              <div className="pt-4 mt-2 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total Professional Services</span>
                  <span className="text-lg font-bold text-[#FF7F50]">{totalServices}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Care Companies Breakdown */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Care Companies Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careCompanies.map(company => (
              <div key={company.id} className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-900">{company.name}</h3>
                <div className="mt-2 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">AI Devices</span>
                    <span className="text-[#008B8B]">{company.devices}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Services</span>
                    <span className="text-[#FF7F50]">{company.services}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total Summary */}
          <div className="mt-6 pt-4 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-gray-900">Total AI Devices</span>
              <span className="text-lg font-bold text-[#008B8B]">{totalCompanyDevices}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-gray-900">Total Professional Services</span>
              <span className="text-lg font-bold text-[#FF7F50]">{totalCompanyServices}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;