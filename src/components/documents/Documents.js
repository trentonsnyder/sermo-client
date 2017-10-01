import React from 'react'
import { assignUrl } from '../../actions/documents'
import FileO from 'react-icons/lib/fa/file-o'
import FileImageO from 'react-icons/lib/fa/file-image-o'
import FilePdfO from 'react-icons/lib/fa/file-pdf-o'
import FileExcelO from 'react-icons/lib/fa/file-excel-o'
import FileTextO from 'react-icons/lib/fa/file-text-o'
import TimesCircleO from 'react-icons/lib/fa/times-circle-o'

const Documents = ({documents, deleteMode, toggleMarkForDeletion, markedForDeletion}) => {

  const determineIcon = (d) => {
    const action = (d) => {
      deleteMode ? toggleMarkForDeletion(d) : assignUrl(d)
    }
    if (deleteMode && markedForDeletion.find(doc => doc.id === d.id)) {
      return <TimesCircleO size={90} color='red' onClick={() => action(d)} style={{cursor: 'pointer'}} />
    } else {
      switch(d.extension) {
        case 'image/jpeg':
          return <FileImageO size={90} color='#FD8D7a'  onClick={() => action(d)} style={{cursor: 'pointer'}} />
        case 'application/pdf':
          return <FilePdfO size={90} color='#C92F2F'  onClick={() => action(d)} style={{cursor: 'pointer'}} />
        case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
          return <FileExcelO size={90} color='#1ECF01'  onClick={() => action(d)} style={{cursor: 'pointer'}} />
        case 'text/plain':
          return <FileTextO size={90} color='#2F7696'  onClick={() => action(d)} style={{cursor: 'pointer'}} />
        default:
          return <FileO size={90} color='#2F7696'  onClick={() => action(d)} style={{cursor: 'pointer'}} />
      }
    }
  }

  const renderDocs = () => {
    return documents.map( d => {
      return(
        <div key={d.id} style={{margin: '0px 12px 0px 12px', textAlign: 'center', width: '150px'}}>
          {determineIcon(d) }
          <p style={styles.text}>{d.name || 'untitled'}</p>
        </div>
      )
    })
  }

  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      { renderDocs() }
    </div>
  )
}

const styles = {
  text: {
    height: '50px',
    lineHeight: '50px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '100%'
  }
}

export default Documents