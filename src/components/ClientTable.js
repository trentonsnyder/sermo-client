import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const ClientTable = ({clients}) => {

  const renderClients = () => {
    if (clients.length > 0) {
      return clients.map( c => {
        return (
          <tr key={c.id}>
            <td><Link to={`/clients/${c.id}`}>{c.name}</Link></td>
            <td>{c.phone_number}</td>
            <td>{c.last_seen}</td>
          </tr>
        )
      })
    } else {
      return(
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

const mapStateToProps = (state) => {
  return {
    clients: state.clients.clients
  }
}

export default connect(mapStateToProps)(ClientTable)