import React, { useEffect } from 'react';
function CapturedMons(props) {
  // useEffect(() => {
  // }, [props])
  // if (props = {}){
  //   return null
  // } else {
  let pokemon = props.capturedMons;
  console.log(pokemon)
  // useEffect(() => {
  // console.log(props)
  // }, [pokemon]);
  let pokeList = pokemon.map((pokes) => 
  <li>{pokes}</li>
  );
  return (
    <>
      <ul>{pokeList}</ul>
    </>
  )
  }
// }
export default CapturedMons;