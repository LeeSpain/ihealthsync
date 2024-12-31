import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#008B8B] via-[#20B2AA] to-[#E0FFFF]">
      {/* Hero Section */}
      <section className="bg-[#008B8B] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to iHealth-Sync
          </h1>
          <p className="text-lg mb-8">
            Empowering you with advanced tools for monitoring and improving your health, seamlessly integrated for you and your family.
          </p>
          <div className="flex justify-center gap-6">
            <Link to="/signup" className="bg-[#FF7F50] text-white py-3 px-6 rounded-lg hover:bg-[#FF6347] transition">
              Start Your Journey
            </Link>
            <a href="#features" className="bg-white/10 text-white py-3 px-6 rounded-lg hover:bg-white/20 transition">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#FF7F50] text-white w-16 h-16 flex items-center justify-center rounded-full mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
              <p>Create your account in just a few clicks and get started immediately.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#FF7F50] text-white w-16 h-16 flex items-center justify-center rounded-full mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalize</h3>
              <p>Choose the features and services that suit your unique needs.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#FF7F50] text-white w-16 h-16 flex items-center justify-center rounded-full mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Stay Connected</h3>
              <p>Monitor your health metrics and share updates with loved ones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose iHealth-Sync?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#20B2AA] text-white w-16 h-16 flex items-center justify-center rounded-full mb-4">
                🩺
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-Time Monitoring</h3>
              <p>Stay updated on your health metrics anytime, anywhere.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#20B2AA] text-white w-16 h-16 flex items-center justify-center rounded-full mb-4">
                🚨
              </div>
              <h3 className="text-xl font-semibold mb-2">Emergency SOS</h3>
              <p>Instant alerts for peace of mind in critical moments.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#20B2AA] text-white w-16 h-16 flex items-center justify-center rounded-full mb-4">
                👨‍👩‍👧‍👦
              </div>
              <h3 className="text-xl font-semibold mb-2">Family Dashboard</h3>
              <p>Share health updates with your loved ones effortlessly.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#20B2AA] text-white w-16 h-16 flex items-center justify-center rounded-full mb-4">
                📊
              </div>
              <h3 className="text-xl font-semibold mb-2">Comprehensive Insights</h3>
              <p>Understand trends and make informed health decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Insights and Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">AI and Health Monitoring</h3>
              <p>Learn how AI transforms personal healthcare.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Managing Medications</h3>
              <p>Tips and tools for staying on track with your prescriptions.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Understanding Vitals</h3>
              <p>Master the basics of monitoring your vital signs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-[#008B8B] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Your Journey Starts Here</h2>
          <p className="text-lg mb-8">Join thousands embracing smarter health solutions with iHealth-Sync.</p>
          <Link to="/signup" className="bg-[#FF7F50] py-3 px-6 rounded-lg hover:bg-[#FF6347] transition">
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Accessibility Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Designed for Everyone</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Accessibility Features</h3>
              <p>Experience intuitive design for all abilities.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Multilingual Support</h3>
              <p>Access our services in multiple languages.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Mobile Optimized</h3>
              <p>Stay connected with seamless mobile compatibility.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
