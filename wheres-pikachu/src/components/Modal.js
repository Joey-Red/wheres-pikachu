import React from 'react'
import PokemonPic from '../img/PokemonPic.png'
import '../style.css'
function Modal() {
  // let clicked = (e) => {
  //   let imgX = e.pageX;
  //   let imgY = e.pageY;
  //   console.log(imgX, imgY);
  // }
  // function getPosition(event) {
  //     console.log("X: " + event.clientX + "Y: " + event.clientY);
  //   }
  // document.getElementById('wwPic').onclick = function clickEvent(e) {
  //     // e = Mouse click event.
  //     var rect = e.target.getBoundingClientRect();
  //     var x = e.clientX - rect.left; //x position within the element.
  //     var y = e.clientY - rect.top;  //y position within the element.
  //     console.log("Left? : " + x + " ; Top? : " + y + ".");
  //   }

  // function getCords(e){
  // const x = e.offsetX;
  // const y = e.offsetY;
  // console.log(x, y)
  // }
  let picVar = document.getElementById('wwPic');
  // function getCords(e){
  //   let x = e.pageX - this.offsetLeft - picVar.offset().left;
  //   let y = e.pageY - this.offsetTop - picVar.offset().top;
  //   console.log(x,y)
  // }
  document.body.onclick = function(e) {
    e = e || window.event;
    var target = e.target || e.picVar,
        rect = target.getBoundingClientRect(),
        offsetX = e.clientX - rect.left,
        offsetY = e.clientY - rect.top;

    console.log([offsetX, offsetY]);
};

  return (
    <div className='modal-container'>
      <div className="modal">
        <img src={PokemonPic} id="wwPic" alt="Pokemon" />
      </div>
    </div>
  )
}

export default Modal