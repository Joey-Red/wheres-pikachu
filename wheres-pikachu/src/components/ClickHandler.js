import React from 'react';
import PokemonPic from '../img/PokemonPic.png'
import '../style.css';
// class ClickHandler extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleMouseClick = this.handleMouseClick.bind(this);
//     this.state = { x: 0, y: 0 };
//   }
//   handleMouseClick = document.body.onclick = function(event) {
//     event = event || window.event;
//     var target = event.target || event.picVar,
//     rect = target.getBoundingClientRect(),
//     offsetX = event.clientX - rect.left,
//     offsetY = event.clientY - rect.top;
//     this.setState({
//       x: offsetX,
//       y: offsetY
//     });
//   };
  
//   render() {
//     return (
//       <div className="scanBox" style={{
//         backgroundColor: 'orange',
//         height: 17,
//         width: 17,
//         padding: '15px',
//         position: 'absolute',
//         left: this.state.x,
//         top: this.state.y
//       }}></div>
//     )
//   }
// }
// export default ClickHandler;

// import Modal from './Modal';
// class MouseTracker extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleMouseClick = this.handleMouseClick.bind(this);
//     this.state = { x: 0, y: 0 };
//   }

//   handleMouseClick(event, x, y) {
//     <Modal x={this.state.x} y={this.state.y}/>
//     this.setState({
//       x: event.clientX,
//       y: event.clientY
//     });
//   }

//   render() {
//     return (
//       <div className='modal-container'>
//         <div className="modal">
//           <img src={PokemonPic} id="wwPic" alt="Pokemon" onClick={this.handleMouseClick}/>
//         </div>
//     </div>
//     );
//   }
// }
// export default MouseTracker;


