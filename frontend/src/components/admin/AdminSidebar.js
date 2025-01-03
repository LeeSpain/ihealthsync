// frontend/src/components/admin/AdminSidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <aside className="w-64 bg-gray-100 h-screen shadow-md">
      <nav className="p-4">
        <ul className="space-y-4">
          <li>
            <Link to="/admin/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/users" className="text-gray-700 hover:text-blue-600">User Management</Link>
          </li>
          <li>
            <Link to="/admin/services" className="text-gray-700 hover:text-blue-600">Service Management</Link>
          </li>
          <li>
            <Link to="/admin/reports" className="text-gray-700 hover:text-blue-600">Reports</Link>
          </li>
          <li>
            <Link to="/admin/settings" className="text-gray-700 hover:text-blue-600">Settings</Link>
          </li>
          <li>
            <Link to="/admin/logs" className="text-gray-700 hover:text-blue-600">Logs</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;