import React, { Component } from 'react'
import { connect } from 'react-redux'
import TaskTable from './TaskTable'
import TaskForm from './TaskForm'

class TasksContainer extends Component {
  state = { 
    formOpen: false
  }

  toggleForm = () => {
    this.setState((prevState) => ({
      formOpen: !prevState.formOpen
    }))
  }

  render() {
    let { state: {formOpen}, props: {creating, tasks} } = this
    return (
      <div style={{marginTop: '12px'}}>
        <div className='section-header'>
          <div className='flex-container'>
            <h3>Tasks</h3>
            { creating ? <button>Creating...</button> : <button  className='button-primary' onClick={this.toggleForm}>{formOpen ? 'Cancel' : 'Add'}</button> }
          </div>
        </div>
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