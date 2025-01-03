import React from "react";

const ServiceManagement = ({ services }) => {
  return (
    <div className="service-management">
      <h2>Manage Services</h2>
      <table>
        <thead>
          <tr>
            <th>Service Name</th>
            <th>Active</th>
            <th>Inactive</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr key={index}>
              <td>{service.serviceName}</td>
              <td>{service.active}</td>
              <td>{service.inactive}</td>
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

export default ServiceManagement;
