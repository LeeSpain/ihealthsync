import React, { useState } from 'react';
import DashboardHeader from '../../components/mobile/DashboardHeader';

const Clients = () => {
  // Sample data for companies and clients
  const companies = [
    { id: 1, name: 'Care Company A', clients: 500, status: 'Active', staff: 20 },
    { id: 2, name: 'Care Company B', clients: 400, status: 'Onboarding', staff: 10 },
    { id: 3, name: 'Care Company C', clients: 350, status: 'Inactive', staff: 15 },
    // Add more companies as needed
  ];

  const clients = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', company: 'Care Company A', status: 'Active', lastService: '2025-01-03' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', company: 'Care Company B', status: 'Inactive', lastService: '2024-12-30' },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', company: 'Care Company A', status: 'Active', lastService: '2025-01-02' },
    // Add more clients as needed
  ];

  const [selectedCompany, setSelectedCompany] = useState(null);

  // Filters clients by selected company
  const filteredClients = selectedCompany
    ? clients.filter(client => client.company === selectedCompany)
    : clients;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <DashboardHeader />

      {/* Main Content */}
      <div className="p-6 pt-24">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <header className="bg-white shadow p-4 mb-6 rounded-lg">
            <h1 className="text-2xl font-bold text-gray-800">Clients</h1>
          </header>

          {/* Performance Metrics */}
          <section className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white shadow rounded-lg p-4 text-center">
              <h2 className="text-lg font-medium text-gray-700">Total Clients</h2>
              <p className="text-2xl font-bold text-gray-900">{clients.length}</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4 text-center">
              <h2 className="text-lg font-medium text-gray-700">Active Clients</h2>
              <p className="text-2xl font-bold text-green-600">
                {clients.filter(client => client.status === 'Active').length}
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-4 text-center">
              <h2 className="text-lg font-medium text-gray-700">Total Companies</h2>
              <p className="text-2xl font-bold text-blue-600">{companies.length}</p>
            </div>
          </section>

          {/* Company Overview */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Company Overview</h2>
            <div className="bg-white shadow rounded-lg p-4">
              <table className="w-full table-auto text-left border-collapse">
                <thead>
                  <tr>
                    <th className="border-b p-2 font-medium text-gray-700">Company</th>
                    <th className="border-b p-2 font-medium text-gray-700">Clients</th>
                    <th className="border-b p-2 font-medium text-gray-700">Status</th>
                    <th className="border-b p-2 font-medium text-gray-700">Assigned Staff</th>
                    <th className="border-b p-2 font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {companies.map(company => (
                    <tr key={company.id} className="hover:bg-gray-50 transition">
                      <td className="border-b p-2 text-gray-800">{company.name}</td>
                      <td className="border-b p-2 text-gray-800">{company.clients}</td>
                      <td
                        className={`border-b p-2 font-medium ${
                          company.status === 'Active' ? 'text-green-600' : company.status === 'Onboarding' ? 'text-orange-600' : 'text-red-600'
                        }`}
                      >
                        {company.status}
                      </td>
                      <td className="border-b p-2 text-gray-800">{company.staff}</td>
                      <td className="border-b p-2">
                        <button
                          onClick={() => setSelectedCompany(company.name)}
                          className="text-blue-600 hover:underline"
                        >
                          View Clients
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Client Management */}
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Client Management</h2>
            <div className="bg-white shadow rounded-lg p-4">
              {filteredClients.length > 0 ? (
                <table className="w-full table-auto text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="border-b p-2 font-medium text-gray-700">Name</th>
                      <th className="border-b p-2 font-medium text-gray-700">Email</th>
                      <th className="border-b p-2 font-medium text-gray-700">Company</th>
                      <th className="border-b p-2 font-medium text-gray-700">Status</th>
                      <th className="border-b p-2 font-medium text-gray-700">Last Service</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredClients.map(client => (
                      <tr key={client.id} className="hover:bg-gray-50 transition">
                        <td className="border-b p-2 text-gray-800">{client.name}</td>
                        <td className="border-b p-2 text-gray-800">{client.email}</td>
                        <td className="border-b p-2 text-gray-800">{client.company}</td>
                        <td
                          className={`border-b p-2 font-medium ${
                            client.status === 'Active' ? 'text-green-600' : 'text-red-600'
                          }`}
                        >
                          {client.status}
                        </td>
                        <td className="border-b p-2 text-gray-800">{client.lastService}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-gray-600">No clients available.</p>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Clients;
