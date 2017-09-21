import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateClient } from '../../actions/clients'
import Input from '../forms/Input'
import validateInput from '../../validation/clientEdit'

class ClientEdit extends Component {
  state = {
    first_name: '',
    last_name: '',
    phone_number: '',
    errors: {},
  }

  componentDidMount() {
    let { client } = this.props
    this.setState({first_name: client.first_name, last_name: client.last_name, phone_number: client.phone_number})
  }

  isValid = (validator) => {
    const { errors, isValid } = validator(this.state)
    !isValid && this.setState({ errors })
    return isValid
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value, errors: {...this.state.errors, [e.target.name]: ''} })

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.isValid(validateInput)) {
      let { first_name, last_name, phone_number } = this.state
      this.props.updateClient({first_name, last_name, phone_number, id: this.props.client.id})
      this.props.toggleEdit()
    }
  }

  render() {
    let { errors, first_name, last_name, phone_number } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          label={'First Name'}
          type={'text'}
          name={'first_name'}
          value={first_name}
          onChange={this.handleChange}
          error={errors.first_name}
        />
        <Input
          label={'Last Name'}
          type={'text'}
          name={'last_name'}
          value={last_name}
          onChange={this.handleChange}
          error={errors.last_name}
        />
        <Input
          label={'Phone Number'}
          type={'text'}
          name={'phone_number'}
          value={phone_number}
          onChange={this.handleChange}
          error={errors.phone_number}
        />
        <div style={{marginTop: '15px'}}>
          <input className='button-primary' type="submit" />
          <input type='button' onClick={this.props.toggleEdit} value='Cancel' />
        </div>
      </form>
    )
  }
}

export default connect(null, {updateClient})(ClientEdit)