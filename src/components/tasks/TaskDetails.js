import React from 'react'

const TaskDetails = ({task, toggleEdit}) => {
  return (
    <div>
      <p>{task.name}</p>
      <p>{task.body}</p>
      <p>{task.due_date}</p>
      <button onClick={toggleEdit}>Edit</button>
    </div>
  )
}

export default TaskDetails