import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {

  componentDidMount() {
    // this.props.dispatch()
  }

  render() {
    return (
      <div>
        <p>Wat?</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    currentUser: state.currentUser
   }
}

export default connect(mapStateToProps)(Dashboard)