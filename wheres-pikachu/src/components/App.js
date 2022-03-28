import Score from "./Score";
import Objectives from "./Objectives";
import Header from "./Header";
import Modal from "./Modal";
import '../style.css'
function App() {
  const moveCursor = (e)=> {
  let scanBox = document.querySelector('.scanBox')
  const mouseY = e.clientY;
  const mouseX = e.clientX;
  scanBox.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
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
