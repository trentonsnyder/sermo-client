import React, { Component } from 'react'
import { connect } from 'react-redux'
import Input from '../forms/Input'
import validateInput from '../../validation/client'
import { createClient } from '../../actions/clients'

class ClientForm extends Component {
  state = {
    errors: {},
    first_name: '',
    last_name: '',
    phone_number: ''
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
      this.props.createClient({first_name, last_name, phone_number})
      this.setState({first_name: '', last_name: '', phone_number: ''})
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
        <div>
          <input className='button-primary' type="submit" />
        </div>
      </form>
    )
  }
}

export default connect(null, {createClient})(ClientForm)