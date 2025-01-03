import React from "react";

const SubscriptionManagement = ({ subscriptions }) => {
  return (
    <div className="subscription-management">
      <h2>Subscription Management</h2>
      <table>
        <thead>
          <tr>
            <th>Plan</th>
            <th>Active</th>
            <th>Cancelled</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {subscriptions.map((subscription, index) => (
            <tr key={index}>
              <td>{subscription.plan}</td>
              <td>{subscription.active}</td>
              <td>{subscription.cancelled}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubscriptionManagement;
