import React from "react";
import communicate from "./App";
function SelectionMenu(props) {
  const {cordX, cordY, localX, localY} = props;
  const {pokeOne, pokeTwo, pokeThree} = props.pokemon;
  const {height, width, showMenu} = props;
  let menu = document.querySelector('.selectMenu');
  let closeMenu = () => {
    menu.style.visibility="hidden";
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
          <button onClick={() =>
            communicate(localX, localY, pokeThree, height, width)}>{pokeThree}</button>
        </div>
      </div>
    </div>
  )
}

export default SelectionMenu;
