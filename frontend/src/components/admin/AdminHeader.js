import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, Settings, User, ChevronDown } from 'lucide-react';
import Logo from '../Logo'; // Correct import path

const AdminHeader = () => {
  // State for dropdown visibility
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMonitoringDropdownOpen, setIsMonitoringDropdownOpen] = useState(false);
  const [isSupportDropdownOpen, setIsSupportDropdownOpen] = useState(false);

  return (
    <header className="bg-[#008B8B] text-white py-4 fixed top-0 left-0 right-0 shadow z-50">
      <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <Link to="/admin"> {/* Logo links to Admin Dashboard */}
            <Logo className="w-10 h-10" /> {/* Displaying the logo */}
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          {/* Dashboard Link */}
          <Link
            to="/admin"
            className="hover:text-gray-300 transition"
          >
            Dashboard
          </Link>

          {/* User Management Link */}
          <Link
            to="/admin/users"
            className="hover:text-gray-300 transition"
          >
            User Management
          </Link>

          {/* Emergency Center Link */}
          <Link
            to="/admin/emergency"
            className="hover:text-gray-300 transition"
          >
            Emergency Center
          </Link>

          {/* Products & Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsProductsDropdownOpen(true)}
            onMouseLeave={() => setIsProductsDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-gray-300 transition">
              <span>Products & Services</span>
              <ChevronDown size={16} />
            </button>
            {isProductsDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white text-gray-800 rounded shadow-lg">
                <Link
                  to="/admin/devices"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Device Management
                </Link>
                <Link
                  to="/admin/services"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Professional Services
                </Link>
                <Link
                  to="/admin/nurse-sync"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Nurse-Sync
                </Link>
              </div>
            )}
          </div>

          {/* Monitoring Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsMonitoringDropdownOpen(true)}
            onMouseLeave={() => setIsMonitoringDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-gray-300 transition">
              <span>Monitoring</span>
              <ChevronDown size={16} />
            </button>
            {isMonitoringDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white text-gray-800 rounded shadow-lg">
                <Link
                  to="/admin/sos"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  SOS Monitoring
                </Link>
                <Link
                  to="/admin/status"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  System Status
                </Link>
                <Link
                  to="/admin/analytics"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Analytics
                </Link>
              </div>
            )}
          </div>

          {/* Support Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsSupportDropdownOpen(true)}
            onMouseLeave={() => setIsSupportDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-gray-300 transition">
              <span>Support</span>
              <ChevronDown size={16} />
            </button>
            {isSupportDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white text-gray-800 rounded shadow-lg">
                <Link
                  to="/admin/support"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Support Center
                </Link>
                <Link
                  to="/admin/docs"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Documentation
                </Link>
                <Link
                  to="/admin/settings"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  System Settings
                </Link>
              </div>
            )}
          </div>
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

          {/* Settings */}
          <Link
            to="/admin/settings"
            className="hover:text-gray-300 transition"
          >
            <Settings className="w-6 h-6" />
          </Link>

          {/* User Menu */}
          <div className="relative group">
            <button className="flex items-center space-x-2 hover:text-gray-300">
              <User className="w-6 h-6" />
              <span className="hidden md:inline">Admin</span>
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <Link
                to="/admin/profile"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                My Profile
              </Link>
              <Link
                to="/admin/settings"
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

export default AdminHeader;