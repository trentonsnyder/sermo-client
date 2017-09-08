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
    return (
      <div>
        <button onClick={this.toggleForm}>{this.state.formOpen ? 'Close' : 'Add'}</button>
        { this.state.formOpen && <ClientForm /> }
        <ClientTable clients={this.props.clients}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({clients: state.clients.clients })

export default connect(mapStateToProps)(ClientsContainer)