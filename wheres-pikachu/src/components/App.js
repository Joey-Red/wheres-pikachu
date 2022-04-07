import Score from "./Score";
import React, { useState, useEffect } from "react";
import Objectives from "./Objectives";
import Header from "./Header";
import Modal from "./Modal";
import '../style.css';
import CapturedMons from "./CapturedMons";
import success from "./success";
import failure from './failure';
import Celebi from '../pokes/celebi.png';
import Chansey from '../pokes/chansey.png';
import Charmeleon from '../pokes/charmeleon.png';
import Ditto from '../pokes/ditto.png';
import Jumpluff from '../pokes/jumpluff.png';
import Ledyba from '../pokes/ledyba.png';
import Metapod from '../pokes/metapod.png';
import Pikachu from '../pokes/pikachu.png';
import Sableye from '../pokes/sableye.png';

function App() {
  let [cordX, setCordX] = useState([0]);
  let [cordY, setCordY] = useState([0]);
  let [localX, setLocalX] = useState([0]);
  let [localY, setLocalY] = useState([0]);
  let [level, setLevel] = useState(1);
  let [showMenu, setShowMenu] = useState(false);
  let [capturedMons, setCapturedMons] = useState([]);
  let [points, setPoints] = useState(0);
  function SelectionMenu(props) {
  const {cordX, cordY, localX, localY} = props;
  const {pokeOne, pokeTwo, pokeThree} = props.pokemon;
  const {height, width, showMenu} = props;
  let closeMenu = () => {
  setShowMenu(false);
  }
  
  return (
    <div className="selectMenu"
    onClick={closeMenu}
    hidden={showMenu ? false : true}
    style={{
        position: "absolute",
        top: `${cordY}px`,
        left: `${cordX}px`,
      }}
    >
      <div className='subMenu' id="subMenuID" >
        <p>Whos That Pokemon?</p>
        <div className="buttonList">
          <button onClick={() => communicate(localX, localY, pokeOne, height, width)}>{pokeOne}</button>
          <button onClick={() => communicate(localX, localY, pokeTwo, height, width)}>{pokeTwo}</button>
          <button onClick={() => communicate(localX, localY, pokeThree, height, width)}>{pokeThree}</button>
        </div>
      </div>
    </div>
  )
}
  let [pokemon, setPokemon] = useState({
    pokeOne: "Pikachu", 
    pokeTwo: "Celebi",
    pokeThree: "Chansey"
  });
  let menu = document.querySelector('.selectMenu');
  let handleMouseClick = (e) => {
    let img = document.querySelector('#wwPic');
    let bounds = img.getBoundingClientRect();
    let pos_x = e.pageX;
    let pos_y = e.pageY;
    let viewportX = e.clientX;
    let viewportY = e.clientY;
    setLocalX(viewportX - bounds.left);
    setLocalY(viewportY - bounds.top);
    setCordX(pos_x);
    setCordY(pos_y);
    menu.style.visibility="visible";
    setTimeout(timedClose, 10000);
    setShowMenu(!showMenu);
  }
  
  let communicate = (localX, localY, pokemon) => {
  let canvas = document.querySelector('#wwPic');
  let rect = canvas.getBoundingClientRect();
  let mutatedX = (((localX / rect.width) * 100)).toFixed(2);
  let mutatedY = (((localY / rect.height) * 100)).toFixed(2);
  // console.log(mutatedX, mutatedY)
  //Set One
  if (pokemon === 'Pikachu' &&
  mutatedX >= 5 && mutatedX <= 8 && 
  mutatedY >= 80 && mutatedY <= 88){
    success(pokemon);
    setCapturedMons(capturedMons + pokemon);
    setPoints(points + 100);
  } else if (pokemon === 'Celebi' &&
  mutatedX >= 26 && mutatedX <= 30 && 
  mutatedY >= 38 && mutatedY <= 44){
    success(pokemon);
    setCapturedMons(capturedMons + pokemon);
    setPoints(points + 100);
  } else if (pokemon === 'Chansey' &&
  mutatedX >= 76 && mutatedX <= 81 && 
  mutatedY >= 40  && mutatedY <= 48){
    success(pokemon);
    setCapturedMons(capturedMons + pokemon);
    setPoints(points + 100);
  }  //Set Two
  else if (pokemon === 'Ditto' &&
  mutatedX >= 0.5 && mutatedX <= 6 && 
  mutatedY >= 59  && mutatedY <= 62){
    success(pokemon);
    setCapturedMons(capturedMons + pokemon);
    setPoints(points + 100);
  } else if (pokemon === 'Metapod' &&
  mutatedX >= 0.5 && mutatedX <= 3 && 
  mutatedY >= 60  && mutatedY <= 64){
    success(pokemon);
    setCapturedMons(capturedMons + pokemon);
    setPoints(points + 100);
  } else if (pokemon === 'Charmeleon' &&
  mutatedX >= 84 && mutatedX <= 87 && 
  mutatedY >= 46  && mutatedY <= 52.5){
    success(pokemon);
    setCapturedMons(capturedMons + pokemon);
    setPoints(points + 100);
  } //Set Three
  else if (pokemon === 'Sableye' &&
  mutatedX >= 12 && mutatedX <= 14.5 && 
  mutatedY >= 61.5  && mutatedY <= 66){
    success(pokemon);
    setCapturedMons(capturedMons + pokemon);
    setPoints(points + 100);
  } else if (pokemon === 'Ledyba' &&
  mutatedX >= 14.5 && mutatedX <= 17.5 && 
  mutatedY >= 0.75  && mutatedY <= 5.5){
    success(pokemon);
    setCapturedMons(capturedMons + pokemon);
    setPoints(points + 100);
  } else if (pokemon === 'Jumpluff' &&
  mutatedX >= 50 && mutatedX <= 53 && 
  mutatedY >= 85  && mutatedY <= 89){
    success(pokemon);
    setCapturedMons(capturedMons + pokemon);
    setPoints(points + 100);
  } else {
    failure()
  }
}
//End communicate func
  let timedClose = () => {
      setShowMenu(false)
  }
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
      <SelectionMenu
    pokemon={pokemon}
    localX={localX}
    localY={localY}
    cordX={cordX}
    cordY={cordY}
    showMenu={showMenu}
    />
      <div className="scanBox"></div>
      <div className="header-bar">
        <Score points={points}/>
        <Header />
        <Objectives pokemon={pokemon} level={level}
        Celebi={Celebi} Chansey={Chansey} Charmeleon={Charmeleon} Ditto={Ditto} Jumpluff={Jumpluff} Ledyba={Ledyba} Metapod={Metapod} Pikachu={Pikachu} Sableye={Sableye}
/>
          <button className="levelButton" onClick={levelChange}>Next Set</button>
      </div>
      <div className="modal-obj" onClick={handleMouseClick}>
        
        <Modal pokemon={pokemon} />
      </div>
      <div className="captured">
        <div className="capHeader">Found Pokemon</div>
        <CapturedMons capturedMons={capturedMons} Celebi={Celebi} Chansey={Chansey} Charmeleon={Charmeleon} Ditto={Ditto} Jumpluff={Jumpluff} Ledyba={Ledyba} Metapod={Metapod} Pikachu={Pikachu} Sableye={Sableye}/>
      </div>
    </div>
    
  );
}

export default App;
