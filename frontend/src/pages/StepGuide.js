'use client';

import React from "react";
import { 
  Download, Star, ShieldCheck, Users, Heart, Scale, Thermometer, 
  ArrowRight, Smartphone, CheckCircle2, ChevronRight, Check 
} from "lucide-react";
import Header from "../components/Header";
// Enhanced StepBox with Connection Lines
const StepBox = ({ stepNumber, title, description, features, icon, isLast }) => (
  <div className="relative">
    {/* Connection Line */}
    {!isLast && (
      <div className="absolute left-[47px] top-[120px] w-1 h-24 bg-gradient-to-b from-[#008B8B] to-[#20B2AA]" />
    )}
    
    <div className="flex gap-8">
      {/* Step Number Circle */}
      <div className="flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br from-[#008B8B] to-[#20B2AA] flex items-center justify-center text-white text-2xl font-bold shadow-lg">
        Step {stepNumber}
      </div>

      {/* Content Card */}
      <div className="flex-grow bg-gradient-to-br from-white to-[#008B8B]/5 rounded-2xl border border-[#008B8B]/20 p-8 hover:shadow-xl transition-all">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-br from-[#008B8B] to-[#20B2AA] text-white shadow-md">
            {React.createElement(icon, { size: 24 })}
          </div>
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-6">{description}</p>

        {/* Features */}
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="bg-gradient-to-r from-[#FF7F50] to-[#FF6347] rounded-full p-1 mt-1">
                <Check className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-gray-700 font-medium">{feature.title}</p>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// StepsContent Component
const StepsContent = () => {
  const steps = [
    {
      stepNumber: 1,
      title: "Begin Your Journey",
      description: "Start with our Members Dashboard for the complete health monitoring experience.",
      icon: Download,
      features: [
        {
          title: "Members Dashboard Access",
          description: "Subscribe to unlock premium features, real-time monitoring, and personalized insights."
        },
        {
          title: "Free App Option",
          description: "Try basic services with our Free App to experience essential health monitoring features."
        },
        {
          title: "Premium Benefits",
          description: "Access advanced AI monitoring, multiple emergency contacts, and priority response."
        }
      ]
    },
    {
      stepNumber: 2,
      title: "Customize Your Package",
      description: "Build your perfect health monitoring solution by selecting products and services.",
      icon: Star,
      features: [
        {
          title: "Browse & Select",
          description: "Explore our range of AI-powered devices and professional monitoring services."
        },
        {
          title: "Package Builder",
          description: "Add devices and services to create your personalized monitoring system."
        },
        {
          title: "Instant Ordering",
          description: "Complete your order and prepare for seamless integration of all services."
        }
      ]
    },
    {
      stepNumber: 3,
      title: "Activate Your Services",
      description: "Quick and secure activation process with AI-guided setup assistance.",
      icon: ShieldCheck,
      features: [
        {
          title: "Email Confirmation",
          description: "Receive instant access links and setup instructions via email."
        },
        {
          title: "AI Guardian Setup",
          description: "Let our AI Guardian walk you through profile creation and preference settings."
        },
        {
          title: "Dashboard Configuration",
          description: "Complete your profile and customize your monitoring preferences."
        }
      ]
    },
    {
      stepNumber: 4,
      title: "Connect & Begin",
      description: "Start enjoying the full benefits of your personalized iHealth-Sync system.",
      icon: Smartphone,
      features: [
        {
          title: "Device Integration",
          description: "Connect your health monitoring devices with easy pairing instructions."
        },
        {
          title: "Service Activation",
          description: "Activate all your selected services and monitoring features."
        },
        {
          title: "24/7 Support",
          description: "Access continuous support and enjoy peace of mind with real-time monitoring."
        }
      ],
      isLast: true
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#008B8B]/10 text-[#008B8B] px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF7F50]"></span>
            <span className="text-sm font-medium">Getting Started</span>
            <span className="w-2 h-2 rounded-full bg-[#FF7F50]"></span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Journey to Better Health</h2>
          <p className="text-xl text-gray-600">Follow these steps to begin your personalized health monitoring experience</p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <StepBox key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Choice Section Component
const ChoiceSection = () => (
  <section className="bg-gradient-to-br from-[#008B8B] via-[#009999] to-[#20B2AA] py-20">
    <div className="max-w-7xl mx-auto px-6">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Choose Your Path</h2>
        <p className="text-xl text-white/90">Select the option that best fits your needs</p>
      </div>

      {/* Options Container */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Free App Option */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
          <div className="flex flex-col items-center text-center">
            <Download className="w-16 h-16 text-white mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Download Free App</h3>
            <p className="text-white/90 mb-6">
              Experience basic health monitoring features and see how iHealth-Sync can help you.
            </p>
            <ul className="text-white/90 mb-8 text-left space-y-3">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[#FF7F50]" />
                <span>Basic health monitoring</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[#FF7F50]" />
                <span>Single emergency contact</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[#FF7F50]" />
                <span>Standard alerts</span>
              </li>
            </ul>
            <button className="bg-white text-[#008B8B] px-8 py-3 rounded-full font-medium hover:bg-[#FF7F50] hover:text-white transition-all">
              Download Now
            </button>
          </div>
        </div>

        {/* Premium Option */}
        <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:scale-[1.02]">
          <div className="flex flex-col items-center text-center">
            <Star className="w-16 h-16 text-[#FF7F50] mb-6" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Join Us Today</h3>
            <p className="text-gray-600 mb-6">
              Get full access to our comprehensive health monitoring platform.
            </p>
            <ul className="text-gray-600 mb-8 text-left space-y-3">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[#008B8B]" />
                <span>AI-powered health monitoring</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[#008B8B]" />
                <span>Multiple emergency contacts</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[#008B8B]" />
                <span>Premium services & devices</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[#008B8B]" />
                <span>24/7 professional monitoring</span>
              </li>
            </ul>
            <button className="bg-gradient-to-r from-[#008B8B] to-[#20B2AA] text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
              Get Started
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Hero Section Component
const HeroSection = () => (
  <section className="relative bg-gradient-to-br from-[#008B8B] via-[#009999] to-[#20B2AA] py-24 text-center text-white overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.15)_1px,_transparent_0)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-transparent" />
    </div>

    <div className="relative z-10 max-w-4xl mx-auto px-6">
      <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
        <Star size={16} className="text-[#FF7F50]" />
        <span className="text-sm font-medium">Simple 4-step process</span>
      </div>

      <h1 className="text-5xl font-extrabold mb-6 leading-tight">
        Start Your Health Journey<br />
        <span className="text-[#FF7F50]">in Minutes</span>
      </h1>

      <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
        Follow our simple guide to begin your personalized health monitoring experience. No complicated setup, just four easy steps.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="group flex items-center gap-2 bg-white text-[#008B8B] px-6 py-3 rounded-full font-medium hover:bg-[#FF7F50] hover:text-white transition-all duration-300">
          Start Now
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-all duration-300">
          Watch Demo
        </button>
      </div>
    </div>
  </section>
);

// Page Component
const Page = () => (
  <div>
    <Header /> {/* Imported Header component */}
    <main className="relative pt-16">
      <HeroSection />
      <StepsContent />
      <ChoiceSection />
    </main>
  </div>
);

export default Page;