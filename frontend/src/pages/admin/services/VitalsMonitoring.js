import React from 'react';
import { Heart, Activity, Thermometer } from 'lucide-react';

const VitalsMonitoring = () => {
  const vitals = [
    {
      user: 'Jane Smith',
      heartRate: '72 bpm',
      bloodPressure: '120/80',
      temperature: '98.6°F',
      status: 'Normal',
      lastUpdate: '1 min ago'
    }
    // Add more vitals data
  ];

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium text-gray-900">Vitals Monitoring</h3>
      </div>
      
      <div className="border-t border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Heart Rate</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Blood Pressure</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Temperature</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Update</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {vitals.map((vital, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{vital.user}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex items-center">
                    <Heart className="w-4 h-4 text-red-500 mr-2" />
                    {vital.heartRate}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex items-center">
                    <Activity className="w-4 h-4 text-blue-500 mr-2" />
                    {vital.bloodPressure}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex items-center">
                    <Thermometer className="w-4 h-4 text-orange-500 mr-2" />
                    {vital.temperature}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {vital.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vital.lastUpdate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VitalsMonitoring;