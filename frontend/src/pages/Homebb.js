import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Added motion for animations
import {
  Bell,
  ChevronRight,
  Plus,
  ArrowRight,
  Circle,
  UserPlus,
  Settings,
  Heart,
  Shield,
  Clock,
  CheckCircle,
  PhoneCall,
  Globe,
  Smartphone,
  Droplet,
  Thermometer,
  Moon,
  Timer,
  Zap,
  AlertCircle,
  Activity,
  Layout, // Added Layout icon
  Sparkles, // Added Sparkles icon
} from 'lucide-react';
import Header from '../components/Header'; // Ensure this path is correct

const HomePage = () => {
  // State Management
  const [stats, setStats] = useState({
    heartRate: { value: 72, trend: '+1', status: 'normal' },
    bloodPressure: { value: 120, status: 'normal' },
    steps: { value: 8540, trend: '+258', status: 'above' },
    oxygen: { value: 98, status: 'normal' },
    sleep: { value: 7.5, status: 'normal' },
    temp: { value: 98.6, status: 'normal' },
    calories: { value: 1850, status: 'normal' },
    stress: { value: 42, status: 'normal' },
  });

  // Steps Configuration
  const steps = [
    {
      id: 1,
      title: 'Create Your Profile',
      icon: UserPlus,
      description: 'Start your health journey with a personalized profile',
      substeps: [
        'Complete health assessment',
        'Set personal health goals',
        'Connect your devices',
      ],
      stats: '2 min setup',
      color: 'bg-gradient-to-r from-[#008B8B] to-[#20B2AA]',
    },
    {
      id: 2,
      title: 'Personalize Your Experience',
      icon: Settings,
      description: 'Customize your monitoring dashboard',
      substeps: [
        'Choose vital signs to track',
        'Set alert preferences',
        'Add emergency contacts',
      ],
      stats: '5 min setup',
      color: 'bg-gradient-to-r from-[#008B8B] to-[#20B2AA]',
    },
    {
      id: 3,
      title: 'Start Monitoring',
      icon: Heart,
      description: 'Begin your 24/7 health monitoring journey',
      substeps: [
        'View real-time health data',
        'Receive AI-powered insights',
        'Share with healthcare providers',
      ],
      stats: 'Instant activation',
      color: 'bg-gradient-to-r from-[#008B8B] to-[#20B2AA]',
    },
  ];

  // Reusable Components
  const StatusIndicator = ({ status, value }) => {
    const getStatusStyles = (status) => {
      const styles = {
        normal: 'bg-green-100 border-green-200 text-green-700',
        above: 'bg-blue-100 border-blue-200 text-blue-700',
        below: 'bg-amber-100 border-amber-200 text-amber-700',
        alert: 'bg-red-100 border-red-200 text-red-700',
      };
      return styles[status] || styles.normal;
    };

    return (
      <div className={`px-2 py-1 rounded-full border ${getStatusStyles(status)}`}>
        <span className="text-xs font-medium">{value}</span>
      </div>
    );
  };

  const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="bg-gradient-to-br from-[#20B2AA]/10 to-[#008B8B]/20 p-6 rounded-xl border border-[#20B2AA]/20 hover:shadow-lg transition-all">
      <div className="flex items-start gap-4">
        <div className="bg-gradient-to-r from-[#008B8B] to-[#20B2AA] p-3 rounded-lg text-white">
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );

  const StepCard = ({ step }) => (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-[#20B2AA]/10 to-[#008B8B]/20 border border-[#20B2AA]/20">
      <div className="flex items-start space-x-4">
        <div className={`${step.color} p-4 rounded-xl text-white`}>
          <step.icon size={24} />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <span className="text-gray-400">
              <Clock size={16} className="inline mr-1" />
              {step.stats}
            </span>
          </div>
          <p className="mt-2 text-gray-600">{step.description}</p>
          <div className="mt-4 space-y-3">
            {step.substeps.map((substep, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-gray-700">
                <CheckCircle size={16} className="text-green-500" />
                <span>{substep}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const DashboardSection = () => (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Why the iHealth-Sync Dashboard Matters</h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Your personalized health dashboard is the heart of your monitoring experience.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Explanation */}
          <div>
            <h3 className="text-2xl font-semibold text-[#008B8B] mb-4">Centralized Health Monitoring</h3>
            <p className="text-gray-600 mb-4">
              The iHealth-Sync Dashboard gives you a single, real-time view of all your vital health data. From heart rate and blood pressure to sleep patterns and activity levels, everything is tracked in one intuitive interface. It's designed to simplify your health journey and give you control over your well-being at a glance.
            </p>
            <p className="text-gray-600 mb-8">
              With personalized recommendations, historical trend analysis, and seamless integration of AI-powered insights, you can stay ahead of your health and wellness goals.
            </p>
            <h4 className="text-xl font-semibold text-[#008B8B] mb-4">Why is it important?</h4>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Monitor your health in real time</li>
              <li>Track patterns and trends over time</li>
              <li>Get tailored insights and health recommendations</li>
              <li>Stay connected with your healthcare providers and family</li>
            </ul>
          </div>

          {/* Right Column - Example Image */}
          <div className="relative bg-gradient-to-br from-[#008B8B]/10 to-[#20B2AA]/20 p-8 rounded-2xl border border-[#20B2AA]/20 h-[400px]">
            <div className="w-full h-full rounded-lg overflow-hidden">
              <img
                src="/iHealth-home7.jpg"
                alt="iHealth-Sync Dashboard"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-[#FF7F50] text-white py-3 px-6 rounded-full hover:bg-[#FF6347] transition duration-300">
            Explore Your Dashboard
          </button>
        </div>
      </div>
    </section>
  );

  const HowItWorksEnhanced = () => {
    const steps = [
      {
        id: 1,
        title: 'Setup Your Safety Net',
        icon: Shield,
        description: 'Your foundation for peace of mind',
        substeps: [
          'Create your health profile',
          'Setup emergency contacts',
          'Configure SOS preferences',
          'Basic health metrics setup',
        ],
        stats: '5 min setup',
        benefits: [
          'Instant emergency access',
          'Quick SOS activation',
          'Basic health tracking',
        ],
        color: 'from-emerald-600 to-emerald-500',
        shadowColor: 'shadow-emerald-500/20',
        accentColor: 'bg-emerald-500',
      },
      {
        id: 2,
        title: 'Build Your Dashboard',
        icon: Layout,
        description: 'Your personalized health command center',
        substeps: [
          'Customize your health dashboard',
          'Add family members & caregivers',
          'Set sharing preferences',
          'Configure notification settings',
        ],
        stats: '10 min setup',
        benefits: [
          'Personalized health tracking',
          'Family & caregiver access',
          'Custom notifications',
        ],
        color: 'from-green-600 to-green-500',
        shadowColor: 'shadow-green-500/20',
        accentColor: 'bg-green-500',
      },
      {
        id: 3,
        title: 'Enhance Your Care',
        icon: Sparkles,
        description: 'Upgrade to comprehensive care',
        substeps: [
          'Browse AI monitoring options',
          'Explore professional services',
          'Select monitoring devices',
          'Choose subscription plans',
        ],
        stats: 'Choose your solutions',
        benefits: [
          'AI-powered insights',
          '24/7 professional monitoring',
          'Premium care features',
        ],
        color: 'from-teal-600 to-teal-500',
        shadowColor: 'shadow-teal-500/20',
        accentColor: 'bg-teal-500',
      },
    ];

    const StepCard = ({ step, isActive }) => (
      <div
        className={`relative p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
          isActive
            ? 'bg-gradient-to-br from-emerald-50 to-green-50 border-2 border-emerald-500 shadow-lg transform scale-105'
            : 'bg-white border border-gray-200 hover:border-emerald-300 hover:shadow'
        }`}
      >
        {/* Step Number */}
        <div className={`absolute -top-4 -left-4 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center`}>
          <span className={`w-6 h-6 rounded-full ${step.accentColor} text-white text-sm font-bold flex items-center justify-center`}>
            {step.id}
          </span>
        </div>

        {/* Header */}
        <div className="flex items-start space-x-4 mb-6">
          <div className={`p-3 rounded-xl text-white bg-gradient-to-r ${step.color}`}>
            <step.icon size={24} />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-800 mb-1">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
            <div className="flex items-center gap-1 text-gray-500 text-sm mt-2">
              <Clock size={14} />
              {step.stats}
            </div>
          </div>
        </div>

        {/* Substeps */}
        <div className="space-y-3 mb-6">
          {step.substeps.map((substep, idx) => (
            <div key={idx} className="flex items-start space-x-2">
              <CheckCircle size={16} className="mt-1 text-emerald-500 flex-shrink-0" />
              <span className="text-gray-700">{substep}</span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <button className={`mt-6 w-full bg-gradient-to-r ${step.color} text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity`}>
          {step.id === 3 ? 'Explore Options' : 'Start Now'}
          <ChevronRight size={16} />
        </button>
      </div>
    );

    return (
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
  <h2 className="text-4xl font-bold mb-4 text-gray-900">
    How It Works
  </h2>
  <p className="text-xl text-gray-600">Three simple steps to better health monitoring</p>
</div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <StepCard key={step.id} step={step} isActive={step.id === 1} />
            ))}
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#008B8B] via-[#009999] to-[#20B2AA] relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-transparent" />
          <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div>
                <h1 className="text-5xl font-bold text-white mb-6">
                  Professional Health
                  <span className="block mt-2 text-[#FF7F50]">Monitoring</span>
                </h1>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Advanced AI-powered health monitoring with real-time insights and professional analysis.
                  Get 24/7 emergency response and personalized care.
                </p>
                <div className="flex gap-4 mb-8">
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

              {/* Right Column - Clinical Dashboard */}
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 border border-blue-100 shadow-lg">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-semibold text-gray-800">Patient Vitals</h2>
                    <div className="flex items-center gap-2 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      <span className="text-red-600 font-medium text-sm">Monitoring</span>
                    </div>
                  </div>
                </div>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-4 gap-3">
                  {/* Heart Rate - Primary Metric */}
                  <div className="col-span-2 bg-blue-50 rounded-xl p-4 hover:bg-blue-100/50 transition-all border border-blue-100">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Heart className="w-4 h-4 text-red-500" />
                          <span className="text-gray-700 text-sm font-medium">Heart Rate</span>
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-bold text-gray-900">{stats.heartRate.value}</span>
                          <span className="text-gray-600 text-sm">bpm</span>
                        </div>
                      </div>
                      <div className="bg-green-100 px-2 py-1 rounded-full border border-green-200">
                        <span className="text-green-700 text-xs font-medium">+{stats.heartRate.trend}</span>
                      </div>
                    </div>
                  </div>

                  {/* Blood Pressure - Primary Metric */}
                  <div className="col-span-2 bg-blue-50 rounded-xl p-4 hover:bg-blue-100/50 transition-all border border-blue-100">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Activity className="w-4 h-4 text-blue-600" />
                          <span className="text-gray-700 text-sm font-medium">Blood Pressure</span>
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-bold text-gray-900">{stats.bloodPressure.value}/80</span>
                          <span className="text-gray-600 text-sm">mmHg</span>
                        </div>
                      </div>
                      <div className="bg-green-100 px-2 py-1 rounded-full border border-green-200">
                        <span className="text-green-700 text-xs font-medium">Normal</span>
                      </div>
                    </div>
                  </div>

                  {/* Secondary Metrics */}
                  {[
                    { icon: Droplet, label: 'Oxygen', value: stats.oxygen.value, unit: '%', color: 'text-cyan-600' },
                    { icon: Moon, label: 'Sleep', value: stats.sleep.value, unit: 'hrs', color: 'text-indigo-600' },
                    { icon: Circle, label: 'Steps', value: stats.steps.value.toLocaleString(), color: 'text-blue-600' },
                    { icon: Thermometer, label: 'Temp', value: stats.temp.value, unit: '°', color: 'text-orange-600' },
                    { icon: Zap, label: 'Calories', value: stats.calories.value, color: 'text-yellow-600' },
                    { icon: Timer, label: 'Stress', value: stats.stress.value, unit: 'low', color: 'text-purple-600' },
                  ].map((metric, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-xl p-3 hover:bg-gray-100/50 transition-all border border-gray-200">
                      <div className="flex items-center gap-2 mb-1">
                        <metric.icon className={`w-4 h-4 ${metric.color}`} />
                        <span className="text-gray-700 text-xs font-medium">{metric.label}</span>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-gray-900">{metric.value}</span>
                        {metric.unit && <span className="text-gray-600 text-xs">{metric.unit}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Enhanced Section */}
        <HowItWorksEnhanced />

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4">Why Choose iHealth-Sync?</h2>
            <p className="text-xl text-gray-600 text-center mb-12">Experience the future of health monitoring</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Feature Cards Column */}
              <div className="space-y-6">
                <FeatureCard
                  icon={Heart}
                  title="Real-Time Monitoring"
                  description="Advanced AI algorithms monitora your vital signs 24/7, providing instant alerts and personalized insights."
                />
                <FeatureCard
                  icon={Bell}
                  title="Smart Alerts"
                  description="Receive immediate notifications for critical health changes and emergency situations."
                />
                <FeatureCard
                  icon={UserPlus}
                  title="Family Connection"
                  description="Share health updates with family members and healthcare providers in real-time."
                />
              </div>

              {/* Image Column */}
              <div className="flex justify-center items-center">
                <img
                  src="/iHealth-home2.jpg"
                  alt="Why Choose iHealth-Sync"
                  className="rounded-xl shadow-lg object-cover h-[400px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Section */}
        <DashboardSection />

        {/* Blog Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4">Insights and Resources</h2>
            <p className="text-xl text-gray-600 text-center mb-12">Stay informed about your health journey</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* AI and Health Monitoring Card */}
              <div className="group hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-[#20B2AA]/10 to-[#008B8B]/20 rounded-2xl overflow-hidden border border-[#20B2AA]/20">
                  <div className="h-48 bg-[#008B8B]/20 rounded-t-2xl flex items-center justify-center">
                    <Settings className="w-16 h-16 text-[#008B8B]" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">AI and Health Monitoring</h3>
                    <p className="text-gray-600 mb-4">Discover how artificial intelligence is revolutionizing personal healthcare monitoring.</p>
                    <Link to="/ai-health-monitoring" className="text-[#008B8B] font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Managing Medications Card */}
              <div className="group hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-[#20B2AA]/10 to-[#008B8B]/20 rounded-2xl overflow-hidden border border-[#20B2AA]/20">
                  <div className="h-48 bg-[#008B8B]/20 rounded-t-2xl flex items-center justify-center">
                    <Bell className="w-16 h-16 text-[#008B8B]" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Managing Medications</h3>
                    <p className="text-gray-600 mb-4">Expert tips and digital tools for maintaining your medication schedule effectively.</p>
                    <Link to="/managing-medications" className="text-[#008B8B] font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Understanding Vitals Card */}
              <div className="group hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-[#20B2AA]/10 to-[#008B8B]/20 rounded-2xl overflow-hidden border border-[#20B2AA]/20">
                  <div className="h-48 bg-[#008B8B]/20 rounded-t-2xl flex items-center justify-center">
                    <Heart className="w-16 h-16 text-[#008B8B]" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Understanding Vitals</h3>
                    <p className="text-gray-600 mb-4">Comprehensive guide to interpreting your vital signs and health metrics.</p>
                    <Link to="/understanding-vitals" className="text-[#008B8B] font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-20 bg-gradient-to-br from-[#008B8B] to-[#20B2AA]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-white mb-6">Your Journey Starts Here</h2>
                <p className="text-xl text-white/90 mb-8">Join thousands of users who trust iHealth-Sync for their health monitoring needs.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/signup" className="bg-[#FF7F50] text-white px-8 py-3 rounded-xl hover:bg-[#FF6347] transition-all inline-flex items-center justify-center gap-2">
                    Get Started Now <ArrowRight className="w-5 h-5" />
                  </Link>
                  <button className="bg-white/10 text-white px-8 py-3 rounded-xl hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2">
                    Contact Sales <PhoneCall className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accessibility Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4">Designed for Everyone</h2>
            <p className="text-xl text-gray-600 text-center mb-12">Making health monitoring accessible to all</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={Settings}
                title="Accessibility Features"
                description="Intuitive interface designed for users of all abilities, with screen reader support and customizable displays."
              />
              <FeatureCard
                icon={Globe}
                title="Multilingual Support"
                description="Available in multiple languages with region-specific health guidelines and recommendations."
              />
              <FeatureCard
                icon={Smartphone}
                title="Mobile Optimized"
                description="Seamless experience across all devices with real-time synchronization and offline capability."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;