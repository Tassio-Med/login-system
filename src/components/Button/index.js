import React from 'react'

function Button({ Text, onClick, Type="button" }) {
  return (
    <div>
      <button type={Type} onClick={onClick}>
        {Text}
      </button>
    </div>
  )
}

export default Button