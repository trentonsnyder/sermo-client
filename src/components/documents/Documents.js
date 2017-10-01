import React from 'react'
import { assignUrl } from '../../actions/documents'

const Documents = ({documents}) => {

  const renderDocs = () => {
    return documents.map( d => {
      return(
        <div key={d.id} style={{padding: '12px'}}>
          <p onClick={() => assignUrl(d)}>image {d.name || 'no name'}</p>
        </div>
      )
    })
  }

  return (
    <div style={{display: 'flex'}}>
      { renderDocs() }
    </div>
  )
}

export default Documents