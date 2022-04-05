import Score from "./Score";
import React, { useState, useEffect } from "react";
import Objectives from "./Objectives";
import Header from "./Header";
import Modal from "./Modal";
import '../style.css';
import CapturedMons from "./CapturedMons";
function App() {
  let [level, setLevel] = useState(1)
  let [pokemon, setPokemon] = useState({
    pokeOne: "Pikachu", 
    pokeTwo: "Celebi",
    pokeThree: "Chansey"
  });
  
  useEffect(() => {
    if (level === 1) {
      setPokemon({
      pokeOne: "Pikachu", 
      pokeTwo: "Celebi",
      pokeThree: "Chansey"
  });
    }
    if (level === 2) {
      setPokemon({
      pokeOne: "Ditto",
      pokeTwo: "Metapod",
      pokeThree: "Charmeleon"
    })
    }
    if (level === 3) {
      setPokemon({
      pokeOne: "Sableye",
      pokeTwo: "Ledyba",
      pokeThree: "Jumpluff"
    })
    }
  }, [level]);

  let levelChange = () => {
    let overlay = document.querySelector('#objList');
    if (overlay.classList.contains('hiddenObjs')){
      overlay.classList.toggle('hiddenObjs');
    }
    if (level === 3){
      setLevel(1)
    } else {
      setLevel(level + 1);
    }
  }
  let scanBox = document.querySelector('.scanBox');
  const moveCursor = (e) => {
  let img = document.querySelector('#wwPic');
  let bounds = img.getBoundingClientRect();
  let mouseX = e.pageX - 35;
  let mouseY = e.pageY - 35 - bounds.top - window.scrollY + 120;
  scanBox.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  }
  return (
    <div className="App" onMouseMove={moveCursor}>
      <div className="scanBox"></div>
      <div className="header-bar">
        <Score />
        <Header />
        <Objectives pokemon={pokemon} level={level}/>
          <button className="levelButton" onClick={levelChange}>Next Set</button>
      </div>
      <div className="modal-obj">
        <Modal pokemon={pokemon}/>
      </div>
      <div className="captured">
        <div>Captured</div>
        {/* <CapturedMons /> */}
      </div>
    </div>
  );
}

export default App;
