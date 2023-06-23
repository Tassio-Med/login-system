import React from 'react'

function Input({ Type, Placeholder, Value, onChange }) {
  return (
    <div>
      <input
        type={Type}
        placeholder={Placeholder}
        value={Value}
        onChange={onChange}
      />
    </div>
  )
}

export default Input