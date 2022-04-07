import React, { useEffect } from 'react';
function CapturedMons(props) {
  let { capturedMons } = props
  console.log(capturedMons)
  let outputArray = [props.capturedMons];
  if (props.capturedMons.length === 0){
    return (
      <div>Nothing yet</div>
    )
  }
  if (capturedMons.includes('Pikachu')){
    outputArray.push(props.Pikachu);
  } else if (capturedMons.includes('Celebi')){
    outputArray.push(props.Celebi);
  } else if (capturedMons.includes('Chansey')){
    outputArray.push(props.Chansey);
  }
  const listItems = outputArray.map((mon) =>
  <div className='capChild'>{capturedMons}<img src={`${mon}`} alt='' /></div>);
  return (
    <>
      <div className='capContainer'>{listItems}</div>
    </>
  )
}
export default CapturedMons;