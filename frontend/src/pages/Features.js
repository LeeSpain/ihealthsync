'use client';

import React, { useState } from 'react';
import { 
  HeartPulse, Brain, Shield, Activity, Bot, Heart, Check, Stethoscope, Scale, 
  ChevronRight, ArrowRight, Users, Bell, Clock 
} from 'lucide-react';
import Header from '../components/Header'; // Ensure Header is imported

const HeroSection = () => (
  <section className="relative bg-gradient-to-br from-[#008B8B] via-[#009999] to-[#20B2AA] pt-24 pb-32">
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.15)_1px,_transparent_0)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-transparent" />
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-md">
            Seamless Health Monitoring
            <span className="block mt-2 text-5xl bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700">
              Empower Your Health Journey
            </span>
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Explore advanced health features, from AI-powered predictions to real-time emergency alerts.
          </p>
          <button className="bg-[#FF7F50] text-white py-3 px-6 rounded-full hover:bg-[#FF6347] transition duration-300">
            Get Started
          </button>
        </div>

        <div className="relative rounded-lg overflow-hidden">
          <img
            src="/iHealth-feature1.jpg"
            alt="Health Monitoring Feature"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  </section>
);

const TabButton = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={`px-8 py-4 rounded-xl text-sm font-medium transition-all
      ${active ? 
        'bg-gradient-to-r from-[#008B8B] to-[#20B2AA] text-white shadow-lg scale-105' : 
        'bg-gradient-to-r from-[#008B8B]/10 to-[#20B2AA]/10 text-[#008B8B] hover:from-[#008B8B]/20 hover:to-[#20B2AA]/20'}`}
  >
    {children}
  </button>
);

const FeatureCard = ({ icon: Icon, title, description, features }) => (
  <div className="bg-gradient-to-br from-white to-[#008B8B]/5 rounded-2xl overflow-hidden border border-[#008B8B]/10 hover:shadow-xl transition-all group">
    <div className="grid md:grid-cols-5 gap-6">
      <div className="md:col-span-2 p-8 bg-gradient-to-br from-[#008B8B]/10 to-[#20B2AA]/5">
        <div className="bg-gradient-to-br from-[#008B8B] to-[#20B2AA] rounded-xl p-4 group-hover:scale-110 transition-all mb-6 inline-block">
          <Icon className="w-10 h-10 text-white" />
        </div>
        <div className="h-48 bg-[#008B8B]/5 rounded-xl flex items-center justify-center">
          <span className="text-gray-400">Feature visualization</span>
        </div>
      </div>
      <div className="md:col-span-3 p-8">
        <h3 className="text-2xl font-bold mb-3 text-[#008B8B]">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3 group/item hover:bg-[#008B8B]/5 p-2 rounded-lg transition-all">
              <div className="bg-gradient-to-r from-[#FF7F50] to-[#FF6347] rounded-full p-1 group-hover:item:scale-110 transition-all">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-600 group-hover:item:text-[#008B8B] transition-colors">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const FeaturesContent = () => {
  const [activeTab, setActiveTab] = useState('health');

  const features = {
    health: [
      {
        icon: HeartPulse,
        title: "Members Dashboard",
        description: "Comprehensive health monitoring and tracking in real-time",
        features: [
          "Personalized health metrics dashboard",
          "Real-time vital signs monitoring",
          "Historical data analysis and trends"
        ]
      },
      {
        icon: Scale,
        title: "Medication Management",
        description: "Smart medication tracking and dispensing system",
        features: [
          "Automated dispensing schedules",
          "Medication inventory tracking",
          "Compliance monitoring and alerts"
        ]
      },
      {
        icon: Activity,
        title: "Vital Signs Tracking",
        description: "Advanced monitoring of all vital health metrics",
        features: [
          "Continuous heart rate monitoring",
          "Blood pressure tracking",
          "Sleep pattern analysis"
        ]
      }
    ],
    emergency: [
      {
        icon: Shield,
        title: "Emergency Response",
        description: "24/7 emergency monitoring and rapid response system",
        features: [
          "Instant emergency alerts",
          "Direct connection to emergency services",
          "Family notification system"
        ]
      },
      {
        icon: Bell,
        title: "Alert System",
        description: "Intelligent alert system for critical situations",
        features: [
          "Customizable alert thresholds",
          "Multiple notification channels",
          "Priority-based alerting"
        ]
      },
      {
        icon: Clock,
        title: "24/7 Monitoring",
        description: "Round-the-clock professional health monitoring",
        features: [
          "Continuous vital sign monitoring",
          "Real-time health status updates",
          "Immediate response protocols"
        ]
      }
    ],
    ai: [
      {
        icon: Brain,
        title: "AI Health Predictions",
        description: "Advanced AI-powered health forecasting and analysis",
        features: [
          "Predictive health analytics",
          "Early warning system",
          "Personalized health insights"
        ]
      },
      {
        icon: Bot,
        title: "Smart Assistant",
        description: "AI-powered health companion and support system",
        features: [
          "24/7 virtual health assistant",
          "Personalized health recommendations",
          "Natural language interaction"
        ]
      },
      {
        icon: Stethoscope,
        title: "Health Analytics",
        description: "Comprehensive health data analysis and insights",
        features: [
          "Advanced data visualization",
          "Trend analysis and reporting",
          "Health score calculation"
        ]
      }
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-[#008B8B]/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Advanced Features</h2>
          <p className="text-xl text-gray-600">Comprehensive health monitoring solutions</p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <TabButton 
            active={activeTab === 'health'} 
            onClick={() => setActiveTab('health')}
          >
            Core Health
          </TabButton>
          <TabButton 
            active={activeTab === 'emergency'} 
            onClick={() => setActiveTab('emergency')}
          >
            Emergency Services
          </TabButton>
          <TabButton 
            active={activeTab === 'ai'} 
            onClick={() => setActiveTab('ai')}
          >
            AI Solutions
          </TabButton>
        </div>

        <div className="grid gap-8">
          {features[activeTab].map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Page = () => (
  <div>
    <Header /> {/* Adding the Header component */}
    <main className="relative pt-16"> {/* Adjust padding for Header */}
      <HeroSection />
      <FeaturesContent />
    </main>
  </div>
);

export default Page;
