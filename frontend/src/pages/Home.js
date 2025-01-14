import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  Layout,
  Sparkles,
  Star,
} from 'lucide-react';
import Header from '../components/Header';

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

  const TestimonialsSection = () => (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">What Our Users Say</h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Hear from people who transformed their health with iHealth-Sync.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-[#20B2AA]/10 to-[#008B8B]/20 p-6 rounded-2xl border border-[#20B2AA]/20 hover:shadow-lg transition-all relative"
          >
            {/* User Avatar */}
            <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-gradient-to-r from-[#008B8B] to-[#20B2AA] flex items-center justify-center text-white font-bold text-lg">
              JD
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-semibold">John Doe</h3>
              <p className="text-sm text-gray-600 mb-4">New York, USA</p>
              <p className="text-gray-700 mb-4">
                "iHealth-Sync has been a game-changer for my health. The real-time monitoring and AI insights helped me improve my sleep and reduce stress significantly."
              </p>
              {/* Star Rating */}
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-gray-600">5/5</span>
              </div>
              {/* Key Metrics */}
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Heart className="w-4 h-4 text-red-500" />
                <span>Improved sleep by 2 hours per night</span>
              </div>
            </div>
          </motion.div>

          {/* Testimonial 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-[#20B2AA]/10 to-[#008B8B]/20 p-6 rounded-2xl border border-[#20B2AA]/20 hover:shadow-lg transition-all relative"
          >
            {/* User Avatar */}
            <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-gradient-to-r from-[#008B8B] to-[#20B2AA] flex items-center justify-center text-white font-bold text-lg">
              JS
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-semibold">Jane Smith</h3>
              <p className="text-sm text-gray-600 mb-4">London, UK</p>
              <p className="text-gray-700 mb-4">
                "The family connection feature is amazing! I can now share my health updates with my doctor and family in real-time. Highly recommend iHealth-Sync!"
              </p>
              {/* Star Rating */}
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-gray-600">5/5</span>
              </div>
              {/* Key Metrics */}
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <UserPlus className="w-4 h-4 text-blue-500" />
                <span>Connected with 3 family members</span>
              </div>
            </div>
          </motion.div>

          {/* Testimonial 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-[#20B2AA]/10 to-[#008B8B]/20 p-6 rounded-2xl border border-[#20B2AA]/20 hover:shadow-lg transition-all relative"
          >
            {/* User Avatar */}
            <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-gradient-to-r from-[#008B8B] to-[#20B2AA] flex items-center justify-center text-white font-bold text-lg">
              ML
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-semibold">Michael Lee</h3>
              <p className="text-sm text-gray-600 mb-4">Sydney, Australia</p>
              <p className="text-gray-700 mb-4">
                "The AI-powered insights are incredibly accurate. I was able to identify and address my stress triggers early, thanks to iHealth-Sync."
              </p>
              {/* Star Rating */}
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-gray-600">5/5</span>
              </div>
              {/* Key Metrics */}
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Activity className="w-4 h-4 text-green-500" />
                <span>Reduced stress by 30% in 3 months</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-12">
          <Link
            to="/testimonials"
            className="bg-[#FF7F50] text-white px-8 py-3 rounded-full hover:bg-[#FF6347] transition-all inline-flex items-center gap-2"
          >
            Read More Stories <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );

  const InsightsAndResourcesSection = () => {
    const insights = [
      {
        icon: Settings,
        title: "AI and Health Monitoring",
        description: "Learn how artificial intelligence transforms personal health monitoring into a proactive tool for better outcomes.",
        link: "/ai-health-monitoring",
      },
      {
        icon: Bell,
        title: "Managing Medications",
        description: "Simplify your medication routines with smart reminders, tracking, and professional guidance.",
        link: "/managing-medications",
      },
      {
        icon: UserPlus,
        title: "Central Access",
        description: "Ensure everyone in your care network has secure access to your health history and updates in real-time.",
        link: "/central-access",
      },
    ];

    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Insights and Resources</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Discover how iHealth-Sync empowers you and your care network to stay connected and informed.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <div
                key={index}
                className="group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-[#20B2AA]/10 to-[#008B8B]/20 rounded-2xl overflow-hidden border border-[#20B2AA]/20"
              >
                <div className="h-48 bg-[#008B8B]/20 rounded-t-2xl flex items-center justify-center">
                  <insight.icon className="w-16 h-16 text-[#008B8B]" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{insight.title}</h3>
                  <p className="text-gray-600 mb-4">{insight.description}</p>
                  <Link
                    to={insight.link}
                    className="text-[#008B8B] font-medium flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/resources"
              className="bg-[#FF7F50] text-white px-8 py-3 rounded-full hover:bg-[#FF6347] transition-all"
            >
              View All Insights
            </Link>
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

        {/* Why the iHealth-Sync Dashboard Matters Section */}
        <DashboardSection />

        {/* Why Choose iHealth-Sync Section */}
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
                  description="Advanced AI algorithms monitor your vital signs 24/7, providing instant alerts and personalized insights."
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

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Insights and Resources Section */}
        <InsightsAndResourcesSection />

        {/* Your Journey Starts Here Section */}
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
      </div>
    </div>
  );
};

export default HomePage;