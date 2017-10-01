import React from 'react'
import { connect } from 'react-redux'
import { goBack } from 'react-router-redux'
import { Link } from 'react-router-dom'
import TasksContainer from '../tasks/TasksContainer'
import DocumentsContainer from '../documents/DocumentsContainer'
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
      <div>
        <div className='section-header'>
          <div className='flex-container' style={{padding: '6px 6px 0px 6px'}}>
            <h2>{this.props.client.name}</h2>
            <button className='button-primary' onClick={() => this.props.dispatch(goBack())}>Back</button>
            <Link to={`/chat/${this.props.client.id}`}><button className='button-primary'>Chat</button></Link>
            <button className='button-primary' onClick={this.toggleEdit}>{this.state.edit ? 'Cancel' : 'Edit'}</button>
          </div>
        </div>
        { this.renderEdit() }
        <TasksContainer filterId={this.props.client.id} />
        <DocumentsContainer client={this.props.client} />
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