import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getClients } from '../../actions/clients'

class Clients extends Component {

  componentDidMount() {
    this.props.getClients();
  }

  render() {
    if (this.props.loading) {
      return <div className="loader">Loading...</div>
    } else {
      return <div>{ this.props.children }</div>
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.clients.loading
  }
}
  
export default connect(mapStateToProps, {getClients})(Clients)