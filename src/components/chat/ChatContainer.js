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
    <div className='row'>
      <div className='col-md-2 chat-room-sidebar'>
        { sideNav() }
      </div>
      <div className='col-md-10'>
        <Route path='/chat/:id' component={Chat} />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    clients: state.clients.clients
  }
}

export default connect(mapStateToProps)(ChatContainer)