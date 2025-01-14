import React, { useState, useEffect } from 'react';
import { 
  Phone, Video, Calendar, CheckCircle, AlertCircle, BarChart2,
  Clock, FileText, MessageSquare, Bell, Heart, Activity,
  AlertTriangle, User, ChevronRight, Camera, Pill, Upload
} from 'lucide-react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import DashboardHeader from '../../components/DashboardHeader';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const YourNurse = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isRecording, setIsRecording] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);

  // Mock data
  const nurseInfo = {
    name: "Clara Thompson",
    title: "Senior Care Specialist RN",
    specialization: ["Elderly Care", "Chronic Disease Management"],
    experience: "15+ years",
    availability: {
      today: "2:00 PM - 6:00 PM",
      nextAvailable: "Tomorrow 9:00 AM"
    },
    rating: 4.9,
    reviews: 156
  };

  const healthMetrics = {
    bloodPressure: {
      current: [120, 80],
      trend: "stable",
      lastUpdated: "1 hour ago"
    },
    heartRate: {
      current: 78,
      trend: "improving",
      lastUpdated: "30 minutes ago"
    },
    glucoseLevels: {
      current: 98,
      trend: "stable",
      lastUpdated: "2 hours ago"
    },
    oxygen: {
      current: 98,
      trend: "stable",
      lastUpdated: "1 hour ago"
    }
  };

  const carePlan = {
    dailyTasks: [
      { id: 1, time: "8:00 AM", task: "Take morning medication", type: "medication", status: "completed" },
      { id: 2, time: "9:00 AM", task: "Check blood pressure", type: "monitoring", status: "pending" },
      { id: 3, time: "12:00 PM", task: "Update glucose levels", type: "monitoring", status: "pending" },
      { id: 4, time: "2:00 PM", task: "Video consultation with Nurse Clara", type: "appointment", status: "upcoming" }
    ],
    medications: [
      { name: "Lisinopril", dosage: "10mg", frequency: "Once daily", time: "8:00 AM", refill: "15 days left" },
      { name: "Metformin", dosage: "500mg", frequency: "Twice daily", time: "8:00 AM, 8:00 PM", refill: "20 days left" }
    ]
  };

  // Chart data
  const vitalsChartData = {
    labels: ['8 AM', '10 AM', '12 PM', '2 PM', '4 PM', '6 PM'],
    datasets: [
      {
        label: 'Blood Pressure (Systolic)',
        data: [120, 122, 118, 121, 120, 119],
        borderColor: '#008B8B',
        tension: 0.4,
      },
      {
        label: 'Heart Rate',
        data: [78, 80, 76, 79, 77, 78],
        borderColor: '#FF7F50',
        tension: 0.4,
      }
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      
      <main className="max-w-7xl mx-auto px-6 py-8 pt-28">
        {/* Top Section: Nurse Profile & Quick Actions */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* Nurse Profile */}
          <div className="col-span-2 bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 rounded-full bg-[#008B8B] bg-opacity-10 flex items-center justify-center">
                <User className="w-12 h-12 text-[#008B8B]" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{nurseInfo.name}</h2>
                    <p className="text-[#008B8B] font-medium">{nurseInfo.title}</p>
                    <div className="flex gap-2 mt-1">
                      {nurseInfo.specialization.map((spec, index) => (
                        <span key={index} className="text-sm bg-gray-100 px-2 py-1 rounded-full">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      <span className="text-lg font-bold text-gray-900">{nurseInfo.rating}</span>
                      <span className="text-yellow-400">★</span>
                    </div>
                    <p className="text-sm text-gray-500">{nurseInfo.reviews} reviews</p>
                  </div>
                </div>
                <div className="mt-4 flex gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-[#008B8B] text-white rounded-lg hover:bg-opacity-90">
                    <Video className="w-5 h-5" />
                    Start Video Call
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-[#008B8B] text-[#008B8B] rounded-lg hover:bg-[#008B8B] hover:text-white">
                    <Calendar className="w-5 h-5" />
                    Schedule Appointment
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-[#FF7F50] text-[#FF7F50] rounded-lg hover:bg-[#FF7F50] hover:text-white">
                    <AlertTriangle className="w-5 h-5" />
                    Emergency Contact
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Availability Card */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-[#008B8B]" />
              <h3 className="text-lg font-semibold text-gray-900">Availability</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Today's Hours</p>
                <p className="font-medium text-gray-900">{nurseInfo.availability.today}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Next Available</p>
                <p className="font-medium text-gray-900">{nurseInfo.availability.nextAvailable}</p>
              </div>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                <Calendar className="w-5 h-5" />
                View Full Schedule
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Left Column: Health Metrics & Charts */}
          <div className="col-span-2 space-y-6">
            {/* Vitals Overview */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Current Vitals</h3>
                <button className="text-sm text-[#008B8B] hover:text-[#FF7F50]">View History</button>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="w-5 h-5 text-[#FF7F50]" />
                    <span className="text-sm text-gray-500">Blood Pressure</span>
                  </div>
                  <p className="text-xl font-bold text-gray-900">{healthMetrics.bloodPressure.current[0]}/{healthMetrics.bloodPressure.current[1]}</p>
                  <p className="text-sm text-gray-500">mmHg</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Activity className="w-5 h-5 text-[#008B8B]" />
                    <span className="text-sm text-gray-500">Heart Rate</span>
                  </div>
                  <p className="text-xl font-bold text-gray-900">{healthMetrics.heartRate.current}</p>
                  <p className="text-sm text-gray-500">bpm</p>
                </div>
                {/* Add other vitals similarly */}
              </div>
            </div>

            {/* Vitals Chart */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Vitals Trends</h3>
                <div className="flex gap-4">
                  <select className="text-sm border border-gray-300 rounded-lg px-3 py-2">
                    <option>Last 24 Hours</option>
                    <option>Last Week</option>
                    <option>Last Month</option>
                  </select>
                </div>
              </div>
              <div className="h-80">
                <Line data={vitalsChartData} options={{ 
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                      beginAtZero: false
                    }
                  }
                }} />
              </div>
            </div>
          </div>

          {/* Right Column: Care Plan & Tasks */}
          <div className="space-y-6">
            {/* Today's Tasks */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Care Plan</h3>
              <div className="space-y-4">
                {carePlan.dailyTasks.map(task => (
                  <div key={task.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className={`p-2 rounded-full ${
                      task.status === 'completed' ? 'bg-green-100' :
                      task.status === 'pending' ? 'bg-yellow-100' :
                      'bg-blue-100'
                    }`}>
                      {task.type === 'medication' ? <Pill className="w-5 h-5 text-[#008B8B]" /> :
                       task.type === 'monitoring' ? <Activity className="w-5 h-5 text-[#FF7F50]" /> :
                       <Calendar className="w-5 h-5 text-blue-500" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="font-medium text-gray-900">{task.task}</p>
                        <span className="text-sm text-gray-500">{task.time}</span>
                      </div>
                      <p className="text-sm text-gray-500">{task.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Medications */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Medications</h3>
              <div className="space-y-4">
                {carePlan.medications.map((med, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium text-gray-900">{med.name}</p>
                        <p className="text-sm text-gray-500">{med.dosage} - {med.frequency}</p>
                      </div>
                      <span className="text-sm text-[#FF7F50]">{med.refill}</span>
                    </div>
                    <div className="mt-2 pt-2 border-t border-gray-200">
                      <p className="text-sm text-gray-500">Next dose: {med.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Communication */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Communication</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-[#008B8B]" />
                    <span className="font-medium text-gray-700">Send Message</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
                <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                  <div className="flex items-center gap-3">
                    <Camera className="w-5 h-5 text-[#008B8B]" />
                    <span className="font-medium text-gray-700">Share Photo/Video</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
                <button className="w-full flex items-center justify-between p-3 bg-red-50 rounded-lg hover:bg-red-100">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    <span className="font-medium text-red-700">Emergency Alert</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-red-400" />
                </button>
              </div>
            </div>

            {/* Upload Section */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Health Documents</h3>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">
                  Drop files here or <span className="text-[#008B8B] hover:text-[#FF7F50] cursor-pointer">browse</span>
                </p>
                <p className="text-xs text-gray-500 mt-1">Upload medical reports, prescriptions, or test results</p>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Alert Modal - Hidden by default */}
        <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${showUploadModal ? 'block' : 'hidden'}`}>
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Upload Documents</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-4">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Drag and drop files here</p>
              <p className="text-sm text-gray-500 mt-2">or</p>
              <button className="mt-4 px-4 py-2 bg-[#008B8B] text-white rounded-lg hover:bg-opacity-90">
                Browse Files
              </button>
            </div>
            <div className="flex justify-end gap-4">
              <button 
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                onClick={() => setShowUploadModal(false)}
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-[#008B8B] text-white rounded-lg hover:bg-opacity-90">
                Upload
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default YourNurse;