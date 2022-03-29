import React from "react";
import communicate from "./Communicate";
function SelectionMenu(props) {
  const {cordX, cordY} = props;
  const {pokeOne, pokeTwo, pokeThree} = props.pokemon;
  return (
    <div 
    hidden={props.showMenu ? false : true}
    style={{
        position: "absolute",
        top: `${cordY}px`,
        left: `${cordX}px`,
      }}
    >
      <div className='subMenu' id="subMenuID" >
      <p>Whos That Pokemon?</p>
      <div className="buttonList">
        <button onClick={communicate.bind(cordX, cordY, pokeOne)}>{pokeOne}</button>
        <button onClick={communicate.bind(cordX, cordY, pokeTwo)}>{pokeTwo}</button>
        <button onClick={communicate.bind(cordX, cordY, pokeThree)}>{pokeThree}</button>
      </div>
      </div>
    </div>
  )
}

export default SelectionMenu;
