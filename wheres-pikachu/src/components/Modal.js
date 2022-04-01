import React, { useState, useRef } from 'react'
import PokemonPic from '../img/PokemonPic.png'
import '../style.css';
import SelectionMenu from './SelectionMenu';
function Modal(props) {
  let [cordX, setCordX] = useState([0]);
  let [cordY, setCordY] = useState([0]);
  let [width, setWidth] = useState([0]);
  let [height, setHeight] = useState([0]);
  let [showMenu, setShowMenu] = useState(false);
  let imgRef = useRef()
  let handleMouseClick = (e) => {
    let img = document.querySelector('#wwPic');
    let bounds = img.getBoundingClientRect();
    setWidth(imgRef.current.offsetWidth)
    setHeight(imgRef.current.offsetHeight)
    if (width - e.pageX) {
      setCordX(e.pageX - 35);
    }
    if (height - e.pageY) {
      setCordY(e.pageY - 35 - window.scrollY - bounds.top + 120);
    }
    setShowMenu(!showMenu);
  }
  // console.log(cordX, cordY)
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
    height={height}
    width={width}
    />
  </div>
  )
}

export default Modal

//May reuse some of this
// let handleMouseMove = (e) => {
//     const width = imgRef.current.offsetWidth;
//     const height = imgRef.current.offsetHeight;
//     let canvas = document.querySelector('#wwPic');
//     let rect = canvas.getBoundingClientRect();
//     setCords([(e.clientX - rect.left)/width, (e.clientY - rect.top)/height]);
//     // console.log("Height " + height/cords[0], "Width " + width/cords[1])
//   }