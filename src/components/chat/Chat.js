import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatPhoneNumber } from '../../utils/functions'
import Messenger from './Messenger'

const Chat = ({client}) => {
  return (
    <div style={{display: 'flex'}}>
      <div>
        <Messenger />
      </div>
      <div>
        <div>
          <p><Link to={`/clients/${client.id}`}>{client.name}</Link></p>
          <p>{formatPhoneNumber(client.phone_number)}</p>
          <p>{client.last_seen}</p>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    client: state.clients.clients.find(c => c.id.toString() === props.match.params.id)
  }
}

export default connect(mapStateToProps)(Chat)
