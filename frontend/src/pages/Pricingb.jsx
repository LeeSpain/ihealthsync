'use client';

import React, { useState } from 'react';
import {
  Users, Shield, Heart, Bell, Check,
  ChevronRight, Activity, LineChart,
  ShieldCheck, Scale, Thermometer, Moon,
  Star, ArrowRight, ShoppingCart, X, Plus, Minus, Crown,
  Phone, Pill, Stethoscope
} from 'lucide-react';
import Header from '../components/Header'; // Import the Header component

// Hero Section
const Hero = () => (
  <section className="relative bg-gradient-to-br from-[#008B8B] via-[#009999] to-[#20B2AA] py-24 text-center text-white overflow-hidden">
    {/* Animated Background Pattern */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.15)_1px,_transparent_0)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-transparent" />
    </div>

    {/* Content */}
    <div className="relative z-10 max-w-4xl mx-auto px-6">
      <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
        <Star size={16} className="text-[#FF7F50]" />
        <span className="text-sm font-medium">Choose Your Perfect Plan</span>
      </div>

      <h1 className="text-5xl font-extrabold mb-6 leading-tight">
        Health Monitoring Solutions<br />
        <span className="text-[#FF7F50]">For Every Need</span>
      </h1>

      <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
        From essential monitoring to premium care, discover the perfect package for your health journey. Start free or unlock advanced features.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="group flex items-center gap-2 bg-white text-[#008B8B] px-6 py-3 rounded-full font-medium hover:bg-[#FF7F50] hover:text-white transition-all duration-300">
          View Pricing
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-all duration-300">
          Compare Plans
        </button>
      </div>

      {/* Trust Indicators */}
      <div className="flex flex-wrap justify-center gap-8 mt-12">
        <div className="flex items-center gap-2">
          <ShieldCheck size={20} className="text-[#FF7F50]" />
          <span className="text-sm">Risk-Free Trial</span>
        </div>
        <div className="flex items-center gap-2">
          <Users size={20} className="text-[#FF7F50]" />
          <span className="text-sm">Cancel Anytime</span>
        </div>
        <div className="flex items-center gap-2">
          <Heart size={20} className="text-[#FF7F50]" />
          <span className="text-sm">24/7 Support</span>
        </div>
      </div>
    </div>
  </section>
);

