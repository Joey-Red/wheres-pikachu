import React from 'react'
import PokemonPic from '../img/PokemonPic.png'
import '../style.css';
function Modal() {
  return (
    <div className='modal-container'>
      <div className="modal">
        <img src={PokemonPic} id="wwPic" alt="Pokemon" />
      </div>
    </div>
  )
}

export default Modal