import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateTask } from '../../actions/tasks'
import Input from '../forms/Input'
import TextArea from '../forms/TextArea'
import validateInput from '../../validation/task'

class TaskEdit extends Component {
  state = {
    id: '',
    name: '',
    due_date: '',
    body: '',
    errors: {},
  }

  componentDidMount() {
    this.setState({...this.props.task})
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
      let { name, due_date, body, id } = this.state
      this.props.updateTask({name, body, due_date, id, client: { id: this.props.task.client.id}})
      this.props.toggleEdit()
    }
  }

  renderOptions = () => {
    return this.props.clients.map( c => {
      return <option key={c.id} value={c.id}>{c.name}</option>
    })
  }

  render() {
    let { errors, name, body, due_date } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          label={'Name'}
          type={'text'}
          name={'name'}
          value={name}
          onChange={this.handleChange}
          error={errors.name}
        />
        <TextArea
          label={'Body'}
          name={'body'}
          value={body}
          onChange={this.handleChange}
          error={errors.body}
        />
        <Input
          label={'Due Date'}
          type={'text'}
          name={'due_date'}
          value={due_date}
          onChange={this.handleChange}
          error={errors.due_date}
        />
        <div>
          <input className='button-primary' type="submit" />
          <input type='button' onClick={this.props.toggleEdit} value='Cancel' />
        </div>
      </form>
    )
  }
}

export default connect(null, {updateTask})(TaskEdit)