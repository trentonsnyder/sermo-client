import React, { Component } from 'react'
import { connect } from 'react-redux'
import DocForm from './DocForm'
import Documents from './Documents'
import { getDocuments } from '../../actions/documents'

class DocumentsContainer extends Component {
  state = { formOpen: false }

  componentDidMount() {
    this.props.getDocuments(this.props.client)
  }

  toggleForm = () => {
    this.setState((prevState) => ({
      formOpen: !prevState.formOpen
    }))
  }

  render() {
    let { creating, client } = this.props
    return (
      <div style={{marginTop: '20px'}}>
        <div className='section-header'>
          <div className='flex-container'>
            <h3>Documents</h3>
            { creating ? <button>Creating...</button> : <button  className='button-primary' onClick={this.toggleForm}>{this.state.formOpen ? 'Cancel' : 'Add'}</button> }
          </div>
        </div>
        <div>
          { this.state.formOpen && <DocForm client={client} /> }
        </div>
        <Documents client={client} documents={this.props.documents} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    documents: state.documents.documents,
    creating: state.documents.creating
  }
}

export default connect(mapStateToProps, {getDocuments})(DocumentsContainer)