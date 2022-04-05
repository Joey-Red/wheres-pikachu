import pokeball from './img/pokeball.png';
import CapturedMons from './CapturedMons';
import React, { useState } from 'react';
let Success = (props) => {
  // let [pokes, setPokes] = useState([])
  let scanBox = document.querySelector('.scanBox');
  console.log(props);
  scanBox.style.backgroundImage=`url(${pokeball})`;
  scanBox.style.border="solid black 1px";
  let defCursor = () => {
  scanBox.style.border="dashed yellow 4px";
  scanBox.style.background="rgba(0, 0, 0, 0.3)";
  }
  setTimeout(defCursor, 3000);
  return (
    <CapturedMons pokemon={props}/>
  )
}

export default Success