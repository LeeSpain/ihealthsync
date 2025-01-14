import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header'; // Correct path to Header component

const DashboardLinks = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Include the Header */}
      <Header />

      <div className="max-w-screen-lg mx-auto px-4 pt-28 pb-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#008B8B]">
          Dashboards
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Select from our range of dashboards to manage your services and operations effectively.
        </p>

        {/* Dashboard Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Free Dashboard */}
          <Link
            to="/free-dashboard"
            className="bg-white text-[#008B8B] border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-center mb-2">Free Dashboard</h2>
            <p className="text-sm text-center text-gray-600">
              Manage your basic services and access limited features.
            </p>
          </Link>

          {/* Member Dashboard */}
          <Link
            to="/member-dashboard"
            className="bg-white text-[#008B8B] border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-center mb-2">Member Dashboard</h2>
            <p className="text-sm text-center text-gray-600">
              Full access for premium members with advanced features.
            </p>
          </Link>

          {/* Mobile Dashboard */}
          <Link
            to="/mobile-dashboard"
            className="bg-white text-[#008B8B] border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-center mb-2">Mobile Dashboard</h2>
            <p className="text-sm text-center text-gray-600">
              Designed for MobileCare clients to manage their services.
            </p>
          </Link>

          {/* Admin Dashboard */}
          <Link
            to="/admin-dashboard"
            className="bg-white text-[#008B8B] border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-center mb-2">Admin Dashboard</h2>
            <p className="text-sm text-center text-gray-600">
              Administrative tools for managing users and configurations.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardLinks;
