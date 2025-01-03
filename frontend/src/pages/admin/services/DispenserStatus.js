import React from 'react';
import { Battery, Wifi, AlertCircle } from 'lucide-react';

const DispenserStatus = () => {
  const dispensers = [
    {
      id: 'MD001',
      user: 'John Doe',
      battery: 85,
      lastSync: '2 mins ago',
      status: 'Active',
      alerts: 0
    }
    // Add more dispensers
  ];

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium text-gray-900">Med Dispenser Status</h3>
      </div>
      
      <div className="border-t border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Battery</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Sync</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {dispensers.map((dispenser) => (
              <tr key={dispenser.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{dispenser.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dispenser.user}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex items-center">
                    <Battery className="w-4 h-4 mr-2" />
                    {dispenser.battery}%
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dispenser.lastSync}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {dispenser.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DispenserStatus;