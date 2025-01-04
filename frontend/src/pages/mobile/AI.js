import React from 'react';
import DashboardHeader from '../../components/mobile/DashboardHeader';

const AI = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardHeader />
      <main className="max-w-screen-xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-gray-800">AI Guardian</h1>
        <p className="mt-4 text-gray-600">
          Ask questions and get real-time insights from the AI Mobile-Care Guardian.
        </p>
      </main>
    </div>
  );
};

export default AI;
