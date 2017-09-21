import React, { Component } from 'react'
import { connect } from 'react-redux'
import TaskTable from './TaskTable'
import TaskForm from './TaskForm'

class TasksContainer extends Component {
  state = { formOpen: false }

  toggleForm = () => {
    this.setState((prevState) => ({
      formOpen: !prevState.formOpen
    }))
  }
  
  render() {
    let { state: {formOpen}, props: {creating, tasks} } = this
    return (
      <div>
        <h3>Tasks</h3>
        { creating ? <button>Creating...</button> : <button onClick={this.toggleForm}>{formOpen ? 'Cancel' : 'Add'}</button> }
        { formOpen && <TaskForm tasks={tasks} toggleForm={this.toggleForm} /> }
        <TaskTable tasks={tasks} />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return{
    tasks: props.filterId ? state.tasks.tasks.filter(t => t.client.id === props.filterId) : state.tasks.tasks,
    creating: state.tasks.creating
  }
}

export default connect(mapStateToProps)(TasksContainer)