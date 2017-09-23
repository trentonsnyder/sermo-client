import React from 'react' 
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import NavListItem from './NavListItem'
import Chat from './Chat'
import './chat.css'

const ChatContainer = ({clients}) => {

  const sideNav = () => {
    return clients.map(c => {
      return(
        <NavListItem client={c} key={c.id} />
      )
    })
  }

  return (
    <div style={{display: 'flex'}}>
      <div className='chat-room-sidebar'>
        { sideNav() }
      </div>
      <Route path='/chat/:id' component={Chat} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    clients: state.clients.clients
  }
}

export default connect(mapStateToProps)(ChatContainer)