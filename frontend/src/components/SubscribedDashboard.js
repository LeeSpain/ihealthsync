// PremiumDashboard.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Heart, Activity, Bell, Shield,
  AlertCircle, Thermometer, Moon, BarChart,
  Bot, Settings, MessageCircle, Clock,
  Users, PhoneCall, Star
} from 'lucide-react';
import DashboardHeader from './DashboardHeader';
import DashboardSwitcher from './DashboardSwitcher';

// Enhanced Metric Card for Premium
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

// AI Guardian Component
const AIGuardianCard = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-[#008B8B]/10 flex items-center justify-center">
          <Bot className="w-6 h-6 text-[#008B8B]" />
        </div>
        <div>
          <h3 className="font-bold text-lg text-gray-900">AI Guardian Active</h3>
          <p className="text-sm text-gray-600">Premium Health Monitoring</p>
        </div>
        <button
          onClick={() => setIsActive(!isActive)}
          className={`ml-auto p-2 rounded-full ${
            isActive ? 'bg-green-100' : 'bg-gray-100'
          }`}
        >
          <div className={`w-3 h-3 rounded-full ${
            isActive ? 'bg-green-500' : 'bg-gray-400'
          }`} />
        </button>
      </div>

      <div className="space-y-3 text-gray-600">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-[#008B8B]" />
          <span className="text-sm">Advanced health monitoring active</span>
        </div>
        <div className="flex items-center gap-2">
          <Bell className="w-4 h-4 text-[#008B8B]" />
          <span className="text-sm">Real-time alerts enabled</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-[#008B8B]" />
          <span className="text-sm">Family notifications active</span>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <button className="w-full py-2 rounded-lg bg-[#008B8B] text-white hover:bg-[#008B8B]/90 flex items-center justify-center gap-2">
          <MessageCircle className="w-4 h-4" />
          Chat with AI Guardian
        </button>
        <button className="w-full py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center justify-center gap-2">
          <Settings className="w-4 h-4" />
          Customize Alerts
        </button>
      </div>
    </div>
  );
};

// Family Connection Card
const FamilyConnectionCard = () => {
  const familyMembers = [
    { name: "Sarah (Daughter)", status: "online" },
    { name: "Michael (Son)", status: "offline" },
    { name: "Emma (Caregiver)", status: "online" }
  ];

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-lg text-gray-900">Family Circle</h3>
        <button className="text-[#008B8B] hover:text-[#008B8B]/70">
          <Settings className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-4">
        {familyMembers.map((member, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${
                member.status === 'online' ? 'bg-green-500' : 'bg-gray-300'
              }`} />
              <span className="text-gray-700">{member.name}</span>
            </div>
            <button className="text-[#008B8B] hover:text-[#008B8B]/70">
              <PhoneCall className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 py-2 rounded-lg border border-[#008B8B] text-[#008B8B] hover:bg-[#008B8B] hover:text-white flex items-center justify-center gap-2">
        <Users className="w-4 h-4" />
        Add Family Member
      </button>
    </div>
  );
};

const PremiumDashboard = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [metrics, setMetrics] = useState({
    heartRate: 72,
    bloodPressure: 120,
    temperature: 36.6,
    oxygenLevel: 98,
    steps: 8420,
    sleep: 7.5,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const metricsInterval = setInterval(() => {
      setMetrics((prev) => ({
        heartRate: prev.heartRate + (Math.random() * 2 - 1),
        bloodPressure: prev.bloodPressure + (Math.random() * 4 - 2),
        temperature: prev.temperature + (Math.random() * 0.2 - 0.1),
        oxygenLevel: Math.min(100, Math.max(95, prev.oxygenLevel + (Math.random() * 1 - 0.5))),
        steps: prev.steps + Math.floor(Math.random() * 10),
        sleep: prev.sleep,
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
    oxygenLevel: { min: 95, max: 100 },
  };

  return (
    <>
      <DashboardHeader />
      <main className="pt-28 max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-12 gap-6 mb-8">
          <div className="col-span-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Welcome back, Sarah</h2>
                  <span className="text-sm text-[#008B8B]">Premium Plan</span>
                </div>
                <div className="text-right">
                  <div className="text-lg font-medium text-[#008B8B]">
                    {currentTime.toLocaleTimeString('en-US')}
                  </div>
                  <div className="text-sm text-[#008B8B]">Premium Active</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <button className="w-full h-full bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold flex items-center justify-center gap-3">
              <AlertCircle className="w-6 h-6" />
              Emergency Alert
            </button>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
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
            <FamilyConnectionCard />
            <DashboardSwitcher
              currentPlan="premium"
              onSwitch={() => navigate('/')}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default PremiumDashboard;