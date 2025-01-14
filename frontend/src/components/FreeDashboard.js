import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Heart, Activity, Bot, Lock, Shield,
  Bell, MessageCircle, Clock, Star
} from 'lucide-react';
import DashboardHeader from './DashboardHeader';
import DashboardSwitcher from './DashboardSwitcher';

// Metric Card Component for Free Version
const MetricCard = ({ icon: Icon, title, value, unit, isLocked }) => (
  <div className={`bg-white rounded-xl p-6 border border-gray-200 ${isLocked ? 'opacity-75' : ''}`}>
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="rounded-lg p-2 bg-[#008B8B]/10">
          <Icon className="w-5 h-5 text-[#008B8B]" />
        </div>
        <span className="text-gray-600">{title}</span>
      </div>
      {isLocked && <Lock className="w-5 h-5 text-gray-400" />}
    </div>
    <div className="text-2xl font-bold text-gray-900">
      {isLocked ? '--' : value}
      <span className="text-sm ml-1 font-normal text-gray-500">{unit}</span>
    </div>
  </div>
);

// Limited AI Guardian Preview
const LimitedAIGuardian = () => (
  <div className="bg-white rounded-xl p-6 border border-gray-200">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
        <Bot className="w-6 h-6 text-gray-400" />
      </div>
      <div>
        <h3 className="font-bold text-lg text-gray-900">AI Guardian Preview</h3>
        <p className="text-sm text-gray-600">Try basic health monitoring</p>
      </div>
    </div>
    <div className="space-y-3 text-gray-400">
      <div className="flex items-center gap-2">
        <Clock className="w-4 h-4" />
        <span className="text-sm">Limited health monitoring</span>
      </div>
      <div className="flex items-center gap-2">
        <Lock className="w-4 h-4" />
        <span className="text-sm">Unlock full features with Premium</span>
      </div>
    </div>
    <button className="w-full mt-6 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200">
      Preview Features
    </button>
  </div>
);

const FreeDashboard = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [metrics, setMetrics] = useState({
    heartRate: 72,
    steps: 8420,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const metricsInterval = setInterval(() => {
      setMetrics((prev) => ({
        heartRate: prev.heartRate + (Math.random() * 2 - 1),
        steps: prev.steps + Math.floor(Math.random() * 10),
      }));
    }, 3000);

    return () => {
      clearInterval(timer);
      clearInterval(metricsInterval);
    };
  }, []);

  return (
    <>
      <DashboardHeader />
      <main className="pt-28 max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Welcome back, Sarah</h2>
              <p className="text-gray-600">
                {currentTime.toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
            <div className="text-right">
              <div className="text-lg text-[#008B8B]">
                {currentTime.toLocaleTimeString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit',
                })}
              </div>
              <div className="text-sm text-gray-500">Free Plan</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <MetricCard icon={Heart} title="Heart Rate" value={metrics.heartRate.toFixed(1)} unit="bpm" />
              <MetricCard icon={Activity} title="Steps Today" value={metrics.steps} unit="steps" />
              <MetricCard icon={Activity} title="Blood Pressure" unit="mmHg" isLocked />
              <MetricCard icon={Activity} title="Temperature" unit="°C" isLocked />
              <MetricCard icon={Activity} title="Sleep Score" unit="hrs" isLocked />
              <MetricCard icon={Activity} title="Oxygen Level" unit="%" isLocked />
            </div>

            {/* Premium Feature Preview */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <Star className="w-8 h-8 text-[#FF7F50]" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Upgrade to Premium</h3>
                  <p className="text-sm text-gray-600">Access all health monitoring features</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-[#008B8B]" />
                  <span className="text-gray-600">24/7 Health Monitoring</span>
                </div>
                <div className="flex items-center gap-3">
                  <Bot className="w-5 h-5 text-[#008B8B]" />
                  <span className="text-gray-600">AI Guardian Support</span>
                </div>
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-[#008B8B]" />
                  <span className="text-gray-600">Real-time Health Alerts</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-[#008B8B]" />
                  <span className="text-gray-600">Family Connection</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <LimitedAIGuardian />
            <DashboardSwitcher
              currentPlan="free"
              onSwitch={() => navigate('/premium-dashboard')}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default FreeDashboard;
