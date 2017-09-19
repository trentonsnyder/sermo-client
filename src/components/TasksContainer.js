import React, { Component } from 'react'
import { connect } from 'react-redux'
import TaskTable from './TaskTable'

class TasksContainer extends Component {
  state = { formOpen: false }

  toggleForm = () => {
    this.setState((prevState) => ({
      formOpen: !prevState.formOpen
    }))
  }
  
  render() {
    let { creating, tasks, clients } = this.props
    return (
      <div>
        { creating ? <button>Creating...</button> : <button onClick={this.toggleForm}>{this.state.formOpen ? 'Close' : 'Add'}</button> }
        {/* { this.state.formOpen && <TaskForm clients={clients}/> } */}
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