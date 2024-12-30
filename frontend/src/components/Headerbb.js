import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="bg-[#008B8B] py-4 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between">
        {/* Logo on the left */}
        <div className="text-white text-2xl font-bold flex items-center space-x-2">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        {/* Navigation links centered */}
        <nav className="flex space-x-6 text-white mx-auto">
          <Link to="/features" className="hover:text-gray-300">Features</Link>
          <Link to="/step-guide" className="hover:text-gray-300">Step Guide</Link>
          <Link to="/pricing" className="hover:text-gray-300">Pricing</Link>
        </nav>

        {/* Login and Sign Up buttons */}
        <div className="text-white flex space-x-4">
          <Link to="/login" className="hover:text-gray-300 bg-[#FF7F50] px-4 py-2 rounded-lg">Login</Link>
          <Link to="/signup" className="hover:text-gray-300 bg-white/10 px-4 py-2 rounded-lg">Sign Up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;