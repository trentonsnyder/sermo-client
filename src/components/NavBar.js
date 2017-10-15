import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../actions/currentUser'
import './navbar.css'

class NavBar extends React.Component {
  componentDidMount() {
    this.props.clearNotification()
  }

  render() {
    return (
      <div className='navbar'>
        <Link to='/'>Dashboard</Link>
        <Link to='/chat'>Chat{this.props.notification && <span> (new)</span> }</Link>
        <Link to='/clients'>Clients</Link>
        <Link to='/tasks'>Tasks</Link>
        <a onClick={this.props.logout}>Logout</a>
      </div>
    )
  }
}

export default connect(null, {logout})(NavBar)