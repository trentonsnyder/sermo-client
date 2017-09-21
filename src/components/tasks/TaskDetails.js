import React from 'react'
import moment from 'moment'

const TaskDetails = ({task, toggleEdit, deleteTask}) => {
  return (
    <div>
      <p>{task.name}</p>
      <p>{task.body}</p>
      <p>{task.due_date ? moment(`${task.due_date}`,"YYYY-MM-DD").format('MM/DD/YYYY') : ''}</p>
      <button onClick={toggleEdit}>Edit</button>
      <button onClick={deleteTask}>Delete</button>
    </div>
  )
}

export default TaskDetails