import React from 'react';

const Hero = ({ title, subtitle, ctaPrimary, ctaSecondary, image }) => (
  <section className="bg-white py-12">
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/2 text-center lg:text-left space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
        <p className="text-lg text-gray-600">{subtitle}</p>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">{ctaPrimary}</button>
          <button className="bg-gray-100 text-blue-600 px-6 py-3 rounded-lg">{ctaSecondary}</button>
        </div>
      </div>
      <div className="lg:w-1/2">
        <img src={image} alt="Dashboard preview" className="w-full" />
      </div>
    </div>
  </section>
);

export default Hero;
