import React from 'react';
function CapturedMons(props) {
  let { capturedMons } = props
  console.log(capturedMons)
  let picture = {};
  // if (capturedMons.includes('Pikachu')){
  //   picture = props.Pikachu
  // } else if (capturedMons.includes('Celebi')){
  //   picture = props.Celebi
  // }
  return (
    <>
      <p>{capturedMons}</p>
      <img src={picture} alt='caught' />
      {/* <img src={props.Pikachu} alt='why' /> */}
    </>
  )
}
export default CapturedMons;