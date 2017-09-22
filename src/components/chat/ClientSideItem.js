import React from 'react'
import { Link } from 'react-router-dom'

const ClientSideItem = ({selectRoom, client}) => {
  return (
    <Link to={`/chat/${client.id}`}>
      <div className='chat-sidebar-item'>
        <p>{client.name}</p>
      </div>
    </Link>
  )
}

export default ClientSideItem