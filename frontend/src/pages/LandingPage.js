'use client';

import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use react-router-dom for navigation
import { 
  Heart, 
  ArrowRight,
  Home,
  Shield,
  Users,
  Smile,
  Activity,
  Bell
} from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate(); // Use useNavigate from react-router-dom

  const welcomeContent = [
    {
      icon: Smile,
      title: 'Your Journey',
      description: 'Live life your way, with the confidence that support is always there when you need it.',
      highlights: ['Maintain independence', 'Stay comfortable', 'Live confidently']
    },
    {
      icon: Users,
      title: 'Family Peace of Mind',
      description: 'Keep your loved ones close, no matter the distance. Stay connected in meaningful ways.',
      highlights: ['Share moments', 'Easy updates', 'Close always']
    },
    {
      icon: Bell,
      title: 'Always Connected',
      description: 'A caring community of support that grows with you, understanding your unique needs.',
      highlights: ['Daily support', 'Friendly help', 'Personal care']
    }
  ];

  const handleBeginJourney = () => {
    navigate('/Home'); // Navigate to the Home page
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#008B8B] via-[#009999] to-[#20B2AA] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.15)_1px,_transparent_0)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-6 pt-12 pb-16">
          {/* Welcome Header */}
          <div className="text-center relative mb-16">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 mb-6">
              <Heart className="w-6 h-6 text-[#FF7F50]" />
              <span className="text-2xl font-bold text-white">Welcome to iHealth-Sync</span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
              Your Personal Guardian for<br />
              <span className="text-[#FF7F50]">Independent Living</span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-white/90 leading-relaxed">
                At iHealth-Sync, we're bringing AI-powered healthcare monitoring into every home around the world. 
                By combining caring support with intelligent technology, we help you maintain your independence 
                while staying connected to loved ones—no matter where you are. Our personalized monitoring approach 
                uses advanced AI to ensure you have the perfect balance of freedom and support, bringing 
                professional healthcare monitoring and peace of mind to you and your family globally.
              </p>
            </div>
          </div>

          {/* Welcome Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {welcomeContent.map((content, index) => (
              <div 
                key={index}
                className="relative overflow-hidden"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 h-full 
                              hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-br from-[#FF7F50] to-[#FF6347] p-2.5 rounded-lg">
                      <content.icon className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-white">{content.title}</h2>
                  </div>
                  <p className="text-white/90 mb-4 text-sm leading-relaxed">{content.description}</p>
                  <div className="space-y-2">
                    {content.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-1 h-1 rounded-full bg-[#FF7F50]" />
                        <span className="text-white/90">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-[#FF7F50]/10 via-[#FF7F50]/20 to-[#FF7F50]/10 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Begin Your Journey With Us</h2>
            <p className="text-lg text-white/90 mb-6 max-w-xl mx-auto">
              Take the first step towards a more connected and supported lifestyle
            </p>
            <button 
              onClick={handleBeginJourney}
              className="group inline-flex items-center gap-2 bg-white text-[#008B8B] px-6 py-3 rounded-full font-medium hover:bg-[#FF7F50] hover:text-white transition-all duration-300"
            >
              Begin Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;