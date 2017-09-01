import React, { Component } from 'react'
import { connect } from 'react-redux'
import ClientTable from './ClientTable'
import { getClients } from '../actions/clients'

class Clients extends Component {

  componentDidMount() {
    this.props.getClients();
  }

  render() {
    return this.props.loading ? <div className="loader">Loading...</div> : <ClientTable clients={this.props.clients} />
  }
}

const mapStateToProps = (state) => {
  return {
    clients: state.clients.clients,
    loading: state.clients.loading
  }
}

export default connect(mapStateToProps, {getClients})(Clients)