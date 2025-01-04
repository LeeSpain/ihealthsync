import React, { useState } from 'react';
import {
  Download,
  Star,
  Shield,
  Activity,
  Pill,
  Stethoscope,
  ChevronRight,
  CheckCircle2,
  Info,
  ArrowRight,
} from 'lucide-react';
import Header from '../components/Header'; // Importing the header component

const StepCard = ({ step, index, isExpanded, onExpand }) => (
  <div 
    className={`bg-white rounded-2xl border border-gray-200 transition-all duration-300 ${
      isExpanded ? 'shadow-lg scale-105' : 'hover:shadow-md'
    }`}
  >
    {/* Card Header */}
    <div className="p-6 border-b border-gray-100">
      <div className="flex items-start gap-4">
        <div className="relative">
          <div className="w-14 h-14 bg-[#A390E4]/10 rounded-xl flex items-center justify-center">
            <step.icon className="w-7 h-7 text-[#A390E4]" />
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#10B981] text-white flex items-center justify-center text-sm font-bold">
            {index + 1}
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-900 mb-1">{step.title}</h2>
          <p className="text-sm text-gray-600">{step.description}</p>
        </div>
      </div>
    </div>

    {/* Card Body */}
    <div className="p-6 space-y-6">
      {/* Features List */}
      <div className="space-y-3">
        {step.features?.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#A390E4] shrink-0 mt-0.5" />
            <span className="text-sm text-gray-600">{feature}</span>
          </div>
        ))}
      </div>

      {/* Action Button */}
      <div className="flex items-center justify-between">
        <button 
          onClick={() => onExpand(index)}
          className="bg-[#10B981] text-white px-6 py-3 rounded-xl hover:bg-[#20B2AA] transition-colors flex items-center gap-2"
        >
          {step.action}
          <ArrowRight className="w-4 h-4" />
        </button>
        {step.cost && (
          <div className="text-sm">
            <span className="text-gray-500">From</span>
            <span className="ml-1 font-semibold text-[#10B981]">{step.cost}</span>
          </div>
        )}
      </div>
    </div>
  </div>
);

const StepGuide = () => {
  const [expandedStep, setExpandedStep] = useState(null);

  const steps = [
    {
      step: 1,
      title: 'Start with Free App',
      icon: Download,
      description: "Download iHealth-Sync app from your device's app store",
      features: [
        'Basic health monitoring dashboard',
        'Single emergency contact setup',
        'Standard SOS alerts system',
        'Basic health tracking features',
      ],
      action: 'Download Free',
      cost: 'Free',
    },
    {
      step: 2,
      title: 'Upgrade to Premium',
      icon: Star,
      description: 'Unlock full platform capabilities with premium subscription',
      features: [
        'AI-powered health monitoring and insights',
        'Up to 5 emergency contacts with priority alerts',
        'Advanced health analytics and reporting',
        'Full access to all monitoring devices',
      ],
      action: 'Upgrade Now',
      cost: '€4.99/mo',
    },
    {
      step: 3,
      title: 'Basic Health Monitoring',
      icon: Shield,
      description: 'Essential devices for safety and basic health tracking',
      features: [
        'Guardian Button for instant emergency alerts',
        'Heart Rate Monitor with real-time tracking',
        'Family Dashboard with live updates',
        '24/7 basic monitoring service',
      ],
      action: 'View Devices',
      cost: '€9.99/mo',
    },
    {
      step: 4,
      title: 'Advanced Health Tracking',
      icon: Activity,
      description: 'Comprehensive health monitoring system',
      features: [
        'Smart Scale with body composition analysis',
        'Temperature monitoring with alerts',
        'Advanced sleep quality tracking',
        'Detailed health analytics dashboard',
      ],
      action: 'Explore Devices',
      cost: '€14.99/mo',
    },
    {
      step: 5,
      title: 'Professional Care',
      icon: Pill,
      description: 'Expert monitoring services for specialized care',
      features: [
        'Smart Medication Management System',
        'Professional health oversight',
        'Monthly health data analysis',
        'Priority support team access',
      ],
      action: 'Add Services',
      cost: '€19.99/mo',
    },
    {
      step: 6,
      title: 'Premium Healthcare',
      icon: Stethoscope,
      description: 'Complete professional healthcare support',
      features: [
        '24/7 emergency response system',
        'Professional medical monitoring',
        'On-demand nursing support',
        'Unlimited virtual consultations',
      ],
      action: 'Explore Care',
      cost: '€29.99/mo',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Add padding to avoid header overlap */}
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#008B8B] to-[#20B2AA] py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">Build Your Health Monitoring System</h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Follow our simple step-by-step guide to create your personalized healthcare solution
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <StepCard 
                  key={index} 
                  step={step} 
                  index={index}
                  isExpanded={expandedStep === index}
                  onExpand={setExpandedStep}
                />
              ))}
            </div>

            {/* Important Notes */}
            <div className="mt-12 bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <Info className="w-5 h-5 text-[#008B8B]" />
                <h3 className="font-bold text-gray-900">Important Information</h3>
              </div>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#008B8B]" />
                  <span className="text-gray-600">Premium subscription required for all devices</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#008B8B]" />
                  <span className="text-gray-600">Professional services available independently</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#008B8B]" />
                  <span className="text-gray-600">All devices include setup support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#008B8B]" />
                  <span className="text-gray-600">Monthly billing - cancel anytime</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StepGuide;
