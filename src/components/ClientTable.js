import React from 'react';

const ClientTable = ({clients}) => {

  const renderClients = () => {
    if (clients.length > 0) {
      return clients.map( c => {
        return (
          <tr key={c.id}>
            <td>{c.name}</td>
            <td>{c.phone_number}</td>
            <td>{c.last_seen}</td>
          </tr>
        )
      })
    } else {
      <tr>
        <td>no clients :(</td>
      </tr>
    }
  }

  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Phone</td>
          <td>Last Seen</td>
        </tr>
      </thead>
      <tbody>
        {renderClients()}
      </tbody>
    </table>
  );
};

export default ClientTable;