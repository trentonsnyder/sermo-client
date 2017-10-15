import React from 'react' 
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import NavListItem from './NavListItem'
import Chat from './Chat'
import { getMyConversations, getConversations } from '../../actions/conversations'
import './chat.css'

class ChatContainer extends React.Component {

  state = {
    filter: 'me',
    conversations: true
  }

  componentDidMount() {
    this.props.getMyConversations()
  }

  getMyConversations = () => {
    this.props.getMyConversations()
    this.setState({filter: 'me', conversations: true})
  }

  getConversations = () => {
    this.props.getConversations()
    this.setState({filter: 'all', conversations: true})
  }

  setToClients = () => {
    this.setState({filter: 'new', conversations: false})
  }

  sideNav = () => {
    if (this.state.conversations) {
      return this.props.conversations.map(c => {
        return <NavListItem client={c.client} closeOptions={true} key={c.id} selected={this.props.location.pathname === `/chat/${c.client.id}` ? true : false} />
      })
    } else {
      return this.props.clients.map(c => {
        return <NavListItem client={c} key={c.id} closeOptions={false} selected={this.props.location.pathname === `/chat/${c.id}` ? true : false} />
      })
    }
  }

  render() {
    let { filter } = this.state
    if (this.props.loading) {
      return <div className="loader">Loading...</div>
    } else {
      return (
        <div style={{display: 'flex'}}>
          <div className='chat-room-sidebar'>
            <div className='chat-sidebar-header'>
              <button onClick={filter !== 'all' ? this.getConversations : null}>All</button>
              <button onClick={filter !== 'me' ? this.getMyConversations : null}>Me</button>
              <button onClick={filter !== 'new' ? this.setToClients : null}>New</button>
            </div>
            { this.sideNav() }
          </div>
          <Route path='/chat/:id' component={Chat} />
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    conversations: state.conversations.conversations,
    clients: state.clients.clients,
    loading: state.conversations.loading
  }
}

export default connect(mapStateToProps, {getMyConversations, getConversations})(ChatContainer)