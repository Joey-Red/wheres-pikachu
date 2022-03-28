import React, { useState, useRef } from 'react'
import PokemonPic from '../img/PokemonPic.png'
import '../style.css';
import SelectionMenu from './SelectionMenu';
function Modal() {
  let [cordX, setCordX] = useState([0]);
  let [cordY, setCordY] = useState([0]);
  // let [checkCords, setCheckCords] = useState([0,0]);
  let [pokemon, setPokemon] = (['Pikachu', 'Celebi', 'Flareon']);
  let [showMenu, setShowMenu] = useState(false);
  let imgRef = useRef()
  let handleMouseClick = (e) => {
    if (imgRef.current.offsetWidth - e.pageX) {
      setCordX(e.pageX - 35);
    }
    if (imgRef.current.offsetHeight - e.pageY) {
      setCordY(e.pageY - 35);
    }
    setShowMenu(!showMenu);
  }
  let handleMouseMove = (e) => {
    // const width = imgRef.current.offsetWidth;
    // const height = imgRef.current.offsetHeight;
    // let canvas = document.querySelector('#wwPic');
    // let rect = canvas.getBoundingClientRect();
    // setCords([(e.clientX - rect.left)/width, (e.clientY - rect.top)/height]);
    // // console.log("Height " + height/cords[0], "Width " + width/cords[1])
  }
  return (
  <div>
    <div className='modal-container' onMouseMove={handleMouseMove}>
      <div className="modal" ref={imgRef}>
        <img src={PokemonPic} id="wwPic" alt="Pokemon" onClick={handleMouseClick}/>
      </div>
    </div>
    <SelectionMenu
    pokemon={pokemon}
    cordY={cordY}
    cordX={cordX}
    showMenu={showMenu}
    />
  </div>
  )
}

export default Modal


