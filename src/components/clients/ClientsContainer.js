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
        <div className='flex-container'>
          <h3>Clients</h3>
          { creating ? <button>Creating...</button> : <button onClick={this.toggleForm}>{this.state.formOpen ? 'Cancel' : 'Add'}</button> }
        </div>
        <div>
          { this.state.formOpen && <ClientForm /> }
        </div>
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