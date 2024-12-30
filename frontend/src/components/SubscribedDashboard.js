import React, { useState, useEffect } from 'react';
import {
  Heart, Activity, Bell, Shield,
  AlertCircle, Thermometer, Moon, BarChart,
  Bot, Settings, MessageCircle, Clock
} from 'lucide-react';

// AI Guardian Component
const AIGuardianCard = () => {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-[#008B8B]/10 flex items-center justify-center">
          <Bot className="w-6 h-6 text-[#008B8B]" />
        </div>
        <div>
          <h3 className="font-bold text-lg text-gray-900">AI Guardian Nurse</h3>
          <p className="text-sm text-gray-600">24/7 Health Monitoring & Support</p>
        </div>
        <button
          onClick={() => setIsActive(!isActive)}
          className="ml-auto p-2 rounded-lg hover:bg-gray-100"
        >
          <Settings className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="space-y-3 text-gray-600">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span className="text-sm">Always monitoring your health data</span>
        </div>
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4" />
          <span className="text-sm">Instant alerts for health anomalies</span>
        </div>
        <div className="flex items-center gap-2">
          <Bell className="w-4 h-4" />
          <span className="text-sm">Immediate response to health concerns</span>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <button className="flex-1 py-2 rounded-lg bg-[#008B8B] text-white hover:bg-[#008B8B]/90 flex items-center justify-center gap-2">
          <MessageCircle className="w-4 h-4" />
          Chat Now
        </button>
        <button className="flex-1 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center justify-center gap-2">
          View History
        </button>
      </div>
    </div>
  );
};

// Metric Card Component
const MetricCard = ({ icon: Icon, title, value, unit, trend, alertThresholds }) => {
  const isAlert = alertThresholds && 
    (value > alertThresholds.max || value < alertThresholds.min);

  return (
    <div className={`bg-white rounded-xl p-6 border ${
      isAlert ? 'border-red-300' : 'border-gray-200'
    } hover:shadow-md transition-all duration-300`}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`rounded-lg p-2 ${
          isAlert ? 'bg-red-100' : 'bg-[#008B8B]/10'
        }`}>
          <Icon className={`w-5 h-5 ${
            isAlert ? 'text-red-500' : 'text-[#008B8B]'
          }`} />
        </div>
        <span className="text-gray-600">{title}</span>
      </div>

      <div className="flex items-end justify-between">
        <div className="text-2xl font-bold text-gray-900">
          {typeof value === 'number' ? value.toFixed(1) : value}
          <span className="text-sm ml-1 font-normal text-gray-500">{unit}</span>
        </div>
        {trend && (
          <div className={`text-sm flex items-center gap-1 ${
            trend > 0 ? 'text-green-500' : 'text-red-500'
          }`}>
            {trend > 0 ? '↑' : '↓'} {Math.abs(trend).toFixed(1)}%
          </div>
        )}
      </div>
    </div>
  );
};

// Welcome Section Component
const WelcomeSection = ({ currentTime }) => (
  <div className="grid grid-cols-12 gap-6 mb-8">
    <div className="col-span-8">
      <div className="bg-white rounded-xl p-6 border border-gray-200 relative">
        <h2 className="text-2xl font-bold text-gray-900">Welcome back, Sarah</h2>
        <p className="text-gray-600">
          {currentTime.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
        <div className="absolute top-4 right-4 text-lg text-right">
          <div className="text-[#008B8B]">
            {currentTime.toLocaleTimeString('en-US', { 
              hour: '2-digit', 
              minute: '2-digit',
              second: '2-digit'
            })}
          </div>
          <div className="text-sm text-[#008B8B]">Premium Plan</div>
        </div>
      </div>
    </div>

    <div className="col-span-4">
      <button className="w-full h-full bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 border border-gray-200">
        <AlertCircle className="w-6 h-6" />
        SOS Emergency
      </button>
    </div>
  </div>
);

// Main Dashboard Component
const PremiumDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [metrics, setMetrics] = useState({
    heartRate: 72,
    bloodPressure: 120,
    temperature: 36.6,
    oxygenLevel: 98,
    steps: 8420,
    sleep: 7.5
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const metricsInterval = setInterval(() => {
      setMetrics(prev => ({
        heartRate: prev.heartRate + (Math.random() * 2 - 1),
        bloodPressure: prev.bloodPressure + (Math.random() * 4 - 2),
        temperature: prev.temperature + (Math.random() * 0.2 - 0.1),
        oxygenLevel: Math.min(100, Math.max(95, prev.oxygenLevel + (Math.random() * 1 - 0.5))),
        steps: prev.steps + Math.floor(Math.random() * 10),
        sleep: prev.sleep
      }));
    }, 3000);

    return () => {
      clearInterval(timer);
      clearInterval(metricsInterval);
    };
  }, []);

  const alertThresholds = {
    heartRate: { min: 60, max: 100 },
    bloodPressure: { min: 90, max: 140 },
    temperature: { min: 36, max: 37.5 },
    oxygenLevel: { min: 95, max: 100 }
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
      <WelcomeSection currentTime={currentTime} />
      
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <MetricCard
              icon={Heart}
              title="Heart Rate"
              value={metrics.heartRate}
              unit="bpm"
              trend={2.3}
              alertThresholds={alertThresholds.heartRate}
            />
            <MetricCard
              icon={Activity}
              title="Blood Pressure"
              value={metrics.bloodPressure}
              unit="mmHg"
              trend={-1.2}
              alertThresholds={alertThresholds.bloodPressure}
            />
            <MetricCard
              icon={Thermometer}
              title="Temperature"
              value={metrics.temperature}
              unit="°C"
              trend={0.5}
              alertThresholds={alertThresholds.temperature}
            />
            <MetricCard
              icon={BarChart}
              title="Oxygen Level"
              value={metrics.oxygenLevel}
              unit="%"
              trend={1.1}
              alertThresholds={alertThresholds.oxygenLevel}
            />
            <MetricCard
              icon={Activity}
              title="Steps Today"
              value={metrics.steps}
              unit="steps"
              trend={5.7}
            />
            <MetricCard
              icon={Moon}
              title="Sleep Score"
              value={metrics.sleep}
              unit="hrs"
              trend={-0.8}
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <AIGuardianCard />
        </div>
      </div>
    </main>
  );
};

export default PremiumDashboard;