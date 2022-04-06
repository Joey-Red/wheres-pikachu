import React, { useState } from 'react'
import PokemonPic from './img/PokemonPic.png'
import '../style.css';
function Modal(props) {
  let [showMenu, setShowMenu] = useState(false);
  let timedClose = () => {
      setShowMenu(false)
  }
  let clickHandle = () => {
    let menu = document.querySelector('.selectMenu');
    menu.style.visibility="visible";
    setTimeout(timedClose, 10000);
    setShowMenu(!showMenu);
  }
  return (
  <div>
    <div className='modal-container'>
      <div className="modal">
        <img src={PokemonPic} id="wwPic" alt="Pokemon" onClick={clickHandle}/>
      </div>
    </div>
    
  </div>
  )
}

export default Modal