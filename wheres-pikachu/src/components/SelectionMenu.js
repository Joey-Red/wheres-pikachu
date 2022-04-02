import React from "react";
import communicate from "./Communicate";
function SelectionMenu(props) {
  const {cordX, cordY} = props;
  const {pokeOne, pokeTwo, pokeThree} = props.pokemon;
  const {height, width, showMenu} = props;
  let menu = document.querySelector('.selectMenu');
  // if (props.showMenu === false){
  //   console.log("AH")
  // }
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
          <button onClick={() => communicate(cordX, cordY, pokeOne, height, width)}>{pokeOne}</button>
          <button onClick={() => communicate(cordX, cordY, pokeTwo, height, width)}>{pokeTwo}</button>
          <button onClick={() =>
            communicate(cordX, cordY, pokeThree, height, width)}>{pokeThree}</button>
        </div>
      </div>
    </div>
  )
}

export default SelectionMenu;
