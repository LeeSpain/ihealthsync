import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, User } from 'lucide-react';
import Logo from '../Logo'; // Importing the Logo component

const DashboardHeader = () => {
  return (
    <header className="bg-[#008B8B] text-white py-4 fixed top-0 left-0 right-0 shadow z-50">
      <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <Link to="/mobile-dashboard"> {/* Logo links to Dashboard */}
            <Logo className="w-10 h-10" /> {/* Displaying the logo */}
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link
            to="/mobile-dashboard/clients"
            className="hover:text-gray-300 transition"
          >
            Clients
          </Link>
          <Link
            to="/mobile-dashboard/products"
            className="hover:text-gray-300 transition"
          >
            Products
          </Link>
          <Link
            to="/mobile-dashboard/messages"
            className="hover:text-gray-300 transition"
          >
            Messages
          </Link>
          <Link
            to="/mobile-dashboard/tickets"
            className="hover:text-gray-300 transition"
          >
            Tickets
          </Link>
          <Link
            to="/mobile-dashboard/reports"
            className="hover:text-gray-300 transition"
          >
            Reports
          </Link>
        </nav>

        {/* Actions Section */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="relative hover:text-gray-300">
            <Bell className="w-6 h-6" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              3
            </span>
          </button>

          {/* User Menu */}
          <div className="relative group">
            <button className="flex items-center space-x-2 hover:text-gray-300">
              <User className="w-6 h-6" />
              <span className="hidden md:inline">Profile</span>
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <Link
                to="/mobile-dashboard/profile"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                My Profile
              </Link>
              <Link
                to="/mobile-dashboard/settings"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Settings
              </Link>
              <button
                onClick={() => alert('Logging out')}
                className="block px-4 py-2 w-full text-left hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
