import React from 'react'
import { Link } from 'react-router-dom'

const NavListItem = ({selectRoom, client, selected}) => {
  return (
    <Link to={`/chat/${client.id}`}>
      <div className={`chat-sidebar-item ${selected && 'selected'}`}>
        <p>{client.name}</p>
      </div>
    </Link>
  )
}

export default NavListItem