import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const DashboardHeader = () => {
  return (
    <header className="bg-[#008B8B] py-4">
      <div className="max-w-screen-xl mx-auto px-6 flex items-center">
        <Link to="/dashboard">
          <Logo />
        </Link>

        <nav className="flex-1 flex justify-center space-x-6">
          <Link to="/dashboard/products" className="text-[#FF7F50] hover:text-white">Products</Link>
          <Link to="/dashboard/messages" className="text-[#FF7F50] hover:text-white">Messages</Link>
          <Link to="/dashboard/nurse" className="text-[#FF7F50] hover:text-white">Your Nurse</Link>
          <Link to="/dashboard/profile" className="text-[#FF7F50] hover:text-white">Profile</Link>
          <Link to="/dashboard/settings" className="text-[#FF7F50] hover:text-white">Settings</Link> {/* Added Settings Link */}
        </nav>

        <div className="invisible">
          <Logo />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
