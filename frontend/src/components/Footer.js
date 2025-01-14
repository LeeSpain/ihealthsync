import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#008B8B] text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">About iHealth-Sync</h3>
            <p className="text-sm text-white/90 leading-relaxed">
              iHealth-Sync is dedicated to empowering individuals with intelligent monitoring and personalized care, fostering independence while staying connected with loved ones.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/home" className="hover:text-[#FF7F50] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-[#FF7F50] transition">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-[#FF7F50] transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/step-guide" className="hover:text-[#FF7F50] transition">
                  Step Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-sm">
              <strong>Email:</strong> support@ihealthsync.com
            </p>
            <p className="text-sm">
              <strong>Phone:</strong> +1-800-555-1234
            </p>
            <p className="text-sm">
              <strong>Address:</strong> 123 Care Lane, Wellness City, USA
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm text-white/80">
          © {new Date().getFullYear()} iHealth-Sync. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
