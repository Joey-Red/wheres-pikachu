import React from 'react'

function CapturedComponent(props) {
  console.log(props.value)
  return (
    <div>DIV</div>
  )
}

export default CapturedComponent