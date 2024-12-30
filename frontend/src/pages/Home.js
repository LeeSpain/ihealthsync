import React, { useState, useEffect, useCallback } from 'react';
import { 
  Heart, Activity, Brain, Thermometer, Lock, ChevronRight, Bell, Shield, 
  Plus, AlertCircle, Star, Download, Users, CheckCircle2, Phone, ArrowRight 
} from 'lucide-react';

// Importing your existing Header component
import Header from '../components/Header'; // Adjust the path as needed

// LiveMetricCard Component with Animation
const LiveMetricCard = ({ 
  icon: Icon, 
  title, 
  value, 
  unit, 
  locked, 
  trend,
  minValue,
  maxValue,
  alertThreshold
}) => {
  const isAlert = value > alertThreshold?.max || value < alertThreshold?.min;

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 relative overflow-hidden group">
      {locked ? (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="text-center">
            <Lock className="w-6 h-6 text-white mb-2 mx-auto" />
            <span className="text-white text-sm">Premium Feature</span>
          </div>
        </div>
      ) : (
        <div className="absolute top-2 right-2">
          {isAlert && (
            <div className="text-[#FF7F50] animate-pulse">
              <AlertCircle className="w-5 h-5" />
            </div>
          )}
        </div>
      )}

      <div className="flex items-center gap-3 mb-2">
        <div className={`rounded-lg p-2 ${isAlert ? 'bg-[#FF7F50]/20' : 'bg-white/20'}`}>
          <Icon className={`w-5 h-5 ${isAlert ? 'text-[#FF7F50]' : 'text-white'}`} />
        </div>
        <span className="text-white/90 text-sm">{title}</span>
      </div>

      <div className="flex items-end gap-2">
        <div className="text-2xl font-bold text-white">
          {value?.toFixed(1)}
          <span className="text-sm ml-1 font-normal text-white/70">{unit}</span>
        </div>
        {trend && !locked && (
          <div className={`text-sm ${trend > 0 ? 'text-green-400' : 'text-[#FF7F50]'}`}>
            {trend > 0 ? '↑' : '↓'} {Math.abs(trend).toFixed(1)}%
          </div>
        )}
      </div>

      {!locked && (
        <div className="mt-2 h-1 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white/40 rounded-full transition-all duration-500"
            style={{ 
              width: `${((value - minValue) / (maxValue - minValue)) * 100}%`,
              backgroundColor: isAlert ? '#FF7F50' : undefined
            }}
          />
        </div>
      )}
    </div>
  );
};

