import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import moment from 'moment';
import Input from '../forms/Input'
import TextArea from '../forms/TextArea'
import validateInput from '../../validation/task'
import { createTask } from '../../actions/tasks'

class TaskForm extends Component {
  state = {
    name: '',
    due_date: moment(),
    body: '',
    client_id: '',
    errors: {},
    saving: false,
    focused: false
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
      let { name, due_date, body, client_id } = this.state
      this.props.createTask({name, body, due_date, client_id})
      this.setState({name: '', body: '', due_date: '', client_id: ''})
    }
  }

  renderOptions = () => {
    return this.props.clients.map( c => {
      return <option key={c.id} value={c.id}>{c.name}</option>
    })
  }

  render() {
    let { errors, name, body, focused } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          label='Name'
          type='text'
          name='name'
          value={name}
          onChange={this.handleChange}
          error={errors.name}
        />
        <TextArea
          label='Body'
          name='body'
          value={body}
          onChange={this.handleChange}
          error={errors.body}
        />
        <div>
          <label>Due Date</label>
          <SingleDatePicker
            id="due_date"
            numberOfMonths={1}
            date={null}
            focused={focused.focused}
            onFocusChange={focused => this.setState({ focused })}
            onDateChange={due_date => this.setState({ due_date })}
          />
          <div style={{position: 'relative'}}>
            { errors.due_date && <span style={{color: 'red', position: 'absolute', bottom: '-5px'}}>{errors.due_date}</span> }
          </div>
        </div>
        <div>
          <label>Client</label>
          <select name='client_id' onChange={this.handleChange}>
            {this.renderOptions()}
          </select>
          <div style={{position: 'relative'}}>
            { errors.client_id && <span style={{color: 'red', position: 'absolute', bottom: '-5px'}}>{errors.client_id}</span> }
          </div>
        </div>
        <div>
          <input className='button-primary' type="submit" />
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    clients: state.clients.clients
  }
}

export default connect(mapStateToProps, {createTask})(TaskForm)