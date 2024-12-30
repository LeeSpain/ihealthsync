import React from 'react';
import Logo from './Logo'; // Import the Logo component from src/components/logo.js

const DashboardHeader = () => {
  return (
    <header style={{ backgroundColor: '#008B8B' }} className="py-4">
      <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between">
        {/* Use Logo Component */}
        <div>
          <Logo />
        </div>

        {/* Dashboard Links */}
        <nav className="flex space-x-6">
          <a href="/dashboard/profile" style={{ color: '#FF7F50' }} className="hover:text-white">Profile</a>
          <a href="/dashboard/settings" style={{ color: '#FF7F50' }} className="hover:text-white">Settings</a>
          <a href="/dashboard/logout" style={{ color: '#FF7F50' }} className="hover:text-white">Logout</a>
        </nav>
      </div>
    </header>
  );
};

export default DashboardHeader;
