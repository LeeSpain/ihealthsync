import React, { useState, useEffect } from 'react';
import { 
  Heart, Activity, Bell, Shield, Lock,
  AlertCircle, Star, ChevronRight, Users,
  Phone, ArrowRight
} from 'lucide-react';

// Basic Metric Card for Free Users
const BasicMetricCard = ({ icon: Icon, title, value, unit, isPremium }) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 relative group">
      {isPremium && (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
          <div className="text-center p-4">
            <Lock className="w-6 h-6 text-white mb-2 mx-auto" />
            <span className="text-white text-sm">Premium Feature</span>
            <button className="mt-2 bg-[#FF7F50] text-white px-4 py-2 rounded-lg flex items-center gap-2 mx-auto">
              Upgrade <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
      
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-[#008B8B]/10 rounded-lg p-2">
          <Icon className="w-5 h-5 text-[#008B8B]" />
        </div>
        <span className="text-gray-600">{title}</span>
      </div>

      <div className="text-2xl font-bold text-gray-900">
        {value}
        <span className="text-sm ml-1 font-normal text-gray-500">{unit}</span>
      </div>
    </div>
  );
};

// Emergency Contact Card
const EmergencyContactCard = () => {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-gray-900">Emergency Contact</h3>
        <div className="text-sm text-[#008B8B]">Free Plan: 1 Contact</div>
      </div>
      
      <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg mb-4">
        <div className="w-12 h-12 bg-[#008B8B]/10 rounded-full flex items-center justify-center">
          <Users className="w-6 h-6 text-[#008B8B]" />
        </div>
        <div>
          <div className="font-medium">John Smith</div>
          <div className="text-sm text-gray-500">+1 (555) 123-4567</div>
        </div>
        <button className="ml-auto bg-[#008B8B] text-white p-2 rounded-lg">
          <Phone className="w-4 h-4" />
        </button>
      </div>

      <div className="p-4 border border-dashed border-gray-300 rounded-lg bg-gray-50">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Lock className="w-4 h-4" />
          <span>Add up to 5 contacts with Premium</span>
        </div>
      </div>
    </div>
  );
};

// Alert Status Component
const AlertStatus = () => {
  return (
    <div className="bg-green-50 rounded-xl p-6 border border-green-200">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
          <Shield className="w-5 h-5 text-green-600" />
        </div>
        <div>
          <h3 className="font-semibold text-green-800">System Status: Normal</h3>
          <p className="text-sm text-green-600">Basic monitoring active</p>
        </div>
        <div className="ml-auto">
          <button className="bg-white text-[#008B8B] px-4 py-2 rounded-lg text-sm flex items-center gap-2">
            Details <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Premium Feature Teaser
const PremiumTeaser = () => {
  return (
    <div className="bg-gradient-to-br from-[#008B8B] to-[#20B2AA] rounded-xl p-6 text-white">
      <div className="flex items-center gap-3 mb-4">
        <Star className="w-6 h-6 text-[#FF7F50]" />
        <h3 className="font-semibold">Upgrade to Premium</h3>
      </div>
      
      <p className="text-white/90 mb-4">
        Get access to advanced health monitoring, AI insights, and professional support.
      </p>
      
      <div className="space-y-2 mb-6">
        {[
          'AI-powered health analysis',
          'Up to 5 emergency contacts',
          'Priority SOS response',
          '24/7 professional monitoring'
        ].map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>
      
      <button className="w-full bg-[#FF7F50] hover:bg-[#FF6347] text-white px-4 py-3 rounded-xl flex items-center justify-center gap-2 transition-colors">
        Upgrade Now <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};

// Emergency SOS Component
const SOSButton = ({ onActivate }) => {
  const [isActive, setIsActive] = useState(false);
  const [countdown, setCountdown] = useState(3);

  const handleSOSClick = () => {
    setIsActive(true);
    // Start countdown
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsActive(false);
          onActivate();
          return 3;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="relative">
      <button
        onClick={handleSOSClick}
        className="bg-red-500 hover:bg-red-600 text-white w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300"
      >
        <AlertCircle className="w-6 h-6" />
        {isActive ? `Activating in ${countdown}...` : "SOS Emergency"}
      </button>
      {isActive && (
        <div className="absolute inset-0 bg-red-500 animate-pulse rounded-xl opacity-30"></div>
      )}
    </div>
  );
};

// Welcome Header Component
const WelcomeHeader = ({ userName }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 h-full">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Welcome back, {userName}
          </h2>
          <p className="text-gray-600 mt-1">
            {currentTime.toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
        <div className="text-right">
          <div className="text-lg font-medium text-[#008B8B]">
            {currentTime.toLocaleTimeString('en-US', { 
              hour: '2-digit', 
              minute: '2-digit',
              second: '2-digit'
            })}
          </div>
          <div className="text-sm text-gray-500">Free Plan</div>
        </div>
      </div>
    </div>
  );
};

// Main FreeDashboard Component
const FreeDashboard = () => {
  const [metrics, setMetrics] = useState({
    heartRate: 75,
    steps: 5240,
    alerts: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        heartRate: prev.heartRate + (Math.random() * 2 - 1),
        steps: prev.steps + Math.floor(Math.random() * 10),
        alerts: prev.alerts
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSOSActivation = () => {
    // In a real implementation, this would:
    // 1. Contact emergency services
    // 2. Notify emergency contact
    // 3. Start location tracking
    // 4. Enable two-way communication
    alert("SOS Activated! Contacting emergency contact: John Smith");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Welcome and SOS Section Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Welcome Section - 3 columns */}
          <div className="md:col-span-3">
            <WelcomeHeader userName="Sarah" />
          </div>
          
          {/* SOS Section - 1 column */}
          <div className="md:col-span-1">
            <SOSButton onActivate={handleSOSActivation} />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Alert Status */}
            <AlertStatus />
            
            {/* Basic Metrics Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <BasicMetricCard
                icon={Heart}
                title="Heart Rate"
                value={Math.round(metrics.heartRate)}
                unit="bpm"
                isPremium={false}
              />
              <BasicMetricCard
                icon={Activity}
                title="Daily Steps"
                value={metrics.steps.toLocaleString()}
                unit="steps"
                isPremium={false}
              />
              <BasicMetricCard
                icon={Bell}
                title="Active Alerts"
                value={metrics.alerts}
                unit="alerts"
                isPremium={false}
              />
            </div>

            {/* Premium Metrics Preview (Locked) */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: Activity, title: "Blood Pressure", value: "---", unit: "mmHg" },
                { icon: Activity, title: "Blood Oxygen", value: "---", unit: "%" },
                { icon: Activity, title: "Temperature", value: "---", unit: "°C" }
              ].map((metric, index) => (
                <BasicMetricCard
                  key={index}
                  icon={metric.icon}
                  title={metric.title}
                  value={metric.value}
                  unit={metric.unit}
                  isPremium={true}
                />
              ))}
            </div>

            {/* Emergency Contact Section */}
            <EmergencyContactCard />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Premium Upgrade Card */}
            <PremiumTeaser />

            {/* Basic Activity Summary */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Today's Summary</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Active Hours</span>
                  <span className="font-medium">2.5 hrs</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Alerts Triggered</span>
                  <span className="font-medium">0</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Last Updated</span>
                  <span className="text-sm text-gray-500">Just now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeDashboard;