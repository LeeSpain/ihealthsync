'use client';

import React from 'react';
import { 
  Heart, 
  ArrowRight,
  Home,
  HandHeart,
  Shield,
  Users
} from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom'; // Import Link for internal navigation

const LandingPage = () => {
  const features = [
    {
      icon: HandHeart,
      title: 'Personal Care',
      description: 'Tailored support that adapts to your lifestyle and preferences',
      highlights: ['24/7 Monitoring', 'Custom Alerts', 'Adaptive Care']
    },
    {
      icon: Users,
      title: 'Family Connection',
      description: 'Keep loved ones close and informed, maintaining meaningful bonds',
      highlights: ['Real-time Updates', 'Easy Communication', 'Photo Sharing']
    },
    {
      icon: Shield,
      title: 'Professional Support',
      description: 'Expert care ready to assist while respecting your independence',
      highlights: ['Medical Support', 'Emergency Response', 'Care Team Access']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#008B8B] via-[#009999] to-[#20B2AA] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.15)_1px,_transparent_0)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 pt-12 pb-20">
          {/* Welcome Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 mb-8">
              <Heart className="w-6 h-6 text-[#FF7F50]" />
              <span className="text-2xl font-bold text-white">
                Welcome to iHealth-Sync
              </span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              Your Personal Guardian for<br />
              <span className="text-[#FF7F50]">Independent Living</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Where caring support meets intelligent monitoring, creating a circle of connection 
              between you, your loved ones, and professional care—exactly when you need it.
            </p>
          </div>

          {/* Enhanced Feature Boxes */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm 
                         rounded-xl border border-white/20 hover:border-[#FF7F50]/30 transition-all duration-500
                         overflow-hidden"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF7F50]/0 to-[#FF7F50]/5 opacity-0 
                              group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content Container */}
                <div className="relative p-8">
                  {/* Icon Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gradient-to-br from-[#FF7F50] to-[#FF6347] p-3 rounded-lg 
                                  shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-white/80 mb-6">{feature.description}</p>

                  {/* Feature Highlights */}
                  <div className="space-y-3">
                    {feature.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF7F50]" />
                        <span className="text-white/90 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r 
                                from-transparent via-[#FF7F50]/30 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-12 flex justify-center">
            <RouterLink
              to="/home"
              className="group inline-flex items-center gap-2 bg-white text-[#008B8B] px-16 py-6 rounded-full font-medium text-lg hover:bg-[#FF7F50] hover:text-white transition-all duration-300"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </RouterLink>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-[#FF7F50]/20 to-[#FF7F50]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-[#008B8B]/20 to-[#20B2AA]/10 rounded-full blur-3xl animate-pulse delay-1000" />
    </div>
  );
};

export default LandingPage;
