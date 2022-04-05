import React, { useState, useRef } from 'react'
import PokemonPic from './img/PokemonPic.png'
import '../style.css';
import SelectionMenu from './SelectionMenu';
import CapturedMons from './CapturedMons';
function Modal(props) {
  let [cordX, setCordX] = useState([0]);
  let [cordY, setCordY] = useState([0]);
  let [localX, setLocalX] = useState([0]);
  let [localY, setLocalY] = useState([0]);
  let [showMenu, setShowMenu] = useState(false);
  let [caughtMons, setCaughtMons] = ([])
  let imgRef = useRef()
  let timedClose = () => {
      setShowMenu(false)
  }
  let handleMouseClick = (e) => {
    let img = document.querySelector('#wwPic');
    let bounds = img.getBoundingClientRect();
    let menu = document.querySelector('.selectMenu');
    menu.style.visibility="visible";
    let pos_x = e.pageX;
    let pos_y = e.pageY;
    let viewportX = e.clientX;
    let viewportY = e.clientY;
    setLocalX(viewportX - bounds.left);
    setLocalY(viewportY - bounds.top);
    setCordX(pos_x);
    setCordY(pos_y);
    setShowMenu(!showMenu);
    setTimeout(timedClose, 10000)
  }
  return (
  <div>
    <div className='modal-container'>
      <div className="modal" ref={imgRef}>
        <img src={PokemonPic} id="wwPic" alt="Pokemon" onClick={handleMouseClick}/>
      </div>
    </div>
    <SelectionMenu
    pokemon={props.pokemon}
    cordY={cordY}
    cordX={cordX}
    showMenu={showMenu}
    localX={localX}
    localY={localY}
    />
    <CapturedMons caughtMons={caughtMons}/>
  </div>
  )
}

export default Modal