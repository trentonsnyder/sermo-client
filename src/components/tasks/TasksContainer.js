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
    let { state: {formOpen}, props: {creating, tasks, clients} } = this
    return (
      <div>
        { creating ? <button>Creating...</button> : <button onClick={this.toggleForm}>{formOpen ? 'Cancel' : 'Add'}</button> }
        { formOpen && <TaskForm tasks={tasks} toggleForm={this.toggleForm} /> }
        <TaskTable tasks={tasks} clients={clients} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    tasks: state.tasks.tasks,
    creating: state.tasks.creating,
    clients: state.clients.clients
  }
}

export default connect(mapStateToProps)(TasksContainer)