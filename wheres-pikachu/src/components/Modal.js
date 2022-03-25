import React, { useState } from 'react'
import PokemonPic from '../img/PokemonPic.png'
import '../style.css';
function Modal() {
  let [cords, setCords] = useState([0,0]);

  let handleMouseClick = (e) => {
    setCords([e.clientX, e.clientY]);
    let scanBox = document.querySelector('.scanBox')
    scanBox.style.display="flex";
    // Maybe in the future set a timer so that it dissapears shortly
  }
  return (
  <>
      <div className='scanBox'
      style={{
        backgroundColor: 'orange',
        height: 17,
        width: 17,
        padding: '15px',
        position: 'absolute',
        left: cords[0],
        top: cords[1]
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