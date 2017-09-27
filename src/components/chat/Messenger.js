import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getMessages } from '../../actions/chat'
import ChatInputBox from './ChatInputBox'

class Messenger extends Component {

  componentDidMount() {
    this.props.dispatch(getMessages(this.props.client.id))
  }
  
  componentDidUpdate() {
    this.scrollBottom()
  }
  
  componentWillReceiveProps(nextProps) {
    if (this.props.client.id !== nextProps.client.id) {
      this.props.dispatch(getMessages(nextProps.client.id))
    }
  }
  
  scrollBottom = () => {
    let objDiv = document.getElementById("chat-window")
    if (objDiv)
      objDiv.scrollTop = objDiv.scrollHeight
  }
  
  renderMessages = () => {
    return this.props.messages.map(m => {
      return (
        <div key={m.id}>
          <div className='chat-message-container' style={m.user_id && {justifyContent: 'flex-end'}}>
            <div className={`chat-bubble ${!m.user_id && 'client-message'}`}>
              {`${m.body}`}
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    if (this.props.loading) {
      return(
        <div className='loader'>Loading...</div>
      )
    } else {
      return (
        <div style={{position: 'relative'}}>
          <div id='chat-window' className='chat-window' style={{display: 'flex', flexDirection: 'column'}}>
            {this.renderMessages()}
          </div>
          <ChatInputBox client={this.props.client} />
        </div>
      )
    }
  }
}

const mapStateToProps = (state, props) => {
  return {
    messages: state.messages.messages,
    loading: state.messages.loading,
    client: state.clients.clients.find(c => c.id.toString() === props.match.params.id)
  }
}

export default withRouter(connect(mapStateToProps)(Messenger))