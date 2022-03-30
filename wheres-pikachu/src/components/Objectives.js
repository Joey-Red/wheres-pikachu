import React, { useState } from 'react';
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
  const [isHidden, setHidden] = useState("true");
  let {level } = props
  let showObjs = () => {
    setHidden(!isHidden)
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
      <div className={isHidden ? null : "hiddenObjs"} id="objList">
        <ul className='list-of-objectives'>
            <li><img src={picOne} alt="" />{props.pokemon.pokeOne}</li>
            <li><img src={picTwo} alt="" />{props.pokemon.pokeTwo}</li>
            <li><img src={picThree} alt="" />{props.pokemon.pokeThree}</li>
            <button className='closeObjectives' onClick={showObjs}>Close</button>
        </ul>
      </div>
    </div>
  )
}

export default Objectives