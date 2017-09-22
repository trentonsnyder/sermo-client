import React from 'react'
import { connect } from 'react-redux'
import ChatWindow from './ChatWindow'

const ClientChat = ({client, loading}) => {
    return (
      <div className='row'>
        <div className='col-md-8'>
          <ChatWindow />
        </div>
        <div className='col-md-4'>
          {client.name}
        </div>
      </div>
    )
}

const mapStateToProps = (state, props) => {
  return {
    client: state.clients.clients.find(c => c.id.toString() === props.match.params.id)
  }
}

export default connect(mapStateToProps)(ClientChat)

