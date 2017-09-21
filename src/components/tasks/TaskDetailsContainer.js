import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteTask } from '../../actions/tasks'
import TaskDetails from './TaskDetails'
import TaskEdit from './TaskEdit'

class TaskDetailsContainer extends Component {
  state = { edit: false }

  toggleEdit = () => this.setState((prevState) => ({edit: !prevState.edit }))

  render() {
    let { state: {edit}, props: {task} } = this
    return (
      <div style={{padding: '20px'}}>
        { edit ? <TaskEdit task={task} toggleEdit={this.toggleEdit} /> : <TaskDetails task={task} deleteTask={() => this.props.deleteTask(task)} toggleEdit={this.toggleEdit} />}
      </div>
    )
  }
}

export default connect(null, {deleteTask})(TaskDetailsContainer)