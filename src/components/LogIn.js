import React from 'react'
import { connect } from 'react-redux'
import { auth } from '../actions/currentUser'
import Input from './forms/Input'
import validateInput from '../validation/login'

class LogIn extends React.Component {
  state = { email: '', password: '', errors: {} }

  isValid = (validator) => {
    const { errors, isValid } = validator(this.state)
    !isValid && this.setState({ errors })
    return isValid
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value, errors: {...this.state.errors, [e.target.name]: ''} })

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.isValid(validateInput)) {
      this.props.dispatch(auth(this.state))
    }
  }

  render() {
    let { errors, email, password } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          label={'Email'}
          type={'text'}
          name={'email'}
          value={email}
          onChange={this.handleChange}
          error={errors.email}
        />
        <Input
          label={'Password'}
          type={'password'}
          name={'password'}
          value={password}
          onChange={this.handleChange}
          error={errors.password}
        />
        <div>
          <input className='button-primary' type="submit" />
        </div>
      </form>
    )
  }
}

export default connect()(LogIn);