import React, { useState } from 'react';
import {
  Ticket, Filter, Search, AlertTriangle, Clock, CheckCircle,
  Users, Building, User, Bot, BarChart2, Calendar, 
  ArrowUpRight, MessageCircle, Mic
} from 'lucide-react';
import DashboardHeader from '../../components/mobile/DashboardHeader';

const Tickets = () => {
  // State management
  const [activeView, setActiveView] = useState("all");
  const [filterTimeRange, setFilterTimeRange] = useState("7days");
  const [searchQuery, setSearchQuery] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  // Mock data
  const ticketStats = {
    total: 156,
    open: 45,
    inProgress: 28,
    resolved: 83,
    priorities: {
      urgent: 12,
      high: 23,
      medium: 67,
      low: 54
    }
  };

  const mockTickets = [
    {
      id: 1,
      title: "Medication Dispenser Malfunction",
      client: "John Smith",
      company: "CarePlus Ltd",
      priority: "urgent",
      status: "open",
      category: "Technical Issue",
      created: "2h ago",
      description: "Device not dispensing medication at scheduled times"
    },
    {
      id: 2,
      title: "Service Schedule Update Required",
      client: "Mary Johnson",
      company: "HealthWatch Services",
      priority: "medium",
      status: "in_progress",
      category: "Service Request",
      created: "5h ago",
      description: "Need to modify weekly visit schedule"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      
      <main className="max-w-7xl mx-auto px-6 py-8 pt-24">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Tickets Overview</h1>
            <p className="text-gray-600">Manage and track support tickets across all care companies</p>
          </div>
          <div className="flex gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search tickets..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008B8B]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
            <button 
              className="flex items-center gap-2 px-4 py-2 bg-[#008B8B] text-white rounded-lg hover:bg-opacity-90"
              onClick={() => setIsRecording(!isRecording)}
            >
              <Mic className={`w-5 h-5 ${isRecording ? "animate-pulse" : ""}`} />
              {isRecording ? "Recording..." : "Create Voice Ticket"}
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Tickets</p>
                <p className="text-2xl font-bold text-gray-900">{ticketStats.total}</p>
              </div>
              <Ticket className="w-8 h-8 text-[#008B8B]" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Open</p>
                <p className="text-2xl font-bold text-[#FF7F50]">{ticketStats.open}</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-[#FF7F50]" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">In Progress</p>
                <p className="text-2xl font-bold text-[#008B8B]">{ticketStats.inProgress}</p>
              </div>
              <Clock className="w-8 h-8 text-[#008B8B]" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Resolved</p>
                <p className="text-2xl font-bold text-green-600">{ticketStats.resolved}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar - Filters */}
          <div className="col-span-3">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h2 className="font-semibold text-gray-900 mb-4">View By</h2>
              <nav className="space-y-2">
                <button 
                  className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg ${
                    activeView === "all" ? "bg-[#008B8B] text-white" : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveView("all")}
                >
                  <Ticket className="w-5 h-5" />
                  All Tickets
                </button>
                <button 
                  className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg ${
                    activeView === "clients" ? "bg-[#008B8B] text-white" : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveView("clients")}
                >
                  <User className="w-5 h-5" />
                  Clients
                </button>
                <button 
                  className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg ${
                    activeView === "staff" ? "bg-[#008B8B] text-white" : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveView("staff")}
                >
                  <Users className="w-5 h-5" />
                  Staff
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
              </nav>

              <h2 className="font-semibold text-gray-900 mt-6 mb-4">Time Range</h2>
              <div className="space-y-2">
                <button 
                  className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg ${
                    filterTimeRange === "7days" ? "bg-[#008B8B] text-white" : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setFilterTimeRange("7days")}
                >
                  <Calendar className="w-5 h-5" />
                  Last 7 Days
                </button>
                <button 
                  className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg ${
                    filterTimeRange === "30days" ? "bg-[#008B8B] text-white" : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setFilterTimeRange("30days")}
                >
                  <Calendar className="w-5 h-5" />
                  Last 30 Days
                </button>
              </div>
            </div>
          </div>

          {/* Center - Ticket List */}
          <div className="col-span-6">
            <div className="bg-white rounded-lg shadow-lg">
              <div className="p-4 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Filter className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-700">Filter by priority</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <BarChart2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-4 space-y-4">
                {mockTickets.map((ticket) => (
                  <div 
                    key={ticket.id}
                    className="p-4 rounded-lg border border-gray-200 hover:border-[#008B8B] transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-full ${
                        ticket.priority === "urgent" ? "bg-red-500" :
                        ticket.priority === "high" ? "bg-orange-500" :
                        ticket.priority === "medium" ? "bg-yellow-500" :
                        "bg-green-500"
                      } text-white`}>
                        <AlertTriangle className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-semibold text-gray-900">{ticket.title}</h3>
                          <span className="text-sm text-gray-500">{ticket.created}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{ticket.description}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="text-sm text-gray-500">{ticket.client}</span>
                          <span className="text-sm text-gray-400">•</span>
                          <span className="text-sm text-gray-500">{ticket.company}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar - AI Assistant */}
          <div className="col-span-3">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-center gap-3 mb-4">
                <Bot className="w-6 h-6 text-[#FF7F50]" />
                <h2 className="font-semibold text-gray-900">AI Guardian</h2>
              </div>
              <div className="space-y-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Ticket Analysis</h3>
                  <p className="text-sm text-gray-600">2 tickets require immediate attention</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Suggested Actions</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center gap-2">
                      <ArrowUpRight className="w-4 h-4 text-[#FF7F50]" />
                      Escalate medication dispenser issue
                    </li>
                    <li className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-[#008B8B]" />
                      Follow up on service schedule
                    </li>
                  </ul>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Voice Commands</h3>
                  <p className="text-sm text-gray-600">
                    Use voice commands to create or update tickets
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Tickets;