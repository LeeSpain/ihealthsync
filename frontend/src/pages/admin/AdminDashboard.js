'use client';

import React, { useEffect, useState } from 'react';
import { 
  Users, Shield, AlertCircle, Activity, BarChart2,
  HelpCircle, FileText, Settings, Star, Search,
  Download, Upload, Edit, Trash2, Cloud, Sun, CloudRain, CloudSnow
} from 'lucide-react';
import AdminHeader from '../../components/admin/AdminHeader';

// Metric Card Component
const MetricCard = ({ icon: Icon, title, value, subValue, gradient }) => (
  <div className="bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
    {/* Background Gradient */}
    <div className={`absolute inset-0 opacity-5 ${gradient}`} />
    
    <div className="p-6 relative">
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-lg ${gradient} text-white`}>
          <Icon size={24} />
        </div>
        <div>
          <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">{value}</span>
            {subValue && (
              <span className="text-sm text-gray-500">{subValue}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Top Metrics Component
const TopMetrics = () => {
  const metrics = [
    {
      icon: Users,
      title: "Active Clients",
      value: "320",
      subValue: "+12% this month",
      gradient: "bg-gradient-to-r from-[#008B8B] to-[#20B2AA]"
    },
    {
      icon: Star,
      title: "Premium Subscriptions",
      value: "156",
      subValue: "€1,549 MRR",
      gradient: "bg-gradient-to-r from-[#FF7F50] to-[#FF6347]"
    },
    {
      icon: Shield,
      title: "Active Devices",
      value: "485",
      subValue: "98% online",
      gradient: "bg-gradient-to-r from-[#008B8B] to-[#20B2AA]"
    },
    {
      icon: AlertCircle,
      title: "Active SOS Alerts",
      value: "2",
      subValue: "Avg. 3min response",
      gradient: "bg-gradient-to-r from-[#FF7F50] to-[#FF6347]"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
};

// Quick Stats Component
const QuickStats = () => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
    {/* Subscription Distribution */}
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Subscription Distribution</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Members Dashboard</span>
          <span className="text-[#008B8B] font-semibold">142 users</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Family Dashboard</span>
          <span className="text-[#008B8B] font-semibold">86 users</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Free Users</span>
          <span className="text-[#008B8B] font-semibold">92 users</span>
        </div>
      </div>
    </div>

    {/* Active Devices */}
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Active Devices</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Guardian Buttons</span>
          <span className="text-[#FF7F50] font-semibold">124 devices</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Heart Rate Monitors</span>
          <span className="text-[#FF7F50] font-semibold">98 devices</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Dashboard Tablets</span>
          <span className="text-[#FF7F50] font-semibold">76 devices</span>
        </div>
      </div>
    </div>

    {/* Professional Services */}
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Professional Services</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">SOS Call Centre</span>
          <span className="text-[#008B8B] font-semibold">45 active</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Med Dispenser</span>
          <span className="text-[#008B8B] font-semibold">32 active</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Nurse Services</span>
          <span className="text-[#008B8B] font-semibold">28 active</span>
        </div>
      </div>
    </div>
  </div>
);

// Weather Icon Mapping
const getWeatherIcon = (weather) => {
  switch (weather) {
    case 'Clear':
      return <Sun size={24} />;
    case 'Rain':
      return <CloudRain size={24} />;
    case 'Snow':
      return <CloudSnow size={24} />;
    default:
      return <Cloud size={24} />;
  }
};

// Welcome Section for Martijn with Time, Date, and Weather
const WelcomeSection = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [weather, setWeather] = useState({ temp: null, condition: null });

  // Fetch Weather Data
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your API key
        const city = 'Amsterdam'; // Replace with your city
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }

        const data = await response.json();

        if (data.main && data.weather) {
          setWeather({
            temp: data.main.temp,
            condition: data.weather[0].main,
          });
        } else {
          throw new Error('Invalid weather data format');
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setWeather({ temp: null, condition: null });
      }
    };

    fetchWeather();
  }, []);

  // Update Time Every Second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      setDate(new Date().toLocaleDateString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-[#008B8B] to-[#20B2AA] rounded-xl p-8 text-white mb-8 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-[length:200%_200%] bg-gradient-to-r from-[#008B8B] via-[#20B2AA] to-[#008B8B] animate-gradient"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl font-bold animate-fade-in">Welcome back, Martijn!</h1>
        <p className="mt-2 text-lg animate-fade-in delay-100">Here's an overview of your dashboard and key metrics.</p>

        {/* Time, Date, and Weather */}
        <div className="mt-6 flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">{time}</span>
            <span className="text-lg">{date}</span>
          </div>
          {weather.temp !== null && (
            <div className="flex items-center gap-2">
              {getWeatherIcon(weather.condition)}
              <span className="text-2xl font-bold">{Math.round(weather.temp)}°C</span>
              <span className="text-lg">{weather.condition}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Main Layout Component
const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <AdminHeader />

      {/* Main Content Area */}
      <main className="pt-24 p-8"> {/* Adjusted padding-top to move content down */}
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <WelcomeSection />

          {/* Top Metrics */}
          <TopMetrics />

          {/* Quick Stats */}
          <QuickStats />

          {/* Additional Content */}
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;