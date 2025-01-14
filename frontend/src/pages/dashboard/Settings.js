import React, { useState } from 'react';
import { Lock, Bell, Globe, Edit, Trash2, CheckCircle, Info, Calendar, ArrowRightCircle } from 'lucide-react'; // Icons
import DashboardHeader from '../../components/DashboardHeader'; // Import the DashboardHeader

const SettingsPage = () => {
  const [editingPassword, setEditingPassword] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [language, setLanguage] = useState('English');
  const [timezone, setTimezone] = useState('GMT');
  const [accountStatus, setAccountStatus] = useState('active');

  // Handle changes in settings
  const handlePasswordChange = () => setEditingPassword(true);
  const handlePasswordSave = () => setEditingPassword(false);

  const handleSaveLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const handleSaveTimezone = (selectedTimezone) => {
    setTimezone(selectedTimezone);
  };

  const handleEmailNotificationChange = () => setEmailNotifications(!emailNotifications);
  const handlePushNotificationChange = () => setPushNotifications(!pushNotifications);

  const handleDeactivateAccount = () => setAccountStatus('deactivated');
  const handleDeleteAccount = () => setAccountStatus('deleted');

  // Define handleCancelEdit function
  const handleCancelEdit = () => {
    // Cancel editing password or other settings
    setEditingPassword(false);
    // Optionally, you can reset other fields if necessary
  };

  // Define handleSaveChanges function
  const handleSaveChanges = () => {
    // You can save the changes to local storage or send them to your backend here
    console.log("Settings Saved", { emailNotifications, pushNotifications, language, timezone });
    alert("Your settings have been saved.");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Dashboard Header */}
      <DashboardHeader />

      {/* Settings Page Content */}
      <div className="py-28">
        <div className="max-w-6xl mx-auto px-6 bg-white rounded-xl shadow-xl overflow-hidden p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Account Settings</h2>

          {/* Change Password Section */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-2 text-lg text-gray-700">
              <Lock className="w-6 h-6 text-gray-600" />
              <span>Change Password:</span>
              <button 
                className="text-[#FF7F50] hover:text-[#FF6347] cursor-pointer"
                onClick={handlePasswordChange}
              >
                {editingPassword ? 'Cancel' : 'Edit'}
              </button>
            </div>

            {editingPassword && (
              <div className="mt-4">
                <input
                  type="password"
                  placeholder="New Password"
                  className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                />
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
                <button
                  onClick={handlePasswordSave}
                  className="bg-[#FF7F50] text-white px-6 py-2 rounded-lg mt-4 hover:bg-[#FF6347]"
                >
                  Save Password
                </button>
              </div>
            )}
          </div>

          {/* Email Notifications */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-2 text-lg text-gray-700">
              <Bell className="w-6 h-6 text-gray-600" />
              <span>Email Notifications:</span>
              <div className="flex gap-4 ml-auto">
                <label>
                  <input 
                    type="checkbox" 
                    checked={emailNotifications} 
                    onChange={handleEmailNotificationChange} 
                    className="mr-2"
                  />
                  Receive Promotional Emails
                </label>
                <label>
                  <input 
                    type="checkbox" 
                    checked={pushNotifications} 
                    onChange={handlePushNotificationChange} 
                    className="mr-2"
                  />
                  Push Notifications
                </label>
              </div>
            </div>
          </div>

          {/* Language and Timezone */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-2 text-lg text-gray-700">
              <Globe className="w-6 h-6 text-gray-600" />
              <span>Language:</span>
              <select
                value={language}
                onChange={(e) => handleSaveLanguage(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg ml-auto"
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                {/* Add more languages as needed */}
              </select>
            </div>

            <div className="flex items-center gap-2 text-lg text-gray-700">
              <Calendar className="w-6 h-6 text-gray-600" />
              <span>Timezone:</span>
              <select
                value={timezone}
                onChange={(e) => handleSaveTimezone(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg ml-auto"
              >
                <option value="GMT">GMT</option>
                <option value="CET">Central European Time</option>
                <option value="PST">Pacific Standard Time</option>
                {/* Add more timezones as needed */}
              </select>
            </div>
          </div>

          {/* Account Deactivation or Deletion */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-2 text-lg text-gray-700">
              <Trash2 className="w-6 h-6 text-gray-600" />
              <span>Account Deactivation:</span>
              <button
                onClick={handleDeactivateAccount}
                className="text-red-500 hover:text-red-700"
              >
                Deactivate Account
              </button>
            </div>
            {accountStatus === 'deactivated' && (
              <p className="text-red-500">Your account is deactivated. Please contact support for reactivation.</p>
            )}

            <div className="flex items-center gap-2 text-lg text-gray-700">
              <Trash2 className="w-6 h-6 text-gray-600" />
              <span>Delete Account:</span>
              <button
                onClick={handleDeleteAccount}
                className="text-red-500 hover:text-red-700"
              >
                Delete Account
              </button>
            </div>
            {accountStatus === 'deleted' && (
              <p className="text-red-500">Your account has been permanently deleted.</p>
            )}
          </div>

          {/* Save Settings */}
          <div className="flex justify-end gap-4">
            <button
              onClick={handleCancelEdit}
              className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveChanges}
              className="bg-[#FF7F50] text-white px-6 py-2 rounded-lg hover:bg-[#FF6347]"
            >
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;