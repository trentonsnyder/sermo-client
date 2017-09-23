import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createMessage } from '../../actions/chat'
import validateInput from '../../validation/chat'

class ChatInputBox extends Component {

  state = {
    errors: {},
    body: ''
  }

  isValid = (validator) => {
    const { errors, isValid } = validator(this.state)
    !isValid && this.setState({ errors })
    return isValid
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value, errors: {...this.state.errors, [e.target.name]: ''} })

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.isValid(validateInput)) {
      this.props.createMessage({body: this.state.body, client_id: this.props.client.id})
      this.setState({body: '', errors: {}})
    }
  }

  render() {
    return (
      <div className='input-box' style={{backgroundColor: 'white', paddingTop: '5px'}}>
        <form style={{width: '100%', display: 'flex'}} onSubmit={this.handleSubmit}>
          <input type='text' name='body' value={this.state.body} onChange={this.onChange} />
          <input className='button-primary' type='submit' />
        </form>
      </div>
    )
  }
}

export default connect(null, {createMessage})(ChatInputBox)