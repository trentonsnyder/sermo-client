import React, { Component } from 'react'
import { connect } from 'react-redux'
import ClientForm from './ClientForm'
import ClientTable from './ClientTable'

class ClientsContainer extends Component {
  state = { formOpen: false }

  toggleForm = () => {
    this.setState((prevState) => ({
      formOpen: !prevState.formOpen
    }))
  }

  render() {
    let { creating, clients } = this.props
    return (
      <div>
        { creating ? <button>Creating...</button> : <button onClick={this.toggleForm}>{this.state.formOpen ? 'Cancel' : 'Add'}</button> }
        { this.state.formOpen && <ClientForm /> }
        <ClientTable clients={clients}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    clients: state.clients.clients,
    creating: state.clients.creating
  }
}

export default connect(mapStateToProps)(ClientsContainer)