import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Cookies from 'universal-cookie'
import { getUser } from './actions/currentUser'
import Dashboard from './components/Dashboard'
import LogIn from './components/LogIn'
import './normalize.css'
import './skeleton.css'

let cookies = new Cookies()

class App extends Component {

  componentDidMount() {
    let token = cookies.get('sermoToken')
    token && this.props.dispatch(getUser(token))
  }

  trafficController = () => {
    if (this.props.currentUser.id) {
      return <Dashboard />
    } else {
      return <LogIn />
    }
  }

  render() {
    return (
      <div>
        { this.trafficController()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { currentUser: state.currentUser }
}

export default withRouter(connect(mapStateToProps)(App))
