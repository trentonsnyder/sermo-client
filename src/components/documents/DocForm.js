import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dropzone from 'react-dropzone'
import { uploadDocument } from '../../actions/documents'

class DocForm extends Component {

  onDrop = (files) => {
    console.log(files[0])
    this.props.uploadDocument(files[0], this.props.client)
  }

  render() {
    return (
      <Dropzone onDropAccepted={this.onDrop} multiple={false}>
        <div>Drop a file here</div>
      </Dropzone>
    )
  }
}

export default connect(null, {uploadDocument})(DocForm)