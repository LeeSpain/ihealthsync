import React, { useState, useEffect } from 'react';
import { Phone, Video, Calendar, CheckCircle, AlertCircle, BarChart } from 'lucide-react';
import { Line } from 'react-chartjs-2';  // For Line chart component
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';  // For chart.js setup

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const YourNurse = () => {
  const [messageInput, setMessageInput] = useState('');
  const [tasks, setTasks] = useState([
    { task: 'Take your morning medication', completed: false },
    { task: 'Check blood pressure', completed: false },
    { task: 'Update glucose levels', completed: false },
  ]);
  const [healthMetrics, setHealthMetrics] = useState({
    bloodPressure: [120, 80],
    heartRate: 78,
    glucoseLevels: 98,
  });
  
  // Sample chart data (for blood pressure over time)
  const chartData = {
    labels: ['8 AM', '12 PM', '4 PM', '8 PM'],
    datasets: [
      {
        label: 'Blood Pressure',
        data: [120, 125, 118, 122],
        fill: false,
        borderColor: '#FF7F50',
        tension: 0.1,
      },
    ],
  };

  // Push notification permissions and notifications
  useEffect(() => {
    requestNotificationPermission();
    const interval = setInterval(() => {
      triggerReminderNotification();
    }, 60000);  // Notify every minute (for demonstration)
    
    return () => clearInterval(interval);
  }, []);

  // Request permission for notifications
  const requestNotificationPermission = () => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          console.log("Notification permission granted.");
        }
      });
    }
  };

  // Show browser notification
  const showNotification = (title, body) => {
    if (Notification.permission === 'granted') {
      new Notification(title, {
        body: body,
        icon: '/path/to/icon.png',
      });
    }
  };

  // Trigger task reminder notification
  const triggerReminderNotification = () => {
    showNotification("Medication Reminder", "It's time to take your morning medication!");
  };

  // Mark task as completed
  const handleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
  };

  // Handle sending a message
  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // Handle sending logic here
      console.log("Message sent:", messageInput);
      setMessageInput('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6 bg-white rounded-lg shadow-lg">
        {/* Nurse Profile Section */}
        <div className="flex items-center mb-8">
          <div className="w-24 h-24 rounded-full bg-gray-300 mr-6">
            {/* Nurse Avatar Placeholder */}
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Nurse Clara</h2>
            <p className="text-sm text-gray-600">Specialization: Elderly Care</p>
            <p className="text-sm text-gray-600">Next available: 2:00 PM</p>
            <p className="text-sm text-gray-600">Working Hours: 9 AM - 6 PM</p>
          </div>
        </div>

        {/* Communication with Nurse */}
        <div className="mb-8">
          <h3 className="font-semibold text-lg mb-4">Recent Messages</h3>
          <div className="border-b pb-4">
            <div className="flex justify-between">
              <p className="font-medium">Nurse Clara: How are you feeling today?</p>
              <span className="text-sm text-gray-500">12:30 PM</span>
            </div>
            <p className="text-sm text-gray-700">I'm doing okay, but I need to check my blood pressure.</p>
          </div>
          <textarea
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg mb-4"
            placeholder="Type your message..."
          ></textarea>
          <button
            onClick={handleSendMessage}
            className="bg-[#FF7F50] text-white py-2 px-6 rounded-lg hover:bg-[#FF6347]"
          >
            Send Message
          </button>
        </div>

        {/* Health Monitoring Section */}
        <div className="mb-8">
          <h3 className="font-semibold text-lg mb-4">Health Monitoring</h3>
          <div className="flex gap-8">
            <div className="flex flex-col items-center">
              <p className="text-xl font-semibold">Blood Pressure</p>
              <p className="text-lg text-gray-600">{healthMetrics.bloodPressure[0]}/{healthMetrics.bloodPressure[1]} mmHg</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-xl font-semibold">Heart Rate</p>
              <p className="text-lg text-gray-600">{healthMetrics.heartRate} bpm</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-xl font-semibold">Glucose Levels</p>
              <p className="text-lg text-gray-600">{healthMetrics.glucoseLevels} mg/dL</p>
            </div>
          </div>
        </div>

        {/* Health Chart - Blood Pressure Over Time */}
        <div className="mb-8">
          <h3 className="font-semibold text-lg mb-4">Blood Pressure Over Time</h3>
          <Line data={chartData} options={{ responsive: true }} />
        </div>

        {/* Care Plan Section */}
        <div className="mb-8">
          <h3 className="font-semibold text-lg mb-4">Care Plan</h3>
          <ul className="space-y-4">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="flex items-center"
                onClick={() => handleTaskCompletion(index)}
              >
                {task.completed ? (
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                ) : (
                  <span className="w-5 h-5 text-gray-500 mr-3">🕒</span>
                )}
                <span className={task.completed ? 'line-through' : ''}>{task.task}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Actions Section */}
        <div className="flex gap-6 justify-center mb-8">
          <button className="bg-[#FF7F50] text-white py-2 px-6 rounded-lg hover:bg-[#FF6347] flex items-center gap-2">
            <Phone className="w-5 h-5" />
            Call Nurse
          </button>
          <button className="bg-[#FF7F50] text-white py-2 px-6 rounded-lg hover:bg-[#FF6347] flex items-center gap-2">
            <Video className="w-5 h-5" />
            Video Consult
          </button>
        </div>

        {/* Emergency Alert */}
        <div className="bg-red-100 p-4 rounded-lg mb-8">
          <h4 className="font-semibold text-lg mb-2 text-red-600">Emergency Alert</h4>
          <p className="text-sm text-gray-700">Press the button below to alert your nurse in case of an emergency.</p>
          <button className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 mt-4">
            Emergency Alert
          </button>
        </div>
      </div>
    </div>
  );
};

export default YourNurse;
