import React, { Component } from 'react'
import Input from '../forms/Input'
import TextArea from '../forms/TextArea'

class TaskEdit extends Component {
  state = {
    name: '',
    due_date: '',
    body: '',
    errors: {},
    saving: false
  }

  componentDidMount() {
    this.setState({...this.props.task})
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
        </div>
      </form>
    )
  }
}

export default TaskEdit