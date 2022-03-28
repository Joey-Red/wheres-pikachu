import React, { useState, useRef } from 'react'
import PokemonPic from '../img/PokemonPic.png'
import '../style.css';
function Modal() {
  let [cords, setCords] = useState([0,0]);
  let imgRef = useRef()
  // let handleMouseClick = (e) => {
  //   setCords([e.clientX, e.clientY]);
  //   console.log(cords)
  //   let scanBox = document.querySelector('.scanBox')
  //   scanBox.style.display="flex";
  //   // Maybe in the future set a timer so that it dissapears shortly
  // }
  let handleMouseMove = (e, x, y) => {
    let canvas = document.querySelector('#wwPic');
    let rect = canvas.getBoundingClientRect();
    setCords([e.clientX - rect.left, e.clientY - rect.top]);
    const width = imgRef.current.offsetWidth;
    const height = imgRef.current.offsetHeight;
    console.log("Height " + height/cords[0], "Width " + width/cords[1])
    // let headerBar =+ document.querySelector('.header-bar').clientHeight;
    // setSBCords([e.clientX += e.offsetTop  || 0, e.clientY += e.offsetLeft || 0]);
    
    // let relX = cords[0] / width;
    // let relY = (cords[1] - headerBar) / height;
    // get cords from firestore
    // console.log('relX: ' + relX, 'relY: ' + relY);
  }
  
  console.log(cords)
  return (
  <div onMouseMove={handleMouseMove}>
      {/* <div className='scanBox'
      style={{
        height: 20,
        width: 20,
        padding: '20px',
        position: 'absolute',
        left: cords[0] - 35,
        top: cords[1] + 72
      }}></div> */}
    <div className='modal-container'>
      <div className="modal" ref={imgRef}>
        <img src={PokemonPic} id="wwPic" alt="Pokemon"/>
      </div>
    </div>
  </div>
  )
}

export default Modal


