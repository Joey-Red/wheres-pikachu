import Score from "./Score";
import Objectives from "./Objectives";
import Header from "./Header";
import Modal from "./Modal";
function App() {
  return (
    <div className="App">
      <div className="header-bar">
        <Score />
        <Header />
      </div>
      <div className="modal-obj">
        <Modal/>
        <Objectives />
      </div>
    </div>
  );
}

export default App;