// Live Stats Provider Component
const LiveStatsProvider = ({ children }) => {
  const [metrics, setMetrics] = useState({
    heartRate: { value: 72, trend: 0 },
    bloodPressure: { value: 120, trend: 0 },
    temperature: { value: 36.6, trend: 0 },
    sleep: { value: 7.5, trend: 0 },
    oxygen: { value: 98, trend: 0 },
    stress: { value: 35, trend: 0 }
  });

  const updateMetrics = useCallback(() => {
    setMetrics(prev => {
      const newMetrics = { ...prev };
      Object.keys(newMetrics).forEach(key => {
        const currentValue = newMetrics[key].value;
        const change = (Math.random() * 2 - 1); // Random range
        const newValue = currentValue + change;
        const trend = ((newValue - currentValue) / currentValue) * 100;
        
        newMetrics[key] = {
          value: newValue,
          trend: trend
        };
      });
      return newMetrics;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(updateMetrics, 2000);
    return () => clearInterval(interval);
  }, [updateMetrics]);

  return children(metrics);
};

// Home Component with Header
const Home = () => {
  const alertThresholds = {
    heartRate: { min: 60, max: 100 },
    bloodPressure: { min: 90, max: 140 },
    temperature: { min: 36, max: 37.5 },
    oxygen: { min: 95, max: 100 }
  };

  return (
    <div className="min-h-screen">
      {/* Include the Header component */}
      <Header />

      {/* Add padding to the content below the fixed header */}
      <div className="pt-0"> {/* Adjusted padding to match header height */}
        {/* Hero Section with Live Dashboard */}
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

              {/* Right Column - Live Dashboard */}
              <LiveStatsProvider>
                {(metrics) => (
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-semibold text-white">Live Health Metrics</h2>
                      <div className="flex items-center gap-2 text-white/80">
                        <div className="w-2 h-2 bg-[#FF7F50] rounded-full animate-pulse" />
                        <span className="text-sm">Live Updates</span>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <LiveMetricCard
                        icon={Heart}
                        title="Heart Rate"
                        value={metrics.heartRate.value}
                        unit="bpm"
                        trend={metrics.heartRate.trend}
                        locked={false}
                        minValue={40}
                        maxValue={120}
                        alertThreshold={alertThresholds.heartRate}
                      />
                      <LiveMetricCard
                        icon={Activity}
                        title="Blood Pressure"
                        value={metrics.bloodPressure.value}
                        unit="mmHg"
                        trend={metrics.bloodPressure.trend}
                        locked={true}
                        minValue={80}
                        maxValue={160}
                        alertThreshold={alertThresholds.bloodPressure}
                      />
                      <LiveMetricCard
                        icon={Thermometer}
                        title="Temperature"
                        value={metrics.temperature.value}
                        unit="°C"
                        trend={metrics.temperature.trend}
                        locked={true}
                        minValue={35}
                        maxValue={38}
                        alertThreshold={alertThresholds.temperature}
                      />
                      <LiveMetricCard
                        icon={Brain}
                        title="Sleep Score"
                        value={metrics.sleep.value}
                        unit="hrs"
                        trend={metrics.sleep.trend}
                        locked={true}
                        minValue={0}
                        maxValue={10}
                      />
                    </div>

                    <div className="mt-6 p-4 bg-white/5 rounded-xl">
                      <div className="flex items-center justify-between text-white/90">
                        <div className="flex items-center gap-2">
                          <Lock className="w-4 h-4" />
                          <span className="text-sm">Unlock all metrics with Premium</span>
                        </div>
                        <button className="text-sm text-[#FF7F50] hover:text-[#FF6347] font-medium">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </LiveStatsProvider>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            {/* Main Journey */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">How Your Personal Health Guardian Works</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Simple setup, intelligent monitoring, continuous support
              </p>
            </div>

            {/* Setup Process */}
            <div className="grid md:grid-cols-4 gap-8 mb-20">
              {[
                {
                  icon: Download,
                  title: "Quick Setup",
                  description: "Download app and connect your devices in minutes",
                  color: "from-[#008B8B] to-[#20B2AA]"
                },
                {
                  icon: Users,
                  title: "Connect Family",
                  description: "Add family members and care team to your network",
                  color: "from-[#008B8B] to-[#20B2AA]"
                },
                {
                  icon: Shield,
                  title: "Smart Monitoring",
                  description: "AI-powered health analysis begins automatically",
                  color: "from-[#008B8B] to-[#20B2AA]"
                },
                {
                  icon: Heart,
                  title: "24/7 Support",
                  description: "Professional healthcare team ready to help",
                  color: "from-[#008B8B] to-[#20B2AA]"
                }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl p-8 border border-gray-200">
                    <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-8 text-[#008B8B]">
                      <ChevronRight className="w-8 h-8" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Day in Life Scenario */}
            <div className="bg-white rounded-2xl p-8 mb-20">
              <h3 className="text-2xl font-bold mb-8 text-center">Your Day with Personal Health Guardian</h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    time: "Morning",
                    title: "Health Check",
                    description: "Wake up to personalized health insights and daily recommendations",
                    icon: Brain,
                    metrics: ["Sleep Quality", "Morning Vitals", "Medication Reminders"]
                  },
                  {
                    time: "Throughout Day",
                    title: "Active Monitoring",
                    description: "Continuous health tracking with real-time alerts if needed",
                    icon: Activity,
                    metrics: ["Activity Levels", "Vital Signs", "Location Safety"]
                  },
                  {
                    time: "Evening",
                    title: "Family Updates",
                    description: "Automated updates keep family informed of your wellbeing",
                    icon: Users,
                    metrics: ["Daily Summary", "Health Trends", "Activity Log"]
                  },
                  {
                    time: "24/7",
                    title: "Professional Care",
                    description: "Round-the-clock access to healthcare support",
                    icon: Shield,
                    metrics: ["Emergency Response", "Health Advice", "Care Coordination"]
                  }
                ].map((period, index) => (
                  <div key={index} className="relative">
                    <div className="absolute top-0 right-0 px-3 py-1 bg-[#008B8B]/10 rounded-full">
                      <span className="text-sm text-[#008B8B] font-medium">{period.time}</span>
                    </div>

                    <div className="pt-8">
                      <div className="w-14 h-14 bg-[#008B8B]/10 rounded-xl flex items-center justify-center mb-4">
                        <period.icon className="w-7 h-7 text-[#008B8B]" />
                      </div>

                      <h4 className="text-lg font-bold mb-2">{period.title}</h4>
                      <p className="text-gray-600 mb-4">{period.description}</p>

                      <ul className="space-y-2">
                        {period.metrics.map((metric, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle2 className="w-4 h-4 text-[#008B8B]" />
                            {metric}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Platform Preview */}
            <div className="relative bg-gradient-to-br from-[#008B8B] to-[#20B2AA] rounded-2xl p-8 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.15)_1px,_transparent_0)] bg-[size:20px_20px]" />

              <div className="relative grid md:grid-cols-3 gap-8">
                <div className="text-white md:col-span-1">
                  <h3 className="text-2xl font-bold mb-4">Your Complete Health Platform</h3>
                  <p className="mb-6 text-white/90">Access your health data across all devices with our intuitive interface</p>

                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                        <Phone className="w-4 h-4 text-white" />
                      </div>
                      <span>Mobile App</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <span>Family Dashboard</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      <span>Professional Portal</span>
                    </li>
                  </ul>

                  <button className="mt-8 bg-white text-[#008B8B] px-6 py-3 rounded-xl flex items-center gap-2">
                    View Demo
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="md:col-span-2 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4">
                      <img src="/api/placeholder/400/250" alt="Mobile App Interface" className="rounded-lg w-full" />
                      <p className="text-sm font-medium mt-2">Mobile Experience</p>
                    </div>
                    <div className="bg-white rounded-xl p-4">
                      <img src="/api/placeholder/400/250" alt="Family Dashboard" className="rounded-lg w-full" />
                      <p className="text-sm font-medium mt-2">Family View</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <img src="/api/placeholder/800/200" alt="Professional Monitoring Dashboard" className="rounded-lg w-full" />
                    <p className="text-sm font-medium mt-2">Professional Monitoring Center</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;