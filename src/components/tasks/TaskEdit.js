import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateTask } from '../../actions/tasks'
import Input from '../forms/Input'
import TextArea from '../forms/TextArea'
import validateInput from '../../validation/taskEdit'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import moment from 'moment'

class TaskEdit extends Component {
  state = {
    name: '',
    due_date: null,
    body: '',
    errors: {},
    focused: false
  }

  componentDidMount() {
    let { task } = this.props
    let due_date
    task.due_date ? due_date = moment(task.due_date) : due_date = null
    this.setState({name: task.name, body: task.body, due_date})
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
      let { name, due_date, body } = this.state
      this.props.updateTask({name, body, due_date, id: this.props.task.id, client: { id: this.props.task.client.id}})
      this.props.toggleEdit()
    }
  }

  renderOptions = () => this.props.clients.map( c => <option key={c.id} value={c.id}>{c.name}</option>)

  render() {
    let { errors, name, body, due_date, focused } = this.state
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
        <div>
          <label>Due Date</label>
          <SingleDatePicker
            id="due_date"
            numberOfMonths={1}
            date={due_date ? due_date : null}
            focused={focused.focused}
            onFocusChange={focused => this.setState({ focused })}
            onDateChange={due_date => this.setState({ due_date })}
          />
          <div style={{position: 'relative'}}>
            { errors.due_date && <span style={{color: 'red', position: 'absolute', bottom: '-5px'}}>{errors.due_date}</span> }
          </div>
        </div>
        <div style={{marginTop: '15px'}}>
          <input className='button-primary' type="submit" />
          <input type='button' onClick={this.props.toggleEdit} value='Cancel' />
        </div>
      </form>
    )
  }
}

export default connect(null, {updateTask})(TaskEdit)