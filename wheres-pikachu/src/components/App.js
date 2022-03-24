import Score from "./Score";
import Objectives from "./Objectives";
import Header from "./Header";
import Modal from "./Modal";
// import ClickHandlerv3 from "./ClickHandlerv3";
function App() {
  
  return (
    <div className="App">
      {/* <ClickHandlerv3/> */}
      <div className="header-bar">
        <Score />
        <Header />
      </div>
      <div className="modal-obj">
        <Modal />
        <Objectives />
      </div>
    </div>
  );
}

export default App;