// Subscription Plans Component
const SubscriptionPlans = () => {
  const plans = [
    {
      title: "Free App",
      price: "0",
      description: "Basic health monitoring for individuals",
      features: [
        "Basic health dashboard",
        "Single emergency contact",
        "Limited health metrics",
        "Standard alerts",
        "Mobile app access",
        "Basic support"
      ]
    },
    {
      title: "Subscribers App",
      price: "9.99",
      description: "Complete health monitoring solution",
      features: [
        "Advanced AI dashboard",
        "Multiple emergency contacts",
        "Comprehensive health tracking",
        "Priority alerts",
        "Multi-device access",
        "24/7 premium support"
      ],
      recommended: true
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`bg-white rounded-xl overflow-hidden border transition-all duration-300 
            ${plan.recommended 
              ? 'border-[#008B8B] shadow-lg scale-102 hover:shadow-xl' 
              : 'border-gray-200 hover:border-[#008B8B]/30 hover:shadow-lg'}`}
        >
          <div className="p-6">
            {/* Plan Title */}
            <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.title}</h3>
            {/* Plan Description */}
            <p className="text-sm text-gray-600 mb-3">{plan.description}</p>
            
            {/* Plan Price */}
            <div className="mb-4">
              <span className="text-3xl font-bold text-[#008B8B]">€{plan.price}</span>
              <span className="text-gray-500">/month</span>
            </div>
  
            {/* Plan Features */}
            <div className="space-y-2 mb-6">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className="bg-gradient-to-r from-[#FF7F50] to-[#FF6347] rounded-full p-1 shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
  
            {/* Action Button */}
            <button
              className={`w-full py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2
                ${plan.recommended 
                  ? 'bg-gradient-to-r from-[#008B8B] to-[#20B2AA] text-white hover:opacity-90' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {plan.price === "0" ? "Download Now" : "Subscribe"}
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

// AI Product Card Component
const ProductCard = ({ icon: Icon, title, oneTimePrice, monthlyFee, features, onAddToCart }) => (
  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
    <div className="p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-gradient-to-br from-[#008B8B] to-[#20B2AA] p-3 rounded-lg text-white">
          <Icon size={24} />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-[#008B8B] font-semibold">€{oneTimePrice}</span>
            <span className="text-sm text-gray-500">+ €{monthlyFee}/month</span>
          </div>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <Check className="w-4 h-4 text-[#008B8B] mt-0.5" />
            <span className="text-sm text-gray-600">{feature}</span>
          </div>
        ))}
      </div>

      <button onClick={onAddToCart} className="w-full py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors font-medium flex items-center justify-center gap-2">
        Add to Cart
        <ChevronRight size={16} />
      </button>
    </div>
  </div>
);

// Professional Service Card Component
const ServiceCard = ({ icon: Icon, title, oneTimePrice, monthlyFee, features, isNurseSync, onAddToCart }) => (
  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
    <div className="p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-gradient-to-br from-[#008B8B] to-[#20B2AA] p-3 rounded-lg text-white">
          <Icon size={24} />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          {!isNurseSync && (
            <div className="flex items-baseline gap-2">
              <span className="text-[#008B8B] font-semibold">€{oneTimePrice}</span>
              <span className="text-sm text-gray-500">+ €{monthlyFee}/month</span>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-2 mb-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <Check className="w-4 h-4 text-[#008B8B] mt-0.5" />
            <span className="text-sm text-gray-600">{feature}</span>
          </div>
        ))}
      </div>

      {isNurseSync ? (
        <a href="/nurse-sync-packages" className="w-full py-2 rounded-lg bg-gradient-to-r from-[#008B8B] to-[#20B2AA] text-white hover:opacity-90 transition-colors font-medium flex items-center justify-center gap-2">
          View Nurse-Sync Packages
          <ChevronRight size={16} />
        </a>
      ) : (
        <button onClick={onAddToCart} className="w-full py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors font-medium flex items-center justify-center gap-2">
          Add to Cart
          <ChevronRight size={16} />
        </button>
      )}
    </div>
  </div>
);

// Compact Dashboard Add-ons Section
const DashboardAddons = ({ onAddToCart }) => {
  const addons = [
    {
      title: "iHealth Dashboard Tablet",
      price: "99.99",
      isOneTime: true,
      features: [
        "24/7 dedicated display",
        "Wall/desk mountable",
        "Continuous metrics view",
        "Auto-updating dashboard"
      ]
    },
    {
      title: "Family Dashboard Access",
      price: "4.99",
      isOneTime: false,
      features: [
        "Add family members",
        "Shared health tracking", 
        "Family notifications",
        "Care coordination"
      ]
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mt-8">
      {addons.map((addon, index) => (
        <div key={index} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all">
          <h3 className="text-lg font-bold text-gray-800 mb-2">{addon.title}</h3>
          <div className="flex items-baseline gap-1 mb-3">
            <span className="text-xl font-bold text-[#008B8B]">€{addon.price}</span>
            <span className="text-sm text-gray-500">{addon.isOneTime ? 'one-time' : '/month'}</span>
          </div>
          <div className="space-y-1 mb-4">
            {addon.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#FF7F50]" />
                <span className="text-sm text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
          <button
            onClick={() => onAddToCart({
              title: addon.title,
              oneTimePrice: addon.isOneTime ? addon.price : "0",
              monthlyFee: addon.isOneTime ? "0" : addon.price,
              features: addon.features,
            })}
            className="w-full py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm font-medium"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

// Floating Cart Component (Always Open and Fixed)
const FloatingCart = ({ cartItems, onRemove }) => {
  const oneTimeTotal = cartItems.reduce((total, item) => total + parseFloat(item.oneTimePrice), 0);
  const monthlyTotal = cartItems.reduce((total, item) => total + parseFloat(item.monthlyFee), 0);

  // Function to handle the "Buy Now" button click
  const handleBuyNow = () => {
    // Redirect to the registration page
    window.location.href = "/register"; // Update this URL as needed
  };

  return (
    <div className="fixed top-20 right-4 z-50"> {/* Changed top-4 to top-20 */}
      <div className="bg-white rounded-lg shadow-lg w-80 p-4">
        {/* Updated "Cart Summary" text color to orange */}
        <h3 className="text-lg font-bold text-[#FF7F50] mb-4">Cart Summary</h3>
        <div className="space-y-2">
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-sm text-gray-700">{item.title}</span>
              {index !== 0 && ( // Prevent removing the subscription
                <button
                  onClick={() => onRemove(index)}
                  className="text-sm text-red-500 hover:underline"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="mt-4 border-t pt-4 text-sm">
          <div className="flex justify-between">
            <span>One-Time Total:</span>
            <span className="font-bold text-gray-800">€{oneTimeTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Monthly Total:</span>
            <span className="font-bold text-gray-800">€{monthlyTotal.toFixed(2)}</span>
          </div>
        </div>

        {/* Buy Now Button */}
        <button
          onClick={handleBuyNow}
          className="w-full mt-4 py-2.5 rounded-lg bg-gradient-to-r from-[#008B8B] to-[#20B2AA] text-white font-medium hover:opacity-90 transition-all duration-300"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

// Main ShopSection Component with Floating Cart Integration
const ShopSection = () => {
  const [cartItems, setCartItems] = useState([
    {
      title: "Subscribers App",
      oneTimePrice: "0",
      monthlyFee: "9.99",
      features: [],
    },
  ]);

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const handleRemoveFromCart = (index) => {
    if (index !== 0) { // Prevent removing the subscription
      setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
    }
  };

  const aiProducts = [
    {
      icon: ShieldCheck,
      title: "Guardian Button",
      oneTimePrice: "49.99",
      monthlyFee: "4.99",
      features: ["One-touch emergency alert", "Water-resistant design", "GPS tracking", "Long battery life"],
    },
    {
      icon: Heart,
      title: "Heart Rate Monitor",
      oneTimePrice: "79.99",
      monthlyFee: "4.99",
      features: ["24/7 heart rate monitoring", "ECG capabilities", "Irregular rhythm detection", "Mobile app integration"],
    },
    {
      icon: Scale,
      title: "Smart Scales",
      oneTimePrice: "89.99",
      monthlyFee: "4.99",
      features: ["Multiple health metrics", "Smart phone sync", "Family profiles", "Trend analysis"],
    },
    {
      icon: Thermometer,
      title: "Thermometer",
      oneTimePrice: "39.99",
      monthlyFee: "4.99",
      features: ["Instant readings", "Fever alerts", "History tracking", "Multi-user support"],
    },
    {
      icon: Moon,
      title: "Bed Sensor",
      oneTimePrice: "129.99",
      monthlyFee: "4.99",
      features: ["Sleep pattern analysis", "Movement detection", "Environmental monitoring", "Smart alarms"],
    }
  ];

  const professionalServices = [
    {
      icon: Phone,
      title: "SOS Call Centre",
      oneTimePrice: "89.99",
      monthlyFee: "24.99",
      features: [
        "24/7 emergency response",
        "Professional call handlers",
        "Multi-language support",
        "GPS location tracking"
      ]
    },
    {
      icon: Pill,
      title: "Medication Dispenser",
      oneTimePrice: "199.99",
      monthlyFee: "24.99",
      features: [
        "Automated dispensing",
        "Medication tracking",
        "Smart reminders",
        "Refill monitoring"
      ]
    },
    {
      icon: Activity,
      title: "Glucose Monitor",
      oneTimePrice: "199.99",
      monthlyFee: "24.99",
      features: [
        "Continuous monitoring",
        "Real-time alerts",
        "Trend analysis",
        "Healthcare integration"
      ]
    },
    {
      icon: Stethoscope,
      title: "Nurse-Sync Services",
      isNurseSync: true,
      features: [
        "Personalized care packages",
        "Professional nurse support",
        "Flexible scheduling",
        "Comprehensive care plans"
      ]
    }
  ];

  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Subscription Plans Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Choose Your Plan</h2>
            <p className="text-gray-600">Start with our powerful health monitoring dashboard</p>
          </div>

          <SubscriptionPlans />

          {/* Dashboard Add-ons Section */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Dashboard Add-ons</h3>
            <p className="text-gray-600 mb-6">Enhance your dashboard experience with these add-ons</p>
            <DashboardAddons onAddToCart={handleAddToCart} />
          </div>
        </div>
      </section>

      {/* AI Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-[#008B8B]/10 text-[#008B8B] px-4 py-2 rounded-full mb-3">
              <Activity size={16} />
              <span className="text-sm font-medium">AI-Powered Devices</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Enhance Your Experience</h2>
            <p className="text-gray-600">Add smart devices to your monitoring system</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiProducts.map((product, index) => (
              <ProductCard
                key={index}
                {...product}
                onAddToCart={() => handleAddToCart(product)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Professional Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-[#008B8B]/10 text-[#008B8B] px-4 py-2 rounded-full mb-3">
              <Stethoscope size={16} />
              <span className="text-sm font-medium">Professional Care</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Professional Services</h2>
            <p className="text-gray-600">Expert healthcare services and monitoring solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {professionalServices.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                onAddToCart={() => handleAddToCart(service)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Floating Cart (Always Open and Fixed) */}
      <FloatingCart cartItems={cartItems} onRemove={handleRemoveFromCart} />
    </>
  );
};

export default ShopSection;