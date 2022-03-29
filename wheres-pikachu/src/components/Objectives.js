import React, { useState } from 'react';
// import Modal from './Modal';

function Objectives(props) {
  const [isHidden, setHidden] = useState("true")
  let showObjs = () => {
    setHidden(!isHidden)
  }
  return (
    <div className='obj-background'>
        <div className="small-grid">
          <p>Pokemon to Find:</p>
          <button className='showButton' onClick={showObjs}>Show
          </button>
        </div>
      <div className={isHidden ? "hiddenObjs" : null} id="objList">
        <ul className='list-of-objectives'>
            <li>{props.pokemon.pokeOne}</li>
            <li>{props.pokemon.pokeTwo}</li>
            <li>{props.pokemon.pokeThree}</li>
        </ul>
      </div>
    </div>
  )
}

export default Objectives