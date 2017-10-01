import React from 'react'

const DeleteActions = ({deleteMode, toggleDelete, deleteDocuments}) => {

  const confirmButtons = () => {
    return(
      <div>
        <button className='button-confirm' onClick={deleteDocuments}>Confirm</button>
        <button className='button-cancel' onClick={toggleDelete}>Cancel</button>
      </div>
    )
  }

  const deleteButton = () => {
    return(
      <div>
        <button className='button-primary' onClick={toggleDelete}>Delete</button> 
      </div>
    )
  }

  return (
    <div>
      { deleteMode ? confirmButtons() : deleteButton() }
    </div>
  )
}

export default DeleteActions