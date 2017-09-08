import React from 'react'
import { Link } from 'react-router-dom'
import { formatPhoneNumber } from '../utils/functions'

const ClientTable = ({clients}) => {

  const renderClients = () => {
    if (clients.length > 0) {
      return clients.map( c => {
        return (
          <tr key={c.id}>
            <td><Link to={`/clients/${c.id}`}>{c.name}</Link></td>
            <td>{formatPhoneNumber(c.phone_number)}</td>
            <td>{c.last_seen}</td>
          </tr>
        )
      })
    } else {
      return (
        <tr>
          <td>no clients :(</td>
        </tr>
      )
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
  )
}

export default ClientTable