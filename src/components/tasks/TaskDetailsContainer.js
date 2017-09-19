import React, { Component } from 'react'
import TaskDetails from './TaskDetails'
import TaskEdit from './TaskEdit'

class TaskDetailsContainer extends Component {
  state = {
    edit: false
  }
  render() {
    let {state: {edit}, props: {task}} = this
    return (
      <div style={{padding: '20px'}}>
        { !edit ? <TaskEdit task={task} edit={edit} /> : <TaskDetails task={task} edit={edit} />}
      </div>
    )
  }
}

export default TaskDetailsContainer