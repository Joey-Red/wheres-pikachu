import React, { useState } from 'react'
import PokemonPic from '../img/PokemonPic.png'
import '../style.css';
function Modal() {
  let [cords, setCords] = useState([0,0]);

  // let handleMouseClick = (e) => {
  //   setCords([e.clientX, e.clientY]);
  //   console.log(cords)
  //   let scanBox = document.querySelector('.scanBox')
  //   scanBox.style.display="flex";
  //   // Maybe in the future set a timer so that it dissapears shortly
  // }
  
  let handleMouseClick = (e) => {
    setCords([e.clientX += e.offsetTop  || 0, e.clientY += e.offsetLeft || 0], console.log(cords));
    let scanBox = document.querySelector('.scanBox')
    scanBox.style.display="flex";
  }
  return (
  <>
      <div className='scanBox'
      style={{
        height: 20,
        width: 20,
        padding: '20px',
        position: 'absolute',
        left: cords[0] - 40,
        top: cords[1] - 40
      }}></div>
    <div className='modal-container'>
      <div className="modal" onClick={handleMouseClick}>
        <img src={PokemonPic} id="wwPic" alt="Pokemon"/>
      </div>
    </div>
  </>
  )
}

export default Modal