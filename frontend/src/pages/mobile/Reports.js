import React, { useState } from 'react';
import {
  Users, Ticket, Package, Bot, Clock, ChartPie,
  Download, Calendar, Filter, Building, User,
  ArrowUp, ArrowDown, BarChart2, Activity
} from 'lucide-react';
import DashboardHeader from '../../components/mobile/DashboardHeader';

const Reports = () => {
  const [activeView, setActiveView] = useState("overview");
  const [timeRange, setTimeRange] = useState("7days");

  // Mock data for overview metrics
  const overviewMetrics = {
    totalClients: 6000,
    activeTickets: 96,
    activeProducts: 1480,
    totalStaff: 150,
    satisfaction: 94,
    trends: {
      clients: "+12%",
      tickets: "-5%",
      products: "+8%"
    }
  };

  // Mock data for ticket metrics
  const ticketMetrics = {
    total: 156,
    avgResolutionTime: "4.2 hours",
    priorities: {
      urgent: 12,
      high: 23,
      medium: 67,
      low: 54
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      
      <main className="max-w-7xl mx-auto px-6 py-8 pt-24">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Reports Dashboard</h1>
            <p className="text-gray-600">Comprehensive analytics across all care companies and services</p>
          </div>
          <div className="flex gap-4">
            <select 
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008B8B]"
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <option value="7days">Last 7 Days</option>
              <option value="30days">Last 30 Days</option>
              <option value="90days">Last 90 Days</option>
              <option value="custom">Custom Range</option>
            </select>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#008B8B] text-white rounded-lg hover:bg-opacity-90">
              <Download className="w-5 h-5" />
              Export Report
            </button>
          </div>
        </div>

        {/* Overview Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-8 h-8 text-[#008B8B]" />
              <span className={`text-sm font-medium ${
                overviewMetrics.trends.clients.startsWith("+") ? "text-green-500" : "text-red-500"
              }`}>
                {overviewMetrics.trends.clients}
              </span>
            </div>
            <h3 className="text-sm font-medium text-gray-500">Total Clients</h3>
            <p className="text-2xl font-bold text-gray-900">{overviewMetrics.totalClients.toLocaleString()}</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <Ticket className="w-8 h-8 text-[#FF7F50]" />
              <span className={`text-sm font-medium ${
                overviewMetrics.trends.tickets.startsWith("+") ? "text-green-500" : "text-red-500"
              }`}>
                {overviewMetrics.trends.tickets}
              </span>
            </div>
            <h3 className="text-sm font-medium text-gray-500">Active Tickets</h3>
            <p className="text-2xl font-bold text-gray-900">{overviewMetrics.activeTickets}</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <Package className="w-8 h-8 text-[#008B8B]" />
              <span className={`text-sm font-medium ${
                overviewMetrics.trends.products.startsWith("+") ? "text-green-500" : "text-red-500"
              }`}>
                {overviewMetrics.trends.products}
              </span>
            </div>
            <h3 className="text-sm font-medium text-gray-500">Active Products</h3>
            <p className="text-2xl font-bold text-gray-900">{overviewMetrics.activeProducts}</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-8 h-8 text-[#008B8B]" />
              <span className="text-sm font-medium text-gray-500">Total</span>
            </div>
            <h3 className="text-sm font-medium text-gray-500">Staff Members</h3>
            <p className="text-2xl font-bold text-gray-900">{overviewMetrics.totalStaff}</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <ChartPie className="w-8 h-8 text-green-500" />
              <span className="text-sm font-medium text-green-500">Good</span>
            </div>
            <h3 className="text-sm font-medium text-gray-500">Client Satisfaction</h3>
            <p className="text-2xl font-bold text-gray-900">{overviewMetrics.satisfaction}%</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar - Report Types */}
          <div className="col-span-3">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h2 className="font-semibold text-gray-900 mb-4">Report Types</h2>
              <nav className="space-y-2">
                <button 
                  className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg ${
                    activeView === "overview" ? "bg-[#008B8B] text-white" : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveView("overview")}
                >
                  <BarChart2 className="w-5 h-5" />
                  Overview
                </button>
                <button 
                  className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg ${
                    activeView === "clients" ? "bg-[#008B8B] text-white" : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveView("clients")}
                >
                  <User className="w-5 h-5" />
                  Client Reports
                </button>
                <button 
                  className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg ${
                    activeView === "staff" ? "bg-[#008B8B] text-white" : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveView("staff")}
                >
                  <Users className="w-5 h-5" />
                  Staff Reports
                </button>
                <button 
                  className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg ${
                    activeView === "companies" ? "bg-[#008B8B] text-white" : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveView("companies")}
                >
                  <Building className="w-5 h-5" />
                  Care Companies
                </button>
                <button 
                  className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg ${
                    activeView === "products" ? "bg-[#008B8B] text-white" : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveView("products")}
                >
                  <Package className="w-5 h-5" />
                  Products & Services
                </button>
              </nav>

              <h2 className="font-semibold text-gray-900 mt-6 mb-4">Quick Reports</h2>
              <div className="space-y-2">
                <button className="flex items-center gap-2 w-full px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                  <Activity className="w-5 h-5" />
                  Performance Summary
                </button>
                <button className="flex items-center gap-2 w-full px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                  <Calendar className="w-5 h-5" />
                  Monthly Overview
                </button>
              </div>
            </div>
          </div>

          {/* Center - Main Report Content */}
          <div className="col-span-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Performance Metrics</h2>
                <Filter className="w-5 h-5 text-gray-400" />
              </div>
              
              <div className="space-y-6">
                {/* Sample chart area - Replace with actual chart component */}
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Chart Visualization</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Resolution Time</h3>
                    <p className="text-2xl font-bold text-gray-900">{ticketMetrics.avgResolutionTime}</p>
                    <p className="text-sm text-gray-500 mt-1">Average</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Total Tickets</h3>
                    <p className="text-2xl font-bold text-gray-900">{ticketMetrics.total}</p>
                    <p className="text-sm text-gray-500 mt-1">This period</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - AI Insights */}
          <div className="col-span-3">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-center gap-3 mb-4">
                <Bot className="w-6 h-6 text-[#FF7F50]" />
                <h2 className="font-semibold text-gray-900">AI Insights</h2>
              </div>
              <div className="space-y-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Key Findings</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center gap-2">
                      <ArrowUp className="w-4 h-4 text-green-500" />
                      Client satisfaction increased by 5%
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowDown className="w-4 h-4 text-[#FF7F50]" />
                      Response time needs improvement
                    </li>
                  </ul>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Recommendations</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#008B8B]" />
                      Optimize staff scheduling
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#008B8B]" />
                      Increase support coverage
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Reports;