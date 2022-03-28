import React, { useState } from 'react'

function Objectives() {
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
            <li>Pikachu</li>
            <li>Ho-Oh</li>
            <li>Flareon</li>
            <li>Pinsir</li>
            <li>Kyogre</li>
            <li>Haunter</li>
            <li>Tyranitar</li>
            <li>Seviper</li>
        </ul>
      </div>
    </div>
  )
}

export default Objectives