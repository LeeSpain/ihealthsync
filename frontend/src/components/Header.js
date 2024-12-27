import React from 'react';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="bg-[#008B8B] py-4">
      <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between">
        {/* Logo on the left */}
        <div className="text-white text-2xl font-bold flex items-center space-x-2">
          <Logo />
        </div>

        {/* Navigation links centered */}
        <nav className="flex space-x-6 text-white mx-auto">
          <a href="/features" className="hover:text-gray-300">Features</a>
          <a href="/step-guide" className="hover:text-gray-300">Step Guide</a>
          <a href="/pricing" className="hover:text-gray-300">Pricing</a>
        </nav>

        {/* Login and Sign Up buttons */}
        <div className="text-white flex space-x-4">
          <a href="/login" className="hover:text-gray-300 bg-[#FF7F50] px-4 py-2 rounded-lg">Login</a>
          <a href="/signup" className="hover:text-gray-300 bg-white/10 px-4 py-2 rounded-lg">Sign Up</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
