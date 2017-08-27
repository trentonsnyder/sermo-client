import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({selected}) => {
  return (
    <ul style={{listStyleType: 'none', margin: '0', padding: '0'}}>
      <Link to='/' style={{padding: '12px'}}>Dashboard</Link>
      <Link to='/clients' style={{padding: '12px'}}>Clients</Link>
      <a style={{padding: '12px'}}>Logout</a>
    </ul>
  )
}

export default NavBar