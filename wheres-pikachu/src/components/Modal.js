import React from 'react'
import PokemonPic from '../img/PokemonPic.png'
import '../style.css'
function Modal() {
  // let el = document.getElementById("wwPic")
  // function showCoords(el) {
  // const rect = el.getBoundingClientRect();
  // console.log("left: " + rect.left + window.scrollX + "top: " + rect.top + window.scrollY)
  // return {
  //   left: rect.left + window.scrollX,
  //   top: rect.top + window.scrollY
  // };
  // }
  let clicked = (e) => {
    // let imgX = e.pageX;
    // let imgY = e.pageY;
    // console.log(imgX, imgY);
  }

  function getPosition(el) {
  var xPosition = 0;
  var yPosition = 0;
  while (el) {
    if (el.tagName === "BODY") {
      var xScrollPos = el.scrollLeft || document.documentElement.scrollLeft;
      var yScrollPos = el.scrollTop || document.documentElement.scrollTop;
      xPosition += (el.offsetLeft - xScrollPos + el.clientLeft);
      yPosition += (el.offsetTop - yScrollPos + el.clientTop);
    } else {
      xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
    }
    el = el.offsetParent;
  }
  return {
    x: xPosition,
    y: yPosition
    };
  }
  return (
    
    <div className='modal-container'>
      <div className="modal">
        <img src={PokemonPic} onClick={getPosition()} id="wwPic" alt="Pokemon" />
      </div>
    </div>
  )
}

export default Modal