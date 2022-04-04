import React from 'react'
import CapturedComponent from './CapturedComponent';
function CapturedMons(props) {
  let { pokemon } = props
  
  return (
    <CapturedComponent pokemon={pokemon}/>
  )
}

export default CapturedMons