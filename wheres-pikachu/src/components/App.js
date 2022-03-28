import Score from "./Score";
import Objectives from "./Objectives";
import Header from "./Header";
import Modal from "./Modal";
import '../style.css'
function App() {
  let headerBar = document.querySelector('.header-bar');
  const moveCursor = (e) => {
  let img = document.querySelector('#wwPic');
  var bounds = img.getBoundingClientRect();
  let scanBox = document.querySelector('.scanBox')
  let mouseX = e.pageX - 35;
  let mouseY = e.pageY - 35 -  bounds.top - window.scrollY + 120;
  scanBox.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  // console.log('sbCords: ' + mouseX, mouseY)
}
  return (
    <div className="App" onMouseMove={moveCursor}>
      <div className="scanBox"></div>
      <div className="header-bar">
        <Score />
        <Header />
        <Objectives />
      </div>
      <div className="modal-obj">
        <Modal/>
      </div>
    </div>
  );
}

export default App;
