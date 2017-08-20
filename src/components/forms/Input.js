import React from 'react'

const Input = ({error, label, type, name, value, onChange}) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} />
      <div style={{position: 'relative'}}>
        { error && <span style={{color: 'red', position: 'absolute', bottom: '-5px'}}>{error}</span> }
      </div>
    </div>
  )
}

export default Input
