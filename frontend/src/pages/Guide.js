import React from 'react';
import {
  Download,
  Star,
  Shield,
  Activity,
  Pill,
  Stethoscope,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';

const StepCard = ({ step, index }) => (
  <div className="bg-white rounded-2xl p-8 border border-gray-200 relative">
    <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#008B8B]/10 flex items-center justify-center">
      <span className="text-[#008B8B] font-bold">0{index + 1}</span>
    </div>

    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 bg-[#008B8B]/10 rounded-xl flex items-center justify-center">
        <step.icon className="w-6 h-6 text-[#008B8B]" />
      </div>
      <div>
        <h2 className="text-xl font-bold text-gray-900">{step.title}</h2>
        <p className="text-gray-600">{step.description}</p>
      </div>
    </div>

    {step.features && (
      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        {step.features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#008B8B]" />
            <span className="text-gray-600">{feature}</span>
          </div>
        ))}
      </div>
    )}

    <button className="bg-[#008B8B] text-white px-6 py-3 rounded-xl hover:bg-[#20B2AA] transition-colors flex items-center gap-2">
      {step.action}
      <ChevronRight className="w-4 h-4" />
    </button>

    {step.cost && (
      <div className="absolute bottom-4 right-4 text-sm text-gray-500">{step.cost}</div>
    )}
  </div>
);

const StepGuide = () => {
  const steps = [
    {
      step: 1,
      title: 'Start with Free App',
      icon: Download,
      description: "Download iHealth-Sync app from your device's app store",
      features: [
        'Basic health monitoring',
        'Single emergency contact',
        'Standard SOS alerts',
        'Basic dashboard',
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
        'AI-powered health monitoring',
        'Up to 5 emergency contacts',
        'Advanced health analytics',
        'Access to all devices',
      ],
      action: 'Upgrade Now',
      cost: '€4.99/month',
    },
    {
      step: 3,
      title: 'Add Basic Monitoring',
      icon: Shield,
      description: 'Essential devices for safety and basic health tracking',
      features: [
        'Guardian Button for emergencies',
        'Heart Rate Monitor',
        'Family Dashboard integration',
        'Real-time monitoring',
      ],
      action: 'View Devices',
    },
    {
      step: 4,
      title: 'Enhanced Health Monitoring',
      icon: Activity,
      description: 'Additional devices for comprehensive health tracking',
      features: [
        'Smart Scales integration',
        'Temperature monitoring',
        'Sleep quality tracking',
        'Advanced analytics',
      ],
      action: 'Explore Devices',
    },
    {
      step: 5,
      title: 'Professional Monitoring',
      icon: Pill,
      description: 'Expert monitoring services for specialized care',
      features: [
        'Medication management',
        'Professional oversight',
        'Health data analysis',
        'Expert support team',
      ],
      action: 'Add Services',
    },
    {
      step: 6,
      title: 'Premium Care Services',
      icon: Stethoscope,
      description: 'Additional professional support services',
      features: [
        '24/7 emergency response',
        'Professional monitoring',
        'Dedicated nursing support',
        'Virtual consultations',
      ],
      action: 'Explore Care',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Join iHealth-Sync</h1>
          <p className="text-xl text-gray-600">
            Follow these steps to build your personalized health monitoring system
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>

        <div className="mt-8 bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold mb-4">Important Notes:</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#008B8B]" />
              Premium subscription required for all devices
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#008B8B]" />
              Professional services can be subscribed independently
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#008B8B]" />
              All devices include shipping and setup support
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#008B8B]" />
              No long-term commitments - cancel anytime
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StepGuide;