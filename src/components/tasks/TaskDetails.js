import React from 'react'

const TaskDetails = ({task}) => {
  return (
    <div>
      <p>{task.name}</p>
      <p>{task.body}</p>
      <p>{task.due_date}</p>
    </div>
  )
}

export default TaskDetails