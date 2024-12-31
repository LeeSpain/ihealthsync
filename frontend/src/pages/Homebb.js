import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, ChevronRight, Plus, ArrowRight, Circle, UserPlus, Settings, Heart, Shield, Clock, CheckCircle, PhoneCall, Globe, Smartphone } from 'lucide-react';

const HomePage = () => {
  const [activeStep, setActiveStep] = useState(null);
  const [hoveredStep, setHoveredStep] = useState(null);

  const steps = [
    {
      id: 1,
      title: "Create Your Profile",
      icon: UserPlus,
      description: "Start your health journey with a personalized profile",
      substeps: [
        "Complete health assessment",
        "Set personal health goals",
        "Connect your devices"
      ],
      stats: "2 min setup",
      color: "bg-gradient-to-r from-[#008B8B] to-[#20B2AA]"
    },
    {
      id: 2,
      title: "Personalize Your Experience",
      icon: Settings,
      description: "Customize your monitoring dashboard",
      substeps: [
        "Choose vital signs to track",
        "Set alert preferences",
        "Add emergency contacts"
      ],
      stats: "5 min setup",
      color: "bg-gradient-to-r from-violet-500 to-purple-500"
    },
    {
      id: 3,
      title: "Start Monitoring",
      icon: Heart,
      description: "Begin your 24/7 health monitoring journey",
      substeps: [
        "View real-time health data",
        "Receive AI-powered insights",
        "Share with healthcare providers"
      ],
      stats: "Instant activation",
      color: "bg-gradient-to-r from-orange-500 to-red-500"
    }
  ];

  const StepCard = ({ step, index }) => {
    const isActive = activeStep === step.id;
    const isHovered = hoveredStep === step.id;
    const Icon = step.icon;

    return (
      <div
        className={`relative p-6 rounded-2xl transition-all duration-300 cursor-pointer
          ${isActive ? 'bg-gradient-to-br from-[#20B2AA]/20 to-[#008B8B]/30 shadow-2xl scale-105 border border-[#20B2AA]/20' : 
          'bg-gradient-to-br from-[#20B2AA]/10 to-[#008B8B]/20 hover:from-[#20B2AA]/20 hover:to-[#008B8B]/30 hover:shadow-xl border border-[#20B2AA]/10'}
          ${index !== steps.length - 1 ? 'mb-8 md:mb-0' : ''}`}
        onClick={() => setActiveStep(isActive ? null : step.id)}
        onMouseEnter={() => setHoveredStep(step.id)}
        onMouseLeave={() => setHoveredStep(null)}
      >
        <div className="flex items-start space-x-4">
          <div className={`${step.color} p-4 rounded-xl text-white`}>
            <Icon size={24} />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <span className="text-gray-400">
                <Clock size={16} className="inline mr-1" />
                {step.stats}
              </span>
            </div>
            <p className="mt-2 text-gray-600">{step.description}</p>
            
            {(isActive || isHovered) && (
              <div className="mt-4 space-y-3">
                {step.substeps.map((substep, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle size={16} className="text-green-500" />
                    <span>{substep}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {index !== steps.length - 1 && (
          <div className="hidden md:block absolute -right-12 top-1/2 transform -translate-y-1/2">
            <ChevronRight size={24} className="text-gray-400" />
          </div>
        )}
      </div>
    );
  };

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

      {/* Enhanced How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Three simple steps to better health monitoring</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
            {steps.map((step, index) => (
              <StepCard key={step.id} step={step} index={index} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center mx-auto">
              <span>Get Started</span>
              <ChevronRight size={20} className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Why Choose iHealth-Sync?</h2>
          <p className="text-xl text-gray-600 text-center mb-12">Experience the future of health monitoring</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-[#20B2AA]/10 to-[#008B8B]/20 p-8 rounded-2xl border border-[#20B2AA]/20">
              <div className="bg-white/80 rounded-xl shadow-lg overflow-hidden">
                <div className="p-4 bg-gradient-to-r from-[#008B8B] to-[#20B2AA] text-white">
                  <h3 className="text-lg font-semibold">Health Dashboard</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="bg-gray-100 h-32 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">Heart Rate Monitor</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-100 h-24 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">Blood Pressure</span>
                      </div>
                      <div className="bg-gray-100 h-24 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">Sleep Analysis</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#20B2AA]/10 to-[#008B8B]/20 p-6 rounded-xl border border-[#20B2AA]/20 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-[#008B8B] to-[#20B2AA] p-3 rounded-lg text-white">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Real-Time Monitoring</h3>
                    <p className="text-gray-600">Advanced AI algorithms monitor your vital signs 24/7, providing instant alerts and personalized insights.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#20B2AA]/10 to-[#008B8B]/20 p-6 rounded-xl border border-[#20B2AA]/20 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-[#008B8B] to-[#20B2AA] p-3 rounded-lg text-white">
                    <Bell className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Smart Alerts</h3>
                    <p className="text-gray-600">Receive immediate notifications for critical health changes and emergency situations.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#20B2AA]/10 to-[#008B8B]/20 p-6 rounded-xl border border-[#20B2AA]/20 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-[#008B8B] to-[#20B2AA] p-3 rounded-lg text-white">
                    <UserPlus className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Family Connection</h3>
                    <p className="text-gray-600">Share health updates with family members and healthcare providers in real-time.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Insights and Resources</h2>
          <p className="text-xl text-gray-600 text-center mb-12">Stay informed about your health journey</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-[#20B2AA]/10 to-[#008B8B]/20 rounded-2xl overflow-hidden border border-[#20B2AA]/20">
                <div className="h-48 bg-[#008B8B]/5 flex items-center justify-center">
                  <Settings className="w-16 h-16 text-[#008B8B]" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">AI and Health Monitoring</h3>
                  <p className="text-gray-600 mb-4">Discover how artificial intelligence is revolutionizing personal healthcare monitoring.</p>
                  <button className="text-[#008B8B] font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-[#20B2AA]/10 to-[#008B8B]/20 rounded-2xl overflow-hidden border border-[#20B2AA]/20">
                <div className="h-48 bg-[#008B8B]/5 flex items-center justify-center">
                  <Bell className="w-16 h-16 text-[#008B8B]" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Managing Medications</h3>
                  <p className="text-gray-600 mb-4">Expert tips and digital tools for maintaining your medication schedule effectively.</p>
                  <button className="text-[#008B8B] font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-[#20B2AA]/10 to-[#008B8B]/20 rounded-2xl overflow-hidden border border-[#20B2AA]/20">
                <div className="h-48 bg-[#008B8B]/5 flex items-center justify-center">
                  <Heart className="w-16 h-16 text-[#008B8B]" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Understanding Vitals</h3>
                  <p className="text-gray-600 mb-4">Comprehensive guide to interpreting your vital signs and health metrics.</p>
                  <button className="text-[#008B8B] font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-gradient-to-br from-[#008B8B] to-[#20B2AA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Your Journey Starts Here</h2>
              <p className="text-xl text-white/90 mb-8">Join thousands of users who trust iHealth-Sync for their health monitoring needs.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signup" className="bg-[#FF7F50] text-white px-8 py-3 rounded-xl hover:bg-[#FF6347] transition-all inline-flex items-center justify-center gap-2">
                  Get Started Now <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="bg-white/10 text-white px-8 py-3 rounded-xl hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2">
                  Contact Sales <PhoneCall className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Designed for Everyone</h2>
          <p className="text-xl text-gray-600 text-center mb-12">Making health monitoring accessible to all</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex gap-6 items-start p-6 bg-gradient-to-br from-[#20B2AA]/10 to-[#008B8B]/20 rounded-xl border border-[#20B2AA]/20">
              <div className="bg-gradient-to-r from-[#008B8B] to-[#20B2AA] p-3 rounded-lg text-white">
                <Settings className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Accessibility Features</h3>
                <p className="text-gray-600">Intuitive interface designed for users of all abilities, with screen reader support and customizable displays.</p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start p-6 bg-gradient-to-br from-[#20B2AA]/10 to-[#008B8B]/20 rounded-xl border border-[#20B2AA]/20">
              <div className="bg-gradient-to-r from-[#008B8B] to-[#20B2AA] p-3 rounded-lg text-white">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Multilingual Support</h3>
                <p className="text-gray-600">Available in multiple languages with region-specific health guidelines and recommendations.</p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start p-6 bg-gradient-to-br from-[#20B2AA]/10 to-[#008B8B]/20 rounded-xl border border-[#20B2AA]/20">
              <div className="bg-gradient-to-r from-[#008B8B] to-[#20B2AA] p-3 rounded-lg text-white">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Mobile Optimized</h3>
                <p className="text-gray-600">Seamless experience across all devices with real-time synchronization and offline capability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;