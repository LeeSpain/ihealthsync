import React from 'react';
import Header from '../../components/Header'; // Importing the Header component

const NurseSync = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#008B8B] via-[#009999] to-[#20B2AA] text-white pt-24 pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center gap-12">
          {/* Text Content */}
          <div>
            <h1 className="text-5xl font-bold mb-6">
              Seamless Healthcare, <br />
              <span className="text-[#FF7F50]">Powered by iHealth-Sync and Nurse-Sync</span>
            </h1>
            <p className="text-xl leading-relaxed mb-8">
              Effortlessly connect professional nursing services with advanced healthcare tools for a unified care experience.
            </p>
            <button className="bg-[#FF7F50] text-white px-6 py-3 rounded-full font-medium hover:bg-[#FF6347] transition-all">
              Discover How It Works
            </button>
          </div>

          {/* Image Section */}
          <div className="relative bg-white/90 p-6 rounded-xl shadow-lg">
            <img
              src="/Nurse-Sync.jpg"
              alt="Nurse-Sync and iHealth working together"
              className="w-[80%] mx-auto h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-[#008B8B] mb-6">
            A Unified Solution for Exceptional Care
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            iHealth-Sync and Nurse-Sync come together to provide a seamless care experience. 
            Whether you're a client, family member, or nurse, our unified platform ensures 
            everyone stays connected and informed. From personalized care plans to real-time 
            updates, we make care accessible, efficient, and compassionate.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-100 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-[#008B8B] text-center mb-10">
            Why Choose iHealth-Sync and Nurse-Sync?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mb-10">
            Our platform empowers clients and families with the tools they need for effortless 
            care, while providing nurses with the support to deliver exceptional service. 
            Together, we’re transforming the way care is delivered.
          </p>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#008B8B]">Personalized Care Plans</h3>
              <p className="text-gray-700 leading-relaxed">
                Create and manage tailored care plans that fit individual needs. Our platform 
                ensures every care plan is dynamic, evolving as your needs change.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#008B8B]">Real-Time Health Updates</h3>
              <p className="text-gray-700 leading-relaxed">
                Stay informed with live updates on health metrics, progress reports, and alerts. 
                Families and nurses can work together with complete transparency.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#008B8B]">Effortless Communication</h3>
              <p className="text-gray-700 leading-relaxed">
                Connect instantly through video calls, messages, or notifications. Communication 
                has never been easier for clients, families, and nurses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-[#008B8B] text-center mb-10">How It Works</h2>
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-[#008B8B]">Step 1: Sign Up</h3>
              <p className="text-gray-700 leading-relaxed">
                Create your account and personalize your experience by setting up your health profile.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#008B8B]">Step 2: Connect with Nurses</h3>
              <p className="text-gray-700 leading-relaxed">
                Use Nurse-Sync to find and communicate with professional nurses who can manage your care plan.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#008B8B]">Step 3: Monitor Your Health</h3>
              <p className="text-gray-700 leading-relaxed">
                Track real-time metrics, receive alerts, and stay updated with your progress through the iHealth-Sync dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-gradient-to-br from-[#008B8B] to-[#20B2AA] text-white text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-semibold mb-6">Ready to Transform Your Care Experience?</h2>
          <p className="text-lg leading-relaxed mb-8">
            Let iHealth-Sync and Nurse-Sync redefine how care is delivered. Explore a platform 
            designed with you in mind—making every step of the journey effortless and 
            compassionate.
          </p>
          <button className="bg-white text-[#008B8B] px-8 py-3 rounded-full text-lg font-medium hover:bg-[#FF7F50] hover:text-white transition-all">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default NurseSync;
