import React from 'react'
import { connect } from 'react-redux'
import { goBack } from 'react-router-redux'

const ClientDetails = ({client, dispatch}) => {
  return (
    <div>
      <button onClick={() => dispatch(goBack())}>Back</button>
      <p>{client.name}</p>
      <p>{client.phone_number}</p>
      <p>{client.last_seen}</p>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    client: state.clients.clients.find(c => c.id.toString() === props.match.params.id)
  }
}

export default connect(mapStateToProps)(ClientDetails)