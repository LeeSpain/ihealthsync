import React, { useEffect, useState } from 'react';
import { Package, Users, Ticket, MessageSquare } from 'lucide-react';
import DashboardHeader from '../../components/mobile/DashboardHeader'; // Corrected import path

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [greeting, setGreeting] = useState('');

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
            stats: {
              activeProducts: 245,
              pendingOrders: 12,
              connectionRate: 87,
              openTickets: 5,
              activeUsers: 147
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
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <DashboardHeader />

      <main className="max-w-7xl mx-auto px-6 py-8 pt-24">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{greeting}, Patrick</h1>
                  <p className="text-gray-600 mt-1">
                    {currentTime.toLocaleDateString([], { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                  <p className="text-[#008B8B] font-medium mt-2">iHealth-Sync × MobileCare</p>
                </div>
              </div>
              <div className="mt-4 text-gray-600">
                <p>Your last login was today at {currentTime.toLocaleTimeString([], { 
                  hour: '2-digit', 
                  minute: '2-digit'
                })}</p>
              </div>
            </div>
            <div className="flex flex-row md:flex-col gap-6 w-full md:w-auto">
              <div className="flex-1 md:text-right">
                <p className="text-sm font-medium text-gray-500">System Status</p>
                <p className="text-2xl font-bold text-[#FF7F50]">{data.stats.connectionRate}% Online</p>
              </div>
              <div className="flex-1 md:text-right">
                <p className="text-sm font-medium text-gray-500">Current Active Users</p>
                <p className="text-2xl font-bold text-[#008B8B]">{data.stats.activeUsers}</p>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Today's Schedule</p>
                <p className="text-gray-900">3 Pending Deliveries</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Support Queue</p>
                <p className="text-gray-900">{data.stats.openTickets} Open Tickets</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">System Updates</p>
                <p className="text-gray-900">All Systems Up to Date</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center">
              <Package className="h-8 w-8 text-[#008B8B]" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Active Products</p>
                <p className="text-2xl font-bold text-gray-900">{data.stats.activeProducts}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-[#008B8B]" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Pending Orders</p>
                <p className="text-2xl font-bold text-gray-900">{data.stats.pendingOrders}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center">
              <Ticket className="h-8 w-8 text-[#FF7F50]" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Open Tickets</p>
                <p className="text-2xl font-bold text-gray-900">{data.stats.openTickets}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center">
              <MessageSquare className="h-8 w-8 text-[#008B8B]" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Messages</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 lg:col-span-2">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <p className="text-gray-600">No recent activities to display</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-4">
              <button className="w-full py-2 px-4 bg-[#008B8B] text-white rounded-lg hover:bg-[#FF7F50] transition-colors">
                Add New Order
              </button>
              <button className="w-full py-2 px-4 bg-white border border-gray-300 text-gray-700 rounded-lg hover:text-[#008B8B] hover:border-[#008B8B] transition-colors">
                View Reports
              </button>
              <button className="w-full py-2 px-4 bg-white border border-gray-300 text-gray-700 rounded-lg hover:text-[#008B8B] hover:border-[#008B8B] transition-colors">
                Support Center
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;