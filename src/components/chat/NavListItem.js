import React from 'react'
import { Link } from 'react-router-dom'

const NavListItem = ({selectRoom, client, selected, notify}) => {
  return (
    <Link to={`/chat/${client.id}`}>
      <div className={`chat-sidebar-item ${selected && 'selected'}`}>
        <p>{client.name}{ notify && <span><small> (new)</small></span> }</p>
      </div>
    </Link>
  )
}

export default NavListItem