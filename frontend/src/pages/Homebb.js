import React, { useState, useEffect, useCallback } from 'react';
import { 
  Heart, Activity, Brain, Thermometer, Lock, ChevronRight, Star, Bell, Shield,
  Download, Users, Bot, ShieldCheck, Phone, Clock, ThermometerIcon, CheckCircle2, 
  ArrowRight, HeartPulse, Plus, AlertCircle
} from 'lucide-react';

// Utility function for random number generation within range
const getRandomInRange = (min, max) => Math.random() * (max - min) + min;

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

// Premium Feature Badge Component
const PremiumBadge = ({ type }) => (
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 backdrop-blur-sm">
    {type === 'pro' ? (
      <Shield className="w-4 h-4 text-[#FF7F50]" />
    ) : (
      <Star className="w-4 h-4 text-[#FF7F50]" />
    )}
    <span className="text-sm font-medium">
      {type === 'pro' ? 'Professional Monitoring' : 'Premium Feature'}
    </span>
  </div>
);

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
        const change = getRandomInRange(-1, 1);
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

// Home Component
const Home = () => {
  const alertThresholds = {
    heartRate: { min: 60, max: 100 },
    bloodPressure: { min: 90, max: 140 },
    temperature: { min: 36, max: 37.5 },
    oxygen: { min: 95, max: 100 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Live Dashboard */}
      <section className="bg-gradient-to-br from-[#008B8B] via-[#009999] to-[#20B2AA] relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.15)_1px,_transparent_0)] bg-[size:20px_20px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <PremiumBadge type="pro" />

              <h1 className="text-5xl font-bold text-white mb-6 mt-8">
                Professional Health
                <span className="block mt-2 text-[#FF7F50]">Monitoring</span>
              </h1>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Advanced AI-powered health monitoring with real-time insights and professional analysis.
                Get 24/7 emergency response and personalized care.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
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
      {/* Professional Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <PremiumBadge type="pro" />
            <h2 className="text-4xl font-bold mt-6 mb-4">Professional Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              24/7 professional monitoring and emergency response
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {professionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border-2 border-[#008B8B] hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-[#008B8B] to-[#20B2AA] rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#008B8B] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-6 border-t border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-gray-600">Monthly Fee</div>
                    <div className="text-2xl font-bold">€{service.price}</div>
                  </div>
                  <button className="w-full bg-[#008B8B] hover:bg-[#20B2AA] text-white py-3 rounded-xl transition-all flex items-center justify-center gap-2">
                    Learn More <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Advanced Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              AI-powered health monitoring with professional support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="group bg-gradient-to-b from-white to-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-[#008B8B]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                  <feature.icon className="w-8 h-8 text-[#008B8B]" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <div className="space-y-4">
                  {feature.subFeatures.map((subFeature, subIdx) => (
                    <div key={subIdx} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#008B8B]/5 flex items-center justify-center">
                        <subFeature.icon className="w-4 h-4 text-[#008B8B]" />
                      </div>
                      <span className="text-gray-600">{subFeature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that best fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, idx) => (
              <div key={idx} 
                className={`bg-white rounded-2xl p-8 ${
                  plan.popular ? 'border-2 border-[#008B8B] ring-1 ring-[#008B8B]/50' : 'border border-gray-200'
                }`}>
                {plan.popular && (
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#008B8B]/10 text-[#008B8B] text-sm font-medium mb-4">
                    <Star className="w-4 h-4" /> Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">€{plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#008B8B] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className={`w-full py-3 rounded-xl transition-all flex items-center justify-center gap-2 ${
                  plan.popular 
                    ? 'bg-[#008B8B] hover:bg-[#20B2AA] text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}>
                  Get Started <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(0,139,139,0.1)_1px,_transparent_0)] bg-[size:20px_20px]" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied users who trust iHealth-Sync
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all">
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#FF7F50]" fill="#FF7F50" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#008B8B] to-[#20B2AA] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join iHealth-Sync today and experience the future of personal health monitoring
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-[#FF7F50] hover:bg-[#FF6347] text-white px-8 py-4 rounded-xl flex items-center gap-2 transition-all">
              Get Started Now <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl flex items-center gap-2 transition-all">
              Schedule Demo <Download className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">iHealth-Sync</h3>
              <p className="text-gray-400">
                Advanced health monitoring for peace of mind.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} iHealth-Sync. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Data objects for features, services, and pricing
const features = [
  {
    icon: Heart,
    title: 'Health Monitoring',
    description: 'Real-time tracking of vital signs with AI insights',
    subFeatures: [
      { icon: Heart, text: 'Heart Rate & ECG' },
      { icon: Brain, text: 'Sleep Analysis' },
      { icon: Activity, text: 'Activity Tracking' }
    ]
  },
  {
    icon: Shield,
    title: 'Emergency Response',
    description: '24/7 professional monitoring and rapid response',
    subFeatures: [
      { icon: Phone, text: 'SOS Alerts' },
      { icon: Activity, text: 'Fall Detection' },
      { icon: Clock, text: 'Rapid Response' }
    ]
  },
  {
    icon: Brain,
    title: 'AI Analytics',
    description: 'Advanced health predictions and insights',
    subFeatures: [
      { icon: Activity, text: 'Trend Analysis' },
      { icon: Heart, text: 'Risk Assessment' },
      { icon: Clock, text: 'Early Warnings' }
    ]
  }
];

const professionalServices = [
  {
    icon: Shield,
    title: '24/7 Monitoring',
    description: 'Professional health monitoring service',
    price: '29.99',
    features: [
      'Real-time vital monitoring',
      'Emergency response team',
      'Health data analysis',
      'Monthly health reports'
    ]
  },
  {
    icon: Heart,
    title: 'Medical Support',
    description: 'Direct access to medical professionals',
    price: '49.99',
    features: [
      'Video consultations',
      'Medication management',
      'Care coordination',
      'Health coaching'
    ]
  },
  {
    icon: Activity,
    title: 'Emergency Care',
    description: 'Rapid emergency response service',
    price: '39.99',
    features: [
      'SOS response',
      'Ambulance dispatch',
      'Family notifications',
      'Emergency contacts'
    ]
  }
];

const pricingPlans = [
  {
    name: 'Basic',
    description: 'Essential health monitoring',
    price: '4.99',
    features: [
      'Basic health monitoring',
      'Single emergency contact',
      'Standard SOS alerts',
      'Basic health reports'
    ]
  },
  {
    name: 'Premium',
    description: 'Advanced monitoring with AI insights',
    price: '14.99',
    popular: true,
    features: [
      'All Basic features',
      'AI-powered health analysis',
      'Multiple emergency contacts',
      'Professional monitoring',
      'Advanced analytics dashboard'
    ]
  },
  {
    name: 'Professional',
    description: 'Complete healthcare solution',
    price: '29.99',
    features: [
      'All Premium features',
      '24/7 medical support',
      'Priority emergency response',
      'Video consultations',
      'Personalized care plan'
    ]
  }
];

const testimonials = [
  {
    quote: "iHealth-Sync has revolutionized how I manage my mother's health. The peace of mind is invaluable.",
    author: "Sarah M.",
    role: "Family Caregiver"
  },
  {
    quote: "The real-time monitoring and instant alerts have helped us provide better, more timely care.",
    author: "Dr. James Wilson",
    role: "Healthcare Provider"
  },
  {
    quote: "As someone living alone, knowing I have 24/7 professional support gives me confidence and independence.",
    author: "Robert Chen",
    role: "Active Senior"
  }
];

export default Home;