// frontend/src/pages/dashboard/products/MedicationDispenserPage.js
import React, { useState } from 'react';

const MedicationDispenserPage = () => {
  const [medicationTimes, setMedicationTimes] = useState(['08:00 AM', '02:00 PM', '08:00 PM']);
  const [remainingPills, setRemainingPills] = useState(30);

  const handleTimeChange = (index, newTime) => {
    setMedicationTimes((prevTimes) => {
      const updatedTimes = [...prevTimes];
      updatedTimes[index] = newTime;
      return updatedTimes;
    });
  };

  const handleAddPills = (amount) => {
    setRemainingPills((prev) => prev + amount);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Medication Dispenser Management</h2>

        {/* Set Medication Times */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Medication Times</h3>
          <ul>
            {medicationTimes.map((time, index) => (
              <li key={index} className="flex justify-between items-center mb-4">
                <span>{time}</span>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => handleTimeChange(index, e.target.value)}
                  className="border p-2"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Remaining Pills */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Remaining Pills</h3>
          <div className="flex justify-between items-center">
            <span>{remainingPills} pills remaining</span>
            <button
              onClick={() => handleAddPills(30)}
              className="bg-[#008B8B] text-white px-4 py-2 rounded-lg hover:bg-[#20B2AA]"
            >
              Add 30 Pills
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicationDispenserPage;
