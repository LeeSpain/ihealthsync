import React from 'react';
import DashboardHeader from '../../components/mobile/DashboardHeader';

const Messages = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardHeader />
      <main className="max-w-screen-xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-gray-800">Messages</h1>
        <p className="mt-4 text-gray-600">
          Communicate with clients, staff, and others through messages.
        </p>
      </main>
    </div>
  );
};

export default Messages;
