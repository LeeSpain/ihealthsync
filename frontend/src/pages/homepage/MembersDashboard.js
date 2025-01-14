import React from 'react';

const MembersDashboard = () => {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">Your Care, Connected.</h1>
          <p className="mt-4 text-lg">
            Experience real-time health insights, direct access to professional nurse care packages, and seamless family integration — all from one dashboard.
          </p>
          <div className="mt-6">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 mr-4">
              Get Started Now
            </button>
            <button className="bg-gray-100 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-white">
              Explore Care Packages
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">Why Choose Our Members Dashboard?</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Real-Time Health Metrics",
                description: "Stay informed with up-to-date stats on your health and wellness, including heart rate, glucose levels, and more.",
                icon: "📊",
              },
              {
                title: "Emergency SOS",
                description: "Get instant help during emergencies with a single click, ensuring peace of mind at all times.",
                icon: "🚨",
              },
              {
                title: "Personal Nurse Service",
                description: "Access tailored care plans and professional nurses 24/7 for a personalized healthcare experience.",
                icon: "🩺",
              },
              {
                title: "Family Integration",
                description: "Keep your loved ones informed and involved in your care by sharing updates and plans seamlessly.",
                icon: "👪",
              },
              {
                title: "AI-Powered Assistance",
                description: "Leverage your AI Personal Guardian for instant answers, guidance, and automated support.",
                icon: "🤖",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white shadow-lg p-6 rounded-lg text-center">
                <div className="text-4xl">{feature.icon}</div>
                <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">What Our Members Say</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "The Members Dashboard changed the way I manage my health — it's so easy to use!",
                name: "Sarah T.",
                image: "/assets/testimonial1.jpg",
              },
              {
                quote: "Knowing my family can stay updated gives me peace of mind.",
                name: "John D.",
                image: "/assets/testimonial2.jpg",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white shadow-lg p-6 rounded-lg">
                <p className="text-gray-600">{testimonial.quote}</p>
                <p className="mt-4 font-semibold text-blue-600">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
          <div className="mt-12 space-y-6">
            {[
              {
                question: "What does the Members Dashboard include?",
                answer: "The dashboard includes real-time health metrics, SOS features, nurse care packages, and family integration tools.",
              },
              {
                question: "How do I connect with a nurse?",
                answer: "You can connect through our built-in messaging and video call features for personalized support.",
              },
              {
                question: "Can my family access the dashboard?",
                answer: "Yes, you can invite family members to stay connected and informed about your health.",
              },
              {
                question: "Is there a subscription fee?",
                answer: "Basic registration is free, with affordable upgrades available for premium features and services.",
              },
            ].map((faq, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Take Control of Your Care Today</h2>
          <p className="mt-4">
            Sign up now and discover how the Members Dashboard can transform your healthcare experience.
          </p>
          <div className="mt-6">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Sign Up Free
            </button>
            <button className="bg-gray-100 text-blue-600 px-6 py-3 rounded-lg ml-4 font-semibold hover:bg-white">
              Explore Services
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MembersDashboard;
