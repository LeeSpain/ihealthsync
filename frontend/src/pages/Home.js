import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, ChevronRight, Plus, ArrowRight, Circle } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#008B8B] via-[#20B2AA] to-[#E0FFFF]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#008B8B] via-[#009999] to-[#20B2AA] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-white mb-6">
                Professional Health
                <span className="block mt-2 text-[#FF7F50]">Monitoring</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Advanced AI-powered health monitoring with real-time insights and professional analysis.
                Get 24/7 emergency response and personalized care.
              </p>
              <div className="flex gap-4 mb-8">
                <button className="bg-[#FF7F50] hover:bg-[#FF6347] text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-all">
                  Start Free Trial <ChevronRight className="w-5 h-5" />
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-all">
                  View Features <Plus className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-center gap-4 text-white/80">
                <Bell className="w-5 h-5" />
                <span className="text-sm">Premium includes 24/7 professional monitoring</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-semibold text-white mb-4">Live Health Metrics</h2>
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-white/80">Stay updated in real-time</div>
              </div>
              <div className="bg-white/10 h-64 flex items-center justify-center rounded-lg">
                <span className="text-white text-lg">Metrics Dashboard Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="text-center">
              <div className="bg-[#FF7F50] text-white w-16 h-16 flex items-center justify-center rounded-full mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
              <p>Create your account in just a few clicks and get started immediately.</p>
            </div>
            <div className="text-center relative">
              <div className="absolute top-1/2 transform -translate-y-1/2 left-[-16px]">
                <ArrowRight className="text-[#008B8B] w-8 h-8" />
              </div>
              <div className="bg-[#FF7F50] text-white w-16 h-16 flex items-center justify-center rounded-full mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalize</h3>
              <p>Choose the features and services that suit your unique needs.</p>
            </div>
            <div className="text-center relative">
              <div className="absolute top-1/2 transform -translate-y-1/2 left-[-16px]">
                <ArrowRight className="text-[#008B8B] w-8 h-8" />
              </div>
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
