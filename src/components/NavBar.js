import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../actions/currentUser'

const NavBar = ({selected, logout}) => {
  return (
    <ul style={{listStyleType: 'none', margin: '0', padding: '0'}}>
      <Link to='/' style={{padding: '12px'}}>Dashboard</Link>
      <Link to='/clients' style={{padding: '12px'}}>Clients</Link>
      <Link to='/tasks' style={{padding: '12px'}}>Tasks</Link>
      <a style={{padding: '12px', cursor: 'pointer', textDecoration: 'underline'}} onClick={logout}>Logout</a>
    </ul>
  )
}

export default connect(null, {logout})(NavBar)