import React from 'react';
import { ChevronRight, Download, Activity, Shield, Star, Heart, HeartPulse, Brain, 
         Phone, Clock, ThermometerIcon, CheckCircle2, ArrowRight } from 'lucide-react';

const Home = () => {
  const steps = [
    {
      icon: Download,
      title: 'Start with Free App',
      description: 'Download and set up your account with basic health monitoring',
      features: ['Basic health tracking', 'Single emergency contact', 'Standard SOS alerts']
    },
    {
      icon: Star,
      title: 'Upgrade to Premium',
      description: 'Access AI-powered monitoring and advanced analytics',
      features: ['AI health monitoring', 'Up to 5 emergency contacts', 'Advanced analytics']
    },
    {
      icon: Shield,
      title: 'Add Basic Monitoring',
      description: 'Connect essential devices for safety and tracking',
      features: ['Guardian Button', 'Heart Rate Monitor', 'Family Dashboard']
    },
    {
      icon: Activity,
      title: 'Track Progress',
      description: 'Monitor health metrics and receive insights',
      features: ['Smart Scales', 'Bed Sensor', 'Expert Analysis']
    }
  ];

  const features = [
    {
      icon: HeartPulse,
      title: 'Health Monitoring',
      description: 'Real-time tracking of vital signs',
      subFeatures: [
        { icon: Heart, text: 'Heart Rate & ECG' },
        { icon: Brain, text: 'Sleep Analysis' },
        { icon: ThermometerIcon, text: 'Temperature' }
      ]
    },
    {
      icon: Shield,
      title: 'Emergency Response',
      description: '24/7 professional monitoring',
      subFeatures: [
        { icon: Phone, text: 'SOS Alerts' },
        { icon: Activity, text: 'Fall Detection' },
        { icon: Clock, text: 'Rapid Response' }
      ]
    },
    {
      icon: Brain,
      title: 'AI Analytics',
      description: 'Smart health predictions',
      subFeatures: [
        { icon: Activity, text: 'Trend Analysis' },
        { icon: Heart, text: 'Risk Assessment' },
        { icon: Clock, text: 'Early Warnings' }
      ]
    },
    {
      icon: Phone,
      title: 'Care Connect',
      description: 'Stay connected with care team',
      subFeatures: [
        { icon: Heart, text: 'Video Calls' },
        { icon: Shield, text: 'Secure Chat' },
        { icon: Clock, text: '24/7 Support' }
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#008B8B] h-[560px] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#008B8B]/20" />
        <div className="container mx-auto max-w-5xl px-4 relative z-10 flex items-center h-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 backdrop-blur-sm mb-8">
                <span className="text-sm font-medium">Trusted by 50,000+ Users</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                Your Personal 
                <span className="block mt-2 text-[#FF7F50]">Health Guardian</span>
              </h1>
              <p className="text-xl text-white/90 max-w-xl mb-8 leading-relaxed">
                Advanced health monitoring and emergency response system that keeps you and your loved ones safe, 24/7.
              </p>
              <div className="flex gap-4">
                <button className="bg-[#FF7F50] hover:bg-[#FF6347] text-white px-6 py-3 rounded-xl transition-all flex items-center gap-2">
                  Get Started <ChevronRight className="w-5 h-5" />
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-all flex items-center gap-2">
                  Watch Demo <Download className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="h-full flex items-center">
              <div className="bg-white/10 p-8 rounded-2xl w-full h-80"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow these steps to build your personalized health monitoring system
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} 
                   className="bg-white rounded-2xl p-8 border border-gray-200 relative hover:shadow-lg transition-all">
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#008B8B]/10 flex items-center justify-center">
                  <span className="text-[#008B8B] font-bold">0{index + 1}</span>
                </div>
                <div className="w-14 h-14 bg-[#008B8B]/10 rounded-2xl flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-[#008B8B]" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-6">{step.description}</p>
                <ul className="space-y-3">
                  {step.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF7F50] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Advanced Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive health monitoring powered by advanced technology
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} 
                   className="p-8 rounded-2xl hover:shadow-xl transition-all border border-gray-100
                            bg-gradient-to-b from-white to-gray-50">
                <div className="w-16 h-16 bg-[#008B8B]/10 rounded-2xl flex items-center justify-center mb-6">
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

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied users who trust iHealth-Sync
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all">
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
      <section className="bg-[#008B8B] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join iHealth-Sync today and experience the future of personal health monitoring
          </p>
          <div className="flex justify-center gap-6">
            <button className="bg-[#FF7F50] hover:bg-[#FF6347] text-white px-8 py-4 rounded-xl flex items-center gap-2 transition-all">
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl flex items-center gap-2 transition-all">
              Schedule Demo
              <Download className="w-5 h-5" />
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

export default Home;