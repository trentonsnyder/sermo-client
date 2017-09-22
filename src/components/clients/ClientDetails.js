import React from 'react'
import { connect } from 'react-redux'
import { goBack } from 'react-router-redux'
import TasksContainer from '../tasks/TasksContainer'
import ClientEdit from './ClientEdit'

class ClientDetails extends React.Component {
  state = { edit: false }
  
  toggleEdit = () => this.setState((prevState) => ({edit: !prevState.edit }))

  renderEdit = () => {
    if (this.state.edit) {
      return(
        <ClientEdit client={this.props.client} toggleEdit={this.toggleEdit} />
      )
    } else {
      return(
        <div>
          <p>{this.props.client.name}</p>
          <p>{this.props.client.phone_number}</p>
          <p>{this.props.client.last_seen}</p>
        </div>
      )
    }
  }

  render() {
    return (
      <div style={{marginTop: '12px'}}>
        <div className='flex-container'>
          <button onClick={() => this.props.dispatch(goBack())}>Back</button>
          <button onClick={this.toggleEdit}>{this.state.edit ? 'Cancel' : 'Edit'}</button>
        </div>
        { this.renderEdit() }
        <TasksContainer filterId={this.props.client.id} />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    client: state.clients.clients.find(c => c.id.toString() === props.match.params.id),
    updating: state.clients.updating,
    tasks: state.tasks.tasks.filter(t => t.client.id.toString() === props.match.params.id),
  }
}

export default connect(mapStateToProps)(ClientDetails)