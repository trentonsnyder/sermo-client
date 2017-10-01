import React, { Component } from 'react'
import { connect } from 'react-redux'
import DocForm from './DocForm'
import Documents from './Documents'
import DeleteActions from './DeleteActions'
import { getDocuments } from '../../actions/documents'
import { deleteDocuments } from '../../actions/documents'

class DocumentsContainer extends Component {
  state = {
    deleteMode: false,
    markedForDeletion: []
  }

  componentDidMount() {
    this.props.getDocuments(this.props.client)
  }

  toggleDelete = () => {
    this.setState((prevState) => ({
      deleteMode: !prevState.deleteMode,
      markedForDeletion: []
    }))
  }

  toggleMarkForDeletion = (d) => {
    const check = this.state.markedForDeletion.filter(doc => doc.id === d.id)
    if (check.length === 0) {
      this.setState((prevState) => ({
        markedForDeletion: [...prevState.markedForDeletion, d]
      }))
    } else {
      this.setState((prevState) => ({
        markedForDeletion: prevState.markedForDeletion.filter(doc => doc.id !== d.id)
      }))
    }
  }

  deleteDocuments = () => {
    this.props.deleteDocuments(this.state.markedForDeletion, this.props.client)
  }

  render() {
    let { creating, client } = this.props
    return (
      <div style={{marginTop: '20px'}}>
        <div className='section-header'>
          <div className='flex-container'>
            <h3>Documents</h3>
            <DeleteActions 
              deleteMode={this.state.deleteMode}
              toggleDelete={this.toggleDelete}
              deleteDocuments={this.deleteDocuments}
            />
          </div>
        </div>
        <div style={{display: 'flex', marginTop: '25px'}}>
          <DocForm client={client} creating={creating} />
          <Documents 
            client={client} 
            documents={this.props.documents} 
            toggleMarkForDeletion={this.toggleMarkForDeletion} 
            deleteMode={this.state.deleteMode} 
            markedForDeletion={this.state.markedForDeletion}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    documents: state.documents.documents,
    creating: state.documents.creating,
    deleting: state.documents.deleting
  }
}

export default connect(mapStateToProps, {getDocuments, deleteDocuments})(DocumentsContainer)