'use client';

import React from 'react';
import { 
  Check, 
  Stethoscope, 
  Users, 
  Clipboard, 
  Network, 
  Brain, 
  Lock,
  ArrowRight,
  HeartPulse,
  Shield,
  Activity,
  Bot,
  Heart,
  Scale,
  ChevronRight,
  Bell,
  Clock,
  Link,
  FileText,
  Microscope,
  BarChart,
  Share2,
  MonitorSmartphone
} from 'lucide-react';
import Header from '../components/Header';

// Hero Section Component
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

// Feature Section Component
const FeatureSection = ({ features, title, subtitle }) => (
  <section className="py-16 relative overflow-hidden">
    {/* Decorative background elements */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#008B8B]/5 via-white to-[#008B8B]/5 pointer-events-none" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(0,139,139,0.05)_1px,_transparent_0)] bg-[size:20px_20px] pointer-events-none" />
    
    {/* Section Header */}
    <div className="text-center mb-16 relative">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#008B8B]/10 text-[#008B8B] mb-4 border border-[#008B8B]/20">
        <span className="w-2 h-2 rounded-full bg-[#FF7F50] mr-2"></span>
        {subtitle}
        <span className="w-2 h-2 rounded-full bg-[#FF7F50] ml-2"></span>
      </div>
      <h2 className="text-4xl font-bold mb-4 text-gray-900">{title}</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-[#008B8B] to-[#20B2AA] mx-auto rounded-full" />
    </div>

    {/* Features Layout */}
    <div className="max-w-7xl mx-auto px-6">
      <div className="space-y-24">
        {features.map((feature, idx) => (
          <div key={idx} className="relative bg-white rounded-3xl shadow-lg overflow-hidden">
            {/* Feature section background */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent" />
            <div className={`relative backdrop-blur-sm rounded-3xl ${
              idx % 2 === 0 
                ? 'bg-gradient-to-r from-[#008B8B]/10 via-white to-transparent' 
                : 'bg-gradient-to-l from-[#008B8B]/10 via-white to-transparent'
            } p-12 hover:bg-white/50 transition-all duration-500 group`}>
              <div className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16`}>
                {/* Icon and Title Section */}
                <div className="flex-1 text-center md:text-left relative">
                  <div className="inline-block bg-gradient-to-br from-[#008B8B] to-[#20B2AA] rounded-2xl p-5 mb-8 transform group-hover:scale-110 transition-all shadow-lg group-hover:shadow-[#008B8B]/50">
                    <feature.icon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-[#008B8B] group-hover:text-[#20B2AA] transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">{feature.description}</p>
                  <button className="inline-flex items-center px-4 py-2 rounded-full border border-[#008B8B] text-[#008B8B] hover:bg-[#008B8B] hover:text-white transition-colors group/button">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Features List */}
                <div className="flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {feature.features.map((item, index) => (
                      <div key={index} 
                           className="flex items-start gap-4 group/item p-4 rounded-xl transition-all
                                    hover:bg-gradient-to-r hover:from-[#008B8B]/10 hover:to-transparent">
                        <div className="bg-gradient-to-r from-[#FF7F50] to-[#FF6347] rounded-full p-1.5 mt-1
                                    group-hover/item:scale-110 transition-all shadow-sm">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <span className="text-gray-700 group-hover/item:text-[#008B8B] transition-colors font-medium block">
                            {item}
                          </span>
                          <span className="text-sm text-gray-500 mt-1 block">
                            Click to explore
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className={`absolute ${
                idx % 2 === 0 ? '-right-3' : '-left-3'
              } top-1/2 -translate-y-1/2 w-6 h-32 bg-gradient-to-b from-[#FF7F50]/20 via-[#FF7F50]/10 to-transparent rounded-full blur-xl`} />
              
              {/* Connection lines */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#008B8B]/20 to-transparent" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Features Content Component
const FeaturesContent = () => {
  const professionalFeatures = [
    {
      icon: Stethoscope,
      title: "Professional Dashboard",
      description: "An intuitive, comprehensive monitoring interface designed specifically for healthcare providers. This powerful dashboard centralizes patient data, vital signs, and medical histories in one secure location, enabling real-time monitoring and quick response capabilities. Healthcare professionals can efficiently manage multiple patients while maintaining the highest standards of care.",
      features: [
        "Multi-patient monitoring system with customizable alerts and thresholds",
        "Clinical-grade health metrics visualization with trend analysis",
        "Complete patient history and treatment tracking with detailed timeline views",
        "Advanced alert management system with priority-based notifications"
      ]
    },
    {
      icon: Users,
      title: "Family & Friends",
      description: "Strengthen the circle of care by keeping loved ones informed and involved. Our family portal creates a supportive network where designated family members and friends can stay updated on their loved one's health status, receive important notifications, and participate in care coordination - all while maintaining appropriate privacy boundaries and user consent.",
      features: [
        "Customizable real-time health status updates with privacy controls",
        "Intelligent notification settings for different levels of alerts",
        "Priority emergency alert notifications with immediate response options",
        "Role-based secure access to relevant health data and reports"
      ]
    },
    {
      icon: Clipboard,
      title: "Medical Team Collaboration",
      description: "Transform how healthcare teams work together with our advanced collaboration platform. Break down communication barriers between different healthcare providers, specialists, and care teams. Our system enables seamless information sharing, coordinated care planning, and real-time updates, ensuring that everyone involved in patient care stays aligned and informed.",
      features: [
        "Secure inter-professional communication platform with instant messaging",
        "Collaborative care planning tools with task assignment and tracking",
        "Integrated treatment coordination system with scheduling capabilities",
        "HIPAA-compliant document sharing with version control"
      ]
    }
  ];

  const technicalFeatures = [
    {
      icon: Network,
      title: "Integration Hub",
      description: "A sophisticated integration platform that connects and unifies your entire healthcare ecosystem. Our hub seamlessly integrates with existing medical devices, EHR systems, and third-party healthcare applications, creating a cohesive network that eliminates data silos and enables smooth information flow while maintaining the highest security standards.",
      features: [
        "Universal device compatibility with plug-and-play setup",
        "Automated real-time data synchronization across platforms",
        "Standards-based healthcare system integration (HL7, FHIR)",
        "Comprehensive API management console with detailed documentation"
      ]
    },
    {
      icon: Brain,
      title: "Advanced Analytics Engine",
      description: "Harness the power of cutting-edge analytics and artificial intelligence to transform healthcare data into actionable insights. Our analytics engine processes complex health data in real-time, identifying patterns, predicting potential health issues, and providing evidence-based recommendations to support clinical decision-making.",
      features: [
        "State-of-the-art machine learning algorithms for health prediction",
        "Comprehensive predictive analytics with risk assessment",
        "Advanced pattern recognition for early warning detection",
        "Customizable reporting tools with interactive visualizations"
      ]
    },
    {
      icon: Lock,
      title: "Security Framework",
      description: "Built from the ground up with security and compliance in mind, our robust security framework protects sensitive health information at every level. We implement multiple layers of security controls, regular security audits, and continuous monitoring to ensure your data remains protected while maintaining accessibility for authorized users.",
      features: [
        "Complete HIPAA compliance with regular audit support",
        "Military-grade end-to-end encryption for all data",
        "Granular access control management with role-based permissions",
        "Comprehensive audit trail logging with anomaly detection"
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-[#008B8B]/5">
      <div className="space-y-8">
        <FeatureSection 
          features={professionalFeatures}
          title="Multi-User Access & Collaboration"
          subtitle="Connecting Care Networks"
        />
        <FeatureSection 
          features={technicalFeatures}
          title="Technical Capabilities"
          subtitle="System Architecture"
        />
      </div>
    </div>
  );
};

// Main Features Page Component
const FeaturesPage = () => (
  <div>
    <Header />
    <main className="relative pt-16">
      <HeroSection />
      <FeaturesContent />
    </main>
  </div>
);

export default FeaturesPage;