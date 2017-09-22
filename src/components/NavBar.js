import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../actions/currentUser'
import './navbar.css'

const NavBar = ({selected, logout}) => {
  return (
    <div className='navbar'>
      <Link to='/'>Dashboard</Link>
      <Link to='/chat'>Chat</Link>
      <Link to='/clients'>Clients</Link>
      <Link to='/tasks'>Tasks</Link>
      <a onClick={logout}>Logout</a>
    </div>
  )
}

export default connect(null, {logout})(NavBar)