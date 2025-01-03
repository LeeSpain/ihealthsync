import React from 'react';
import { Users, Activity, AlertCircle } from 'lucide-react';

const QuickMetrics = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="p-5">
          <div className="flex items-center">
            <Users className="h-6 w-6 text-gray-400" />
            <div className="ml-5">
              <dt className="text-sm font-medium text-gray-500">Active Clients</dt>
              <dd className="text-2xl font-semibold text-gray-900">{stats.activeClients}</dd>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="p-5">
          <div className="flex items-center">
            <Activity className="h-6 w-6 text-gray-400" />
            <div className="ml-5">
              <dt className="text-sm font-medium text-gray-500">Active Subscriptions</dt>
              <dd className="text-2xl font-semibold text-gray-900">{stats.activeSubscriptions}</dd>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="p-5">
          <div className="flex items-center">
            <AlertCircle className="h-6 w-6 text-red-400" />
            <div className="ml-5">
              <dt className="text-sm font-medium text-gray-500">Active SOS</dt>
              <dd className="text-2xl font-semibold text-gray-900">{stats.activeSOS}</dd>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickMetrics;