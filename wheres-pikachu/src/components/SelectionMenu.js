import React, { useState } from "react";
function SelectionMenu(props) {
  let [pokeFind, setPokeFind] = useState({
    pokeOne: ["Pikachu"], 
    pokeTwo: ["Celebi"],
    pokeThree: ["Flareon"]
  })
  return (
    <div 
    hidden={props.showMenu ? false : true}
    style={{
        position: "absolute",
        top: `${props.cordY}px`,
        left: `${props.cordX}px`,
      }}
    >
      <div className='subMenu' id="subMenuID" >
      <p>Whos That Pokemon?</p>
      <div className="buttonList">
        <button>{pokeFind.pokeOne}</button>
        <button>{pokeFind.pokeTwo}</button>
        <button>{pokeFind.pokeThree}</button>
      </div>
      </div>
    </div>
  )
}

export default SelectionMenu;
