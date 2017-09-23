import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getMessages } from '../../actions/chat'

class Messenger extends Component {

  componentDidMount() {
    this.props.dispatch(getMessages(this.props.client.room_id))
  }
  
  componentDidUpdate() {
    this.scrollBottom()
  }
  
  componentWillReceiveProps(nextProps) {
    if (this.props.client.id !== nextProps.client.id) {
      this.props.dispatch(getMessages(nextProps.client.room_id))
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
        <div key={m.id} className='col-xs-12'>
          <div className={`row ${m.user_id ? 'end-xs' : 'start-xs'}`} style={{marginBottom: '12px'}}>
            <div className={`chat-bubble ${m.user_id && 'client-message'}`}>
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
          <div id='chat-window' className='row chat-window'>
            <div className='inner-chat-window'>
              {this.renderMessages()}
            </div>
          </div>
          <div className='input-box'>
            <form>
              <input type='text' />
            </form>
          </div>
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