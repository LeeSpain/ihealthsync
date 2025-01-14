'use client';

import React from 'react';
import { Link } from 'react-router-dom'; // Use react-router-dom's Link
import { 
  Layout, Users, Brain, Activity, ChevronRight, 
  Bell, Shield, ShieldCheck, Heart, Scale, Thermometer, Moon,
  Pill, Phone, Stethoscope, Check, Play, ArrowRight
} from 'lucide-react';

// Import the Header component from its file
import Header from '../../components/Header';

// Enhanced Product Card Component
const ProductCard = ({ icon: Icon, title, description, features, href }) => (
  <div className="bg-gradient-to-br from-white to-[#008B8B]/5 rounded-2xl overflow-hidden border border-[#008B8B]/20 hover:shadow-2xl transition-all group">
    <div className="p-8">
      {/* Icon Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-gradient-to-br from-[#008B8B] to-[#20B2AA] p-4 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform">
          <Icon size={28} />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 group-hover:text-[#008B8B] transition-colors">{title}</h3>
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
              <p className="text-gray-700">{feature}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Learn More Button */}
      <Link to={href} className="w-full mt-8 py-3 bg-gradient-to-r from-[#008B8B] to-[#20B2AA] text-white rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
        Learn More
        <ChevronRight size={18} />
      </Link>
    </div>
  </div>
);

// Section Title Component
const SectionTitle = ({ title, subtitle, description }) => (
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 bg-[#008B8B]/10 text-[#008B8B] px-4 py-2 rounded-full mb-4">
      <span className="w-2 h-2 rounded-full bg-[#FF7F50]"></span>
      <span className="text-sm font-medium">{subtitle}</span>
      <span className="w-2 h-2 rounded-full bg-[#FF7F50]"></span>
    </div>
    <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>
  </div>
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
        <Activity size={16} className="text-[#FF7F50]" />
        <span className="text-sm font-medium">Digital Health Solutions</span>
      </div>

      <h1 className="text-5xl font-extrabold mb-6 leading-tight">
        Smart Health Management<br />
        <span className="text-[#FF7F50]">Powered by AI</span>
      </h1>

      <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
        Experience the future of health monitoring with our intelligent digital solutions. 
        Advanced dashboards and AI-powered insights for you and your family.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="group flex items-center gap-2 bg-white text-[#008B8B] px-6 py-3 rounded-full font-medium hover:bg-[#FF7F50] hover:text-white transition-all duration-300">
          Explore Solutions
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-all duration-300">
          Watch Demo
          <Play size={18} className="ml-1" />
        </button>
      </div>

      {/* Feature highlights in a row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto">
        {[
          { icon: Layout, text: "Smart Dashboards" },
          { icon: Brain, text: "AI-Powered Insights" },
          { icon: Shield, text: "24/7 Monitoring" },
          { icon: Bell, text: "Instant Alerts" }
        ].map((item, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
            <item.icon className="w-6 h-6 text-[#FF7F50] mx-auto mb-2" />
            <p className="text-sm font-medium">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Main Page Component
const DigitalSolutionsPage = () => {
  // Dashboard Features
  const dashboards = [
    {
      icon: Layout,
      title: "Members Dashboard",
      description: "Your personalized command center for comprehensive health monitoring and management.",
      features: [
        "Personalized health metrics dashboard",
        "Real-time vital signs monitoring",
        "Historical data analysis and trends",
        "Customizable alert settings"
      ],
      href: "#" // Add a placeholder link or actual link for other cards
    },
    {
      icon: Users,
      title: "Family Dashboard",
      description: "Stay connected with loved ones through our dedicated family monitoring platform.",
      features: [
        "Multi-member health tracking",
        "Family emergency alerts",
        "Shared health reports",
        "Care coordination tools"
      ],
      href: "#" // Add a placeholder link or actual link for other cards
    }
  ];

  // AI Products
  const aiProducts = [
    {
      icon: ShieldCheck,
      title: "Guardian Button",
      description: "Emergency SOS button for quick alerts and safety.",
      features: [
        "One-touch emergency alert",
        "Water-resistant design",
        "GPS tracking",
        "Long battery life"
      ],
      href: "#" // Add a placeholder link or actual link for other cards
    },
    {
      icon: Heart,
      title: "Heart Rate Monitor",
      description: "Monitor your heart health in real-time.",
      features: [
        "24/7 heart rate monitoring",
        "ECG capabilities",
        "Irregular rhythm detection",
        "Mobile app integration"
      ],
      href: "#" // Add a placeholder link or actual link for other cards
    },
    {
      icon: Scale,
      title: "Smart Scales",
      description: "Track weight and body metrics easily.",
      features: [
        "Multiple health metrics",
        "Smart phone sync",
        "Family profiles",
        "Trend analysis"
      ],
      href: "#" // Add a placeholder link or actual link for other cards
    },
    {
      icon: Thermometer,
      title: "Thermometer",
      description: "Accurate and quick temperature readings.",
      features: [
        "Instant readings",
        "Fever alerts",
        "History tracking",
        "Multi-user support"
      ],
      href: "#" // Add a placeholder link or actual link for other cards
    },
    {
      icon: Moon,
      title: "Bed Sensor",
      description: "Sleep tracking and nighttime monitoring.",
      features: [
        "Sleep pattern analysis",
        "Movement detection",
        "Environmental monitoring",
        "Smart alarms"
      ],
      href: "#" // Add a placeholder link or actual link for other cards
    }
  ];

  // Professional Services
  const professionalServices = [
    {
      icon: Pill,
      title: "Med Dispenser",
      description: "Automated medication dispensing with 24/7 monitoring.",
      features: [
        "Automated dispensing",
        "Medication tracking",
        "Reminder system",
        "Refill alerts"
      ],
      href: "#" // Add a placeholder link or actual link for other cards
    },
    {
      icon: Activity,
      title: "Glucose Monitor",
      description: "Real-time glucose monitoring and health oversight.",
      features: [
        "Continuous monitoring",
        "Trend analysis",
        "Alert system",
        "Healthcare integration"
      ],
      href: "#" // Add a placeholder link or actual link for other cards
    },
    {
      icon: Phone,
      title: "SOS Call Centre",
      description: "24/7 emergency response with professional support.",
      features: [
        "24/7 availability",
        "Professional responders",
        "Multi-language support",
        "GPS location tracking"
      ],
      href: "#" // Add a placeholder link or actual link for other cards
    },
    {
      icon: Stethoscope,
      title: "Nurse-Sync",
      description: "Empowering nurses to deliver personalized care with advanced tools and services. Experience seamless collaboration between nurses, families, and healthcare professionals.",
      features: [
        "Personalized care plans",
        "Nurse collaboration tools",
        "Real-time notifications",
        "Health monitoring integration"
      ],
      href: "/products/Nurse-Sync" // Link to the Nurse-Sync page
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Imported Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Dashboards Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            title="Smart Health Dashboards" 
            subtitle="Monitoring Solutions"
            description="Comprehensive health monitoring solutions for individuals and families"
          />
          <div className="grid md:grid-cols-2 gap-8">
            {dashboards.map((dashboard, index) => (
              <ProductCard key={index} {...dashboard} />
            ))}
          </div>
        </div>
      </section>

      {/* AI Products Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-[#008B8B]/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            title="AI-Powered Devices" 
            subtitle="Smart Health Monitors"
            description="Cutting-edge devices for comprehensive health monitoring"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {aiProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Professional Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            title="Professional Services" 
            subtitle="Healthcare Solutions"
            description="Expert healthcare services for comprehensive care and support"
          />
          <div className="grid md:grid-cols-2 gap-8">
            {professionalServices.map((service, index) => (
              <ProductCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-[#008B8B] via-[#009999] to-[#20B2AA] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Health Journey?</h2>
          <p className="text-xl text-white/90 mb-8">Start your personalized health monitoring experience today</p>
          <button className="bg-white text-[#008B8B] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#FF7F50] hover:text-white transition-all duration-300 flex items-center gap-2 mx-auto">
            Get Started Now
            <ChevronRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default DigitalSolutionsPage;