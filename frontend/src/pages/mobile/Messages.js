import React, { useState } from 'react';
import { 
  MessageCircle, Bell, Send, Mic, User, Video, 
  Bot, FileText, AlertTriangle, Phone, Search,
  Filter, Flag, BarChart2, Calendar, PlayCircle
} from 'lucide-react';
import DashboardHeader from '../../components/mobile/DashboardHeader';

const Messages = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      sender: "John Doe", 
      company: "CarePlus Ltd",
      content: "Need urgent assistance with medication dispenser malfunction.",
      timestamp: "10:30 AM", 
      status: "unread",
      priority: "high",
      type: "support"
    },
    { 
      id: 2, 
      sender: "AI Guardian",
      content: "Based on the reported issue, I recommend checking the device battery and connectivity status. Would you like me to create a support ticket?",
      timestamp: "10:31 AM", 
      status: "read",
      type: "ai"
    },
    { 
      id: 3, 
      sender: "Jane Smith",
      company: "HealthWatch Services", 
      content: "Monthly device usage report is ready for your review.",
      timestamp: "11:15 AM", 
      status: "read",
      type: "report"
    }
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const newEntry = {
        id: messages.length + 1,
        sender: "Patrick",
        content: newMessage,
        timestamp: "Now",
        status: "sent",
        type: "message"
      };
      setMessages([...messages, newEntry]);
      setNewMessage("");
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      
      <main className="max-w-7xl mx-auto px-6 py-8 pt-24">
        {/* Header with Search */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
            <p className="text-gray-600">Manage communications across all care companies</p>
          </div>
          <div className="flex gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search messages..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008B8B]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
            <button className="bg-[#008B8B] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-opacity-90">
              <MessageCircle className="w-5 h-5" />
              New Message
            </button>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar - Categories */}
          <div className="col-span-3">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h2 className="font-semibold text-gray-900 mb-4">Categories</h2>
              <nav className="space-y-2">
                <button 
                  className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg ${
                    activeTab === "all" ? "bg-[#008B8B] text-white" : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveTab("all")}
                >
                  <MessageCircle className="w-5 h-5" />
                  All Messages
                </button>
                <button 
                  className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg ${
                    activeTab === "ai" ? "bg-[#008B8B] text-white" : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveTab("ai")}
                >
                  <Bot className="w-5 h-5" />
                  AI Assistant
                </button>
                <button 
                  className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg ${
                    activeTab === "support" ? "bg-[#008B8B] text-white" : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveTab("support")}
                >
                  <AlertTriangle className="w-5 h-5" />
                  Support
                </button>
                <button 
                  className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg ${
                    activeTab === "reports" ? "bg-[#008B8B] text-white" : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveTab("reports")}
                >
                  <FileText className="w-5 h-5" />
                  Reports
                </button>
              </nav>

              <h2 className="font-semibold text-gray-900 mt-6 mb-4">Quick Actions</h2>
              <div className="space-y-2">
                <button className="flex items-center gap-2 w-full px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                  <Video className="w-5 h-5" />
                  Start Video Call
                </button>
                <button className="flex items-center gap-2 w-full px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                  <Phone className="w-5 h-5" />
                  Start Voice Call
                </button>
                <button className="flex items-center gap-2 w-full px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                  <Calendar className="w-5 h-5" />
                  Schedule Meeting
                </button>
              </div>
            </div>
          </div>

          {/* Center - Messages List */}
          <div className="col-span-6">
            <div className="bg-white rounded-lg shadow-lg h-[calc(100vh-200px)] flex flex-col">
              {/* Messages Header */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Filter className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-700">Filter by priority</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <Flag className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <BarChart2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Messages List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div 
                    key={message.id}
                    className={`p-4 rounded-lg ${
                      message.status === "unread" ? "bg-gray-50" : "bg-white"
                    } border border-gray-200`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-full text-white ${
                        message.type === "ai" ? "bg-[#FF7F50]" : "bg-[#008B8B]"
                      }`}>
                        {message.type === "ai" ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-gray-900">{message.sender}</h3>
                            {message.company && (
                              <p className="text-sm text-gray-500">{message.company}</p>
                            )}
                          </div>
                          <span className="text-sm text-gray-500">{message.timestamp}</span>
                        </div>
                        <p className="mt-2 text-gray-700">{message.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex items-end gap-4">
                  <div className="flex-1 relative">
                    <textarea
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#008B8B]"
                      rows="3"
                      placeholder="Type your message here..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <button 
                      className={`absolute right-3 bottom-3 p-2 rounded-full ${
                        isRecording ? "bg-red-500" : "bg-gray-100"
                      }`}
                      onClick={toggleRecording}
                    >
                      <Mic className={`w-5 h-5 ${isRecording ? "text-white" : "text-gray-600"}`} />
                    </button>
                  </div>
                  <button
                    className="bg-[#008B8B] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 flex items-center gap-2"
                    onClick={handleSendMessage}
                  >
                    <Send className="w-5 h-5" />
                    Send
                  </button>
                </div>
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
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Message Analysis</h3>
                  <p className="text-sm text-gray-600">2 high-priority messages detected</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Suggested Actions</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-[#FF7F50]" />
                      Create support ticket for dispenser
                    </li>
                    <li className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#008B8B]" />
                      Review device usage report
                    </li>
                  </ul>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Voice Commands</h3>
                  <p className="text-sm text-gray-600">
                    Click the microphone icon to start voice commands
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

export default Messages;