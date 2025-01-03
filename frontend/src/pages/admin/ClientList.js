import React from "react";

const ClientList = ({ clients }) => {
  return (
    <div className="client-list">
      <h2>Client Management</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Subscription</th>
            <th>Service Usage</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.subscription}</td>
              <td>{client.serviceUsage}</td>
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

export default ClientList;
