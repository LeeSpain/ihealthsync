import React from "react";

const EmergencySOS = ({ emergencySOS }) => {
  return (
    <div className="emergency-sos">
      <h2>Emergency SOS Management</h2>
      <table>
        <thead>
          <tr>
            <th>Client</th>
            <th>Urgency</th>
            <th>Response Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {emergencySOS.map((request, index) => (
            <tr key={index}>
              <td>{request.client}</td>
              <td>{request.urgency}</td>
              <td>{request.responseTime}</td>
              <td>{request.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmergencySOS;
