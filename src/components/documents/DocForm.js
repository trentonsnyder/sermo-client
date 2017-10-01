import React from 'react'
import { connect } from 'react-redux'
import Dropzone from 'react-dropzone'
import { uploadDocument } from '../../actions/documents'
import PlusSquare from 'react-icons/lib/fa/plus-square'

const DocForm = ({client, uploadDocument, creating}) => {

  const onDrop = (files) => {
    uploadDocument(files[0], client)
  }

  return (
    <Dropzone disabled={creating} onDropAccepted={onDrop} multiple={false} style={{textAlign: 'center', height: '200px', width: '200px', border: '1px solid black', borderRadius: '5px', cursor: 'pointer'}}>
      { creating ? <div className='loader'>Loading...</div> : <div style={{lineHeight: '200px'}}><PlusSquare size={90} /></div> }
    </Dropzone>
  )
}

export default connect(null, {uploadDocument})(DocForm)