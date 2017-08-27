import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Cookies from 'universal-cookie'
import { getUser } from './actions/currentUser'
import Authenticated from './components/hoc/Authenticated'
import LogIn from './components/LogIn'
import './normalize.css'
import './skeleton.css'

let cookies = new Cookies()

class App extends Component {

  componentDidMount() {
    let token = cookies.get('sermoToken')
    if (token)
      this.props.dispatch(getUser(token))
    else
      this.props.dispatch({type: 'CURRENT_USER'})
  }

  trafficController = () => {
    if (!this.props.loading) {
      if (this.props.currentUser.id) {
        return <Authenticated />
      } else {
        return <LogIn />
      }
    } else {
      return( <div className="loader">Loading...</div> )
    }
  }

  render() {
    return (
      <div className='container'>
        { this.trafficController() }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    currentUser: state.currentUser.user,
    loading: state.currentUser.loading
  }
}

export default withRouter(connect(mapStateToProps)(App))
