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
            {/* <li>{props.pokemon[0]}</li>
            <li>{props.pokemon[1]}</li>
            <li>{props.pokemon[2]}</li> */}
            <li>Pikachu</li>
            <li>Celebi</li>
            <li>Flareon</li>
        </ul>
      </div>
    </div>
  )
}

export default Objectives