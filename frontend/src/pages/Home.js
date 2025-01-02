import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Bell,
  ChevronRight,
  Plus,
  ArrowRight,
  Circle,
  UserPlus,
  Settings,
  Heart,
  Shield,
  Clock,
  CheckCircle,
  PhoneCall,
  Globe,
  Smartphone,
  Droplet,
  Thermometer,
  Moon,
  Timer,
  Zap,
  AlertCircle,
  Activity,
} from 'lucide-react';

const HomePage = () => {
  // State Management
  const [stats, setStats] = useState({
    heartRate: { value: 72, trend: '+1', status: 'normal' },
    bloodPressure: { value: 120, status: 'normal' },
    steps: { value: 8540, trend: '+258', status: 'above' },
    oxygen: { value: 98, status: 'normal' },
    sleep: { value: 7.5, status: 'normal' },
    temp: { value: 98.6, status: 'normal' },
    calories: { value: 1850, status: 'normal' },
    stress: { value: 42, status: 'normal' },
  });

  // Steps Configuration
  const steps = [
    {
      id: 1,
      title: 'Create Your Profile',
      icon: UserPlus,
      description: 'Start your health journey with a personalized profile',
      substeps: [
        'Complete health assessment',
        'Set personal health goals',
        'Connect your devices',
      ],
      stats: '2 min setup',
      color: 'bg-gradient-to-r from-[#008B8B] to-[#20B2AA]',
    },
    {
      id: 2,
      title: 'Personalize Your Experience',
      icon: Settings,
      description: 'Customize your monitoring dashboard',
      substeps: [
        'Choose vital signs to track',
        'Set alert preferences',
        'Add emergency contacts',
      ],
      stats: '5 min setup',
      color: 'bg-gradient-to-r from-[#008B8B] to-[#20B2AA]',
    },
    {
      id: 3,
      title: 'Start Monitoring',
      icon: Heart,
      description: 'Begin your 24/7 health monitoring journey',
      substeps: [
        'View real-time health data',
        'Receive AI-powered insights',
        'Share with healthcare providers',
      ],
      stats: 'Instant activation',
      color: 'bg-gradient-to-r from-[#008B8B] to-[#20B2AA]',
    },
  ];

  // Status Indicator Component
  const StatusIndicator = ({ status, value }) => {
    const getStatusStyles = (status) => {
      const styles = {
        normal: 'bg-green-100 border-green-200 text-green-700',
        above: 'bg-blue-100 border-blue-200 text-blue-700',
        below: 'bg-amber-100 border-amber-200 text-amber-700',
        alert: 'bg-red-100 border-red-200 text-red-700',
      };
      return styles[status] || styles.normal;
    };

    return (
      <div className={`px-2 py-1 rounded-full border ${getStatusStyles(status)}`}>
        <span className="text-xs font-medium">{value}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#008B8B] via-[#009999] to-[#20B2AA] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
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

            {/* Right Column - Clinical Dashboard */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 border border-blue-100 shadow-lg">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-semibold text-gray-800">Patient Vitals</h2>
                  <div className="flex items-center gap-2 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-red-600 font-medium text-sm">Monitoring</span>
                  </div>
                </div>
              </div>

              {/* Dashboard Grid */}
              <div className="grid grid-cols-4 gap-3">
                {/* Heart Rate - Primary Metric */}
                <div className="col-span-2 bg-blue-50 rounded-xl p-4 hover:bg-blue-100/50 transition-all border border-blue-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Heart className="w-4 h-4 text-red-500" />
                        <span className="text-gray-700 text-sm font-medium">Heart Rate</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-gray-900">{stats.heartRate.value}</span>
                        <span className="text-gray-600 text-sm">bpm</span>
                      </div>
                    </div>
                    <div className="bg-green-100 px-2 py-1 rounded-full border border-green-200">
                      <span className="text-green-700 text-xs font-medium">+{stats.heartRate.trend}</span>
                    </div>
                  </div>
                </div>

                {/* Blood Pressure - Primary Metric */}
                <div className="col-span-2 bg-blue-50 rounded-xl p-4 hover:bg-blue-100/50 transition-all border border-blue-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Activity className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700 text-sm font-medium">Blood Pressure</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-gray-900">{stats.bloodPressure.value}/80</span>
                        <span className="text-gray-600 text-sm">mmHg</span>
                      </div>
                    </div>
                    <div className="bg-green-100 px-2 py-1 rounded-full border border-green-200">
                      <span className="text-green-700 text-xs font-medium">Normal</span>
                    </div>
                  </div>
                </div>

                {/* Secondary Metrics */}
                <div className="bg-gray-50 rounded-xl p-3 hover:bg-gray-100/50 transition-all border border-gray-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Droplet className="w-4 h-4 text-cyan-600" />
                    <span className="text-gray-700 text-xs font-medium">Oxygen</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-gray-900">{stats.oxygen.value}</span>
                    <span className="text-gray-600 text-xs">%</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-3 hover:bg-gray-100/50 transition-all border border-gray-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Moon className="w-4 h-4 text-indigo-600" />
                    <span className="text-gray-700 text-xs font-medium">Sleep</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-gray-900">{stats.sleep.value}</span>
                    <span className="text-gray-600 text-xs">hrs</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-3 hover:bg-gray-100/50 transition-all border border-gray-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Circle className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700 text-xs font-medium">Steps</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-gray-900">{stats.steps.value.toLocaleString()}</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-3 hover:bg-gray-100/50 transition-all border border-gray-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Thermometer className="w-4 h-4 text-orange-600" />
                    <span className="text-gray-700 text-xs font-medium">Temp</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-gray-900">{stats.temp.value}°</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-3 hover:bg-gray-100/50 transition-all border border-gray-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Zap className="w-4 h-4 text-yellow-600" />
                    <span className="text-gray-700 text-xs font-medium">Calories</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-gray-900">{stats.calories.value}</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-3 hover:bg-gray-100/50 transition-all border border-gray-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Timer className="w-4 h-4 text-purple-600" />
                    <span className="text-gray-700 text-xs font-medium">Stress</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-gray-900">{stats.stress.value}</span>
                    <span className="text-gray-600 text-xs">low</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Three simple steps to better health monitoring</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="p-6 rounded-2xl bg-gradient-to-br from-[#20B2AA]/10 to-[#008B8B]/20 border border-[#20B2AA]/20"
              >
                <div className="flex items-start space-x-4">
                  <div className={`${step.color} p-4 rounded-xl text-white`}>
                    <step.icon size={24} />
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
                    <div className="mt-4 space-y-3">
                      {step.substeps.map((substep, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-gray-700">
                          <CheckCircle size={16} className="text-green-500" />
                          <span>{substep}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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