import React from 'react';
import { 
  BarChart3, Users, Settings, Bell, CreditCard, 
  FileText, Activity, Thermometer, Clock, Shield,
  LogOut 
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { title: 'Dashboard', icon: <BarChart3 />, path: '/admin' },
    { title: 'Manage Clients', icon: <Users />, path: '/admin/clients' },
    { title: 'Services', icon: <Settings />, path: '/admin/services' },
    { title: 'Emergency SOS', icon: <Bell />, path: '/admin/emergency' },
    { title: 'Med Dispenser', icon: <Clock />, path: '/admin/dispenser' },
    { title: 'Vitals Monitor', icon: <Activity />, path: '/admin/vitals' },
    { title: 'Subscriptions', icon: <CreditCard />, path: '/admin/subscriptions' },
    { title: 'Reports', icon: <FileText />, path: '/admin/reports' },
    { title: 'Settings', icon: <Shield />, path: '/admin/settings' }
  ];

  return (
    <div className="w-64 h-screen bg-white shadow-lg">
      <div className="flex flex-col h-full">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold text-gray-800">Admin Panel</h2>
        </div>

        <nav className="flex-1 overflow-y-auto p-4">
          {menuItems.map((item, index) => (
            <a 
              key={index}
              href={item.path}
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg mb-1"
            >
              {item.icon}
              <span>{item.title}</span>
            </a>
          ))}
        </nav>

        <div className="p-4 border-t">
          <button className="flex items-center gap-3 text-gray-700 hover:text-red-600 w-full px-4 py-2">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
