import React from 'react';
import Celebi from '../pokes/celebi.png';
import Chansey from '../pokes/chansey.png';
import Charmeleon from '../pokes/charmeleon.png';
import Ditto from '../pokes/ditto.png';
import Jumpluff from '../pokes/jumpluff.png';
import Ledyba from '../pokes/ledyba.png';
import Metapod from '../pokes/metapod.png';
import Pikachu from '../pokes/pikachu.png';
import Sableye from '../pokes/sableye.png';

function Objectives(props) {
  let { pokemon: { pokeOne, pokeTwo, pokeThree } } = props
  let { level } = props
  let showObjs = () => {
    let overlay = document.querySelector('#objList');
      overlay.classList.toggle('hiddenObjs');
  }
    let picOne = Pikachu;
    let picTwo = Celebi;
    let picThree = Chansey;
  if (level === 2) {
    picOne = Ditto;
    picTwo = Metapod;
    picThree = Charmeleon;
  }
  if (level === 3) {
    picOne = Sableye;
    picTwo = Ledyba;
    picThree = Jumpluff;
  }
  return (
    <div className='obj-background'>
          <button className='showButton' onClick={showObjs}>Show Objectives
          </button>
      <div className="hiddenObjs" id="objList">
        <ul className='list-of-objectives'>
            <li><img src={picOne} alt="" />{pokeOne}</li>
            <li><img src={picTwo} alt="" />{pokeTwo}</li>
            <li><img src={picThree} alt="" />{pokeThree}</li>
            <button className='closeObjectives' onClick={showObjs}>Close</button>
        </ul>
      </div>
    </div>
  )
}


export default Objectives