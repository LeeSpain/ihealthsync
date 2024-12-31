import React from 'react';
import { HeartPulse, Brain, Shield, Activity, Phone, Star, Bot, 
         Heart, Check, Stethoscope, ChevronRight, ArrowRight, Thermometer, Users, Scale } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="flex items-start gap-4 group p-4 rounded-lg hover:bg-gradient-to-r hover:from-[#008B8B]/5 hover:to-transparent transition-all duration-300">
    <div className="bg-gradient-to-br from-[#008B8B] to-[#20B2AA] rounded-xl p-2 group-hover:scale-110 transition-all duration-300">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div>
      <h3 className="font-semibold mb-2 group-hover:text-[#008B8B] transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const FeaturesPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#008B8B] relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#008B8B]/20" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 backdrop-blur-sm mb-8">
                <Star className="w-4 h-4 text-[#FF7F50]" />
                <span className="text-sm font-medium">Advanced Features</span>
              </div>
              
              <h1 className="text-5xl font-bold text-white mb-6">
                Complete Health
                <span className="block mt-2 text-[#FF7F50]">Monitoring Platform</span>
              </h1>
              
              <p className="text-xl text-white/90 max-w-xl mb-8">
                Experience comprehensive health tracking with real-time monitoring 
                and advanced analytics for complete peace of mind.
              </p>

              <div className="flex gap-4">
                <button className="bg-[#FF7F50] hover:bg-[#FF6347] text-white px-6 py-3 rounded-xl flex items-center gap-2">
                  Explore Features
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl flex items-center gap-2">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-2xl p-8">
              <div className="aspect-video bg-white/5 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Advanced Features</h2>
            <p className="text-xl text-gray-600">Discover what makes our platform unique</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all">
              <HeartPulse className="w-12 h-12 text-[#008B8B]" />
              <h3 className="text-xl font-bold mb-4">Members Dashboard</h3>
              <p className="text-gray-600 mb-6">The heart of our service, centralizing all metrics related to your health and real-time updates.</p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#008B8B]" />
                  <span className="text-gray-600">Real-time health metrics</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#008B8B]" />
                  <span className="text-gray-600">Instant access to alerts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#008B8B]" />
                  <span className="text-gray-600">Comprehensive health tracking</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all">
              <Bot className="w-12 h-12 text-[#008B8B]" />
              <h3 className="text-xl font-bold mb-4">Add-on AI Assisted Products</h3>
              <p className="text-gray-600 mb-6">Enhance your experience with AI-powered products that provide personalized insights and support.</p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#008B8B]" />
                  <span className="text-gray-600">AI health tips and predictions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#008B8B]" />
                  <span className="text-gray-600">Smart recommendations based on data</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#008B8B]" />
                  <span className="text-gray-600">Continuous AI learning for improved support</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all">
              <Shield className="w-12 h-12 text-[#008B8B]" />
              <h3 className="text-xl font-bold mb-4">Emergency SOS</h3>
              <p className="text-gray-600 mb-6">Immediate emergency response with professional monitoring, 24/7 support, and real-time alerts.</p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#008B8B]" />
                  <span className="text-gray-600">Real-time emergency alerts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#008B8B]" />
                  <span className="text-gray-600">24/7 professional monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#008B8B]" />
                  <span className="text-gray-600">Immediate call center support</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all">
              <Heart className="w-12 h-12 text-[#008B8B]" />
              <h3 className="text-xl font-bold mb-4">Glucose Monitoring</h3>
              <p className="text-gray-600 mb-6">Track your glucose levels in real-time with automated alerts for better health management.</p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#008B8B]" />
                  <span className="text-gray-600">Real-time glucose tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#008B8B]" />
                  <span className="text-gray-600">Automated alerts for abnormal levels</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#008B8B]" />
                  <span className="text-gray-600">Integrated with your dashboard</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all">
              <Scale className="w-12 h-12 text-[#008B8B]" />
              <h3 className="text-xl font-bold mb-4">Medication Dispensers</h3>
              <p className="text-gray-600 mb-6">Automated medication dispensing for precise, on-time doses, with easy remote monitoring.</p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#008B8B]" />
                  <span className="text-gray-600">Automated medication reminders</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#008B8B]" />
                  <span className="text-gray-600">Remote monitoring for caregivers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#008B8B]" />
                  <span className="text-gray-600">Customizable medication schedules</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all">
              <Stethoscope className="w-12 h-12 text-[#008B8B]" />
              <h3 className="text-xl font-bold mb-4">AI-Powered Assistance</h3>
              <p className="text-gray-600 mb-6">Use AI-powered tools to gain insights, assistance, and improve your health monitoring.</p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#008B8B]" />
                  <span className="text-gray-600">Real-time health insights</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#008B8B]" />
                  <span className="text-gray-600">Smart health recommendations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#008B8B]" />
                  <span className="text-gray-600">Automated transcription of calls</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#008B8B] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience Advanced Health Monitoring?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of users who have already taken control of their health journey.
          </p>
          <div className="flex justify-center gap-6">
            <button className="bg-[#FF7F50] hover:bg-[#FF6347] text-white px-8 py-4 rounded-xl flex items-center gap-2">
              Get Started Now
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl flex items-center gap-2">
              Learn More
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
