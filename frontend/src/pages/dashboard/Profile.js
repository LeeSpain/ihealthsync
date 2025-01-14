import React, { useState } from 'react';
import { Camera, User, Phone, Calendar, FileText, Heart, AlertTriangle, Clipboard } from 'lucide-react';
import DashboardHeader from '../../components/DashboardHeader'; // Import the DashboardHeader

const ProfilePage = () => {
  // Initialize state with some default data
  const [editing, setEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1234567890',
    profilePicture: '/path/to/default/profile.jpg',
    dob: '1990-05-15',
    passportNumber: 'A1234567',
    emergencyContact: { name: 'Jane Doe', phone: '+1234567891' },
    medicalHistory: 'No known medical conditions.',
    allergies: 'None.',
    medications: 'None.',
    bloodType: 'O+',
    doctor: { name: 'Dr. John Smith', phone: '+1234567892', hospital: 'Health Clinic' },
    insurance: { provider: 'Health Insurance Co.', policyNumber: 'XYZ123', planType: 'Premium' },
    family: [
      { name: 'Jane Doe', relationship: 'Spouse', phone: '+1234567891', email: 'janedoe@example.com' }
    ]
  });

  const [newPicture, setNewPicture] = useState(null);

  const handleChangePicture = (event) => {
    setNewPicture(URL.createObjectURL(event.target.files[0]));
  };

  // Handle changes in the input fields
  const handleInputChange = (field, value) => {
    setProfileData({
      ...profileData,
      [field]: value,
    });
  };

  // Save changes (you can also connect this to a backend to persist data)
  const handleSaveChanges = () => {
    setEditing(false);
    console.log('Profile Saved:', profileData); // This can be replaced by an API call to save the data
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-green-100 to-blue-200">
      {/* Dashboard Header */}
      <DashboardHeader />

      {/* Profile Page Content */}
      <div className="py-28">
        <div className="max-w-6xl mx-auto px-6 bg-white rounded-xl shadow-xl overflow-hidden p-8">
          {/* Profile Header */}
          <div className="flex items-center mb-8 justify-between">
            <div className="relative w-36 h-36 rounded-full bg-gray-300 mr-6 overflow-hidden">
              <img
                src={newPicture || profileData.profilePicture}
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <label htmlFor="file-upload" className="absolute bottom-0 right-0 bg-gray-700 text-white p-2 rounded-full cursor-pointer">
                <Camera className="w-6 h-6" />
              </label>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                onChange={handleChangePicture}
              />
            </div>
            <div className="flex flex-col text-gray-800">
              <h2 className="text-3xl font-semibold">{profileData.name}</h2>
              <p className="text-sm">{profileData.subscription} Subscription</p>
              <p className="text-sm">Next payment date: {profileData.nextPaymentDate}</p>
            </div>
          </div>

          {/* Editable Profile Information */}
          <div className="space-y-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-800">Profile Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-lg text-gray-700">
                <User className="w-6 h-6 text-gray-600" />
                <span>Name:</span>
                {editing ? (
                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                ) : (
                  <span>{profileData.name}</span>
                )}
              </div>
              <div className="flex items-center gap-2 text-lg text-gray-700">
                <Phone className="w-6 h-6 text-gray-600" />
                <span>Phone:</span>
                {editing ? (
                  <input
                    type="text"
                    value={profileData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                ) : (
                  <span>{profileData.phone}</span>
                )}
              </div>
              <div className="flex items-center gap-2 text-lg text-gray-700">
                <FileText className="w-6 h-6 text-gray-600" />
                <span>Email:</span>
                {editing ? (
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                ) : (
                  <span>{profileData.email}</span>
                )}
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">Emergency Contact Information</h3>
            <div className="flex items-center gap-2 text-lg text-gray-700">
              <Phone className="w-6 h-6 text-gray-600" />
              <span>Emergency Contact Name:</span>
              {editing ? (
                <input
                  type="text"
                  value={profileData.emergencyContact.name}
                  onChange={(e) => handleInputChange('emergencyContact', { ...profileData.emergencyContact, name: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              ) : (
                <span>{profileData.emergencyContact.name}</span>
              )}
            </div>
            <div className="flex items-center gap-2 text-lg text-gray-700">
              <Phone className="w-6 h-6 text-gray-600" />
              <span>Emergency Contact Phone:</span>
              {editing ? (
                <input
                  type="text"
                  value={profileData.emergencyContact.phone}
                  onChange={(e) => handleInputChange('emergencyContact', { ...profileData.emergencyContact, phone: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              ) : (
                <span>{profileData.emergencyContact.phone}</span>
              )}
            </div>
          </div>

          {/* Medical Information */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">Medical Information</h3>
            <div className="flex items-center gap-2 text-lg text-gray-700">
              <Heart className="w-6 h-6 text-gray-600" />
              <span>Medical History:</span>
              {editing ? (
                <textarea
                  value={profileData.medicalHistory}
                  onChange={(e) => handleInputChange('medicalHistory', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  rows="3"
                />
              ) : (
                <span>{profileData.medicalHistory}</span>
              )}
            </div>
            <div className="flex items-center gap-2 text-lg text-gray-700">
              <AlertTriangle className="w-6 h-6 text-gray-600" />
              <span>Allergies:</span>
              {editing ? (
                <input
                  type="text"
                  value={profileData.allergies}
                  onChange={(e) => handleInputChange('allergies', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              ) : (
                <span>{profileData.allergies}</span>
              )}
            </div>
            <div className="flex items-center gap-2 text-lg text-gray-700">
              <Clipboard className="w-6 h-6 text-gray-600" />
              <span>Primary Care Doctor:</span>
              {editing ? (
                <>
                  <input
                    type="text"
                    value={profileData.doctor.name}
                    onChange={(e) => handleInputChange('doctor', { ...profileData.doctor, name: e.target.value })}
                    placeholder="Doctor's Name"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="text"
                    value={profileData.doctor.phone}
                    onChange={(e) => handleInputChange('doctor', { ...profileData.doctor, phone: e.target.value })}
                    placeholder="Phone Number"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="text"
                    value={profileData.doctor.hospital}
                    onChange={(e) => handleInputChange('doctor', { ...profileData.doctor, hospital: e.target.value })}
                    placeholder="Hospital/Clinic"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </>
              ) : (
                <>
                  <span>{profileData.doctor.name}</span><br />
                  <span>{profileData.doctor.phone}</span><br />
                  <span>{profileData.doctor.hospital}</span>
                </>
              )}
            </div>
          </div>

          {/* Save/Cancel Buttons */}
          {editing && (
            <div className="flex gap-4 justify-end">
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
                Save Changes
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;