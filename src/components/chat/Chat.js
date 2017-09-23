import React from 'react'
import { connect } from 'react-redux'
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
          <p>{client.name}</p>
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
