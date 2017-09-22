import React, { Component } from 'react' 
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import ClientSideItem from './ClientSideItem'
import ClientChat from './ClientChat'
import './chat.css'

class ChatContainer extends Component {

  state = {
    name: 'joe'
  }

  componentDidMount() {
    this.setState({...this.props.clients[0]})
  }

  selectRoom = (client) => {
    this.setState({...client})
  }

  renderRooms = () => {
    return this.props.clients.map(c => {
      return(
        <ClientSideItem client={c} key={c.id} />
      )
    })
  }

  render() {
    return (
      <div className='row'>
        <div className='col-md-2 chat-room-sidebar'>
          { this.renderRooms() }
        </div>
        <div className='col-md-10'>
          <Route path='/chat/:id' component={ClientChat} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    clients: state.clients.clients
  }
}

export default connect(mapStateToProps)(ChatContainer)