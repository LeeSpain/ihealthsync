import React from 'react';
import { BarChart3, Clock, Users } from 'lucide-react';

const AnalyticsPanel = ({ analytics }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Analytics Overview</h3>
      
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <h4 className="text-sm font-medium text-gray-500">Service Usage</h4>
            <p className="text-2xl font-semibold text-gray-900">{analytics.serviceUsage}%</p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-500">Response Time</h4>
            <p className="text-2xl font-semibold text-gray-900">{analytics.responseTime}m</p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-500">User Growth</h4>
            <p className="text-2xl font-semibold text-gray-900">+{analytics.userGrowth}%</p>
          </div>
        </div>

        {/* Trend Indicators */}
        <div className="pt-4 border-t">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>Monthly Trend</span>
            <span className="text-green-500">↑ 12%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPanel;