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
      if (this.props.clients.length > 0) {
        return <div>{ this.props.children }</div>
      } else {
        return <div></div>
      }
    }
  }
}

const mapStateToProps = (state) => {
  return {
    clients: state.clients.clients,
    loading: state.clients.loading
  }
}
  
export default connect(mapStateToProps, {getClients})(Clients)