import React from 'react'

const TextArea = ({error, label, type, name, value, onChange}) => {
  return (
    <div>
      <label>{label}</label>
      <textarea name={name} value={value} onChange={onChange} style={{height: 'auto'}} />
      <div style={{position: 'relative'}}>
        { error && <span style={{color: 'red', position: 'absolute', bottom: '-5px'}}>{error}</span> }
      </div>
    </div>
  )
}

export default TextArea
