import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { closeConversation } from '../../actions/conversations'
import { formatPhoneNumber } from '../../utils/functions'
import { push } from 'react-router-redux'
import Messenger from './Messenger'

const Chat = ({client, closeConversation, push}) => {

  const close = () => {
    closeConversation(client.id)
    push('/chat')
  }

  return (
    <div style={{flexGrow: '1'}}>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{flexGrow: '1'}}>
          <Messenger />
        </div>
        <div style={{flexGrow: '1', postion: 'relative'}}>
          <p><Link to={`/clients/${client.id}`}>{client.name}</Link></p>
          <p>{formatPhoneNumber(client.phone_number)}</p>
          <p>{client.last_seen}</p>
          <button style={{position: 'absolute', top: '47px', right: '2px'}} onClick={close}>Close</button>
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

export default connect(mapStateToProps, {closeConversation, push})(Chat)
