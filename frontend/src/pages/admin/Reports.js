import React from "react";

const Reports = ({ services, subscriptions, emergencySOS }) => {
  return (
    <div className="reports">
      <h2>Reports & Analytics</h2>
      <div>
        <h3>Service Usage</h3>
        <ul>
          {services.map((service) => (
            <li key={service.serviceName}>
              {service.serviceName}: {service.active} Active, {service.inactive} Inactive
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Subscription Overview</h3>
        <ul>
          {subscriptions.map((subscription) => (
            <li key={subscription.plan}>
              {subscription.plan}: {subscription.active} Active, {subscription.cancelled} Cancelled
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Emergency SOS Requests</h3>
        <ul>
          {emergencySOS.map((request, index) => (
            <li key={index}>
              {request.client}: {request.urgency} - {request.status}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Reports;
