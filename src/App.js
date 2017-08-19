import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import LogIn from './components/LogIn'


class App extends Component {

  componentDidMount() {
    // let token = cookies.get('token')
    // this.props.getUser(token)
  }

  trafficController = () => {
    if (this.props.currentUser.id) {
      return <div>Dat BOI</div>
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
