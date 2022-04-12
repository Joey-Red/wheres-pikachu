import Score from "./Score";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { db } from "../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import Objectives from "./Objectives";
import Header from "./Header";
import Modal from "./Modal";
import "../style.css";
import CapturedMons from "./CapturedMons";
import success from "./success";
import failure from "./failure";
import Celebi from "../pokes/celebi.png";
import Blissey from "../pokes/blissey.png";
import Charmeleon from "../pokes/charmeleon.png";
import Ditto from "../pokes/ditto.png";
import Jumpluff from "../pokes/jumpluff.png";
import Ledyba from "../pokes/ledyba.png";
import Metapod from "../pokes/metapod.png";
import Pikachu from "../pokes/pikachu.png";
import Sableye from "../pokes/sableye.png";
import masterball from "./img/masterball.jpg";

function App() {
  let [cordX, setCordX] = useState([0]);
  let [cordY, setCordY] = useState([0]);
  let [localX, setLocalX] = useState([0]);
  let [localY, setLocalY] = useState([0]);
  let [level, setLevel] = useState(1);
  let [showMenu, setShowMenu] = useState(false);
  let [capturedMons, setCapturedMons] = useState([]);
  let [points, setPoints] = useState(0);
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState("");
  const usersCollectionRef = collection(db, "users");
  const createUser = async () => {
    let button = document.querySelector(".createButton");
    button.remove();
    if (newName === "") {
      await addDoc(usersCollectionRef, { name: "Anon" });
    alert(`Thanks for playing Anon! You've been added to the leaderboard.`)
    } else {
      await addDoc(usersCollectionRef, { name: newName });
    alert(`Thanks for playing ${newName}! You've been added to the leaderboard.`)
    }
  };
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);
  useEffect(() => {
    if (
      capturedMons.includes("Pikachu") &&
      capturedMons.includes("Celebi") &&
      capturedMons.includes("Blissey")
    ) {
      setLevel(2);
    }
    if (
      capturedMons.includes("Pikachu") &&
      capturedMons.includes("Celebi") &&
      capturedMons.includes("Blissey") &&
      capturedMons.includes("Ditto") &&
      capturedMons.includes("Metapod") &&
      capturedMons.includes("Charmeleon")
    ) {
      setLevel(3);
    }
  }, [capturedMons]);
  let overlay = document.querySelector("#objList");
  useEffect(() => {
    if (level !== 1) {
      overlay.classList.toggle("hiddenObjs");
    }
  }, [level]);

  function SelectionMenu(props) {
    const { cordX, cordY, localX, localY } = props;
    const { pokeOne, pokeTwo, pokeThree } = props.pokemon;
    const { height, width, showMenu } = props;
    let closeMenu = () => {
      setShowMenu(false);
    };

    return (
      <div
        className="selectMenu"
        onClick={closeMenu}
        hidden={showMenu ? false : true}
        style={{
          position: "absolute",
          top: `${cordY}px`,
          left: `${cordX}px`,
        }}
      >
        <div className="subMenu" id="subMenuID">
          <p>Whos That Pokemon?</p>
          <div className="buttonList">
            <button
              onClick={() =>
                communicate(localX, localY, pokeOne, height, width)
              }
            >
              {pokeOne}
            </button>
            <button
              onClick={() =>
                communicate(localX, localY, pokeTwo, height, width)
              }
            >
              {pokeTwo}
            </button>
            <button
              onClick={() =>
                communicate(localX, localY, pokeThree, height, width)
              }
            >
              {pokeThree}
            </button>
          </div>
        </div>
      </div>
    );
  }
  let [pokemon, setPokemon] = useState({
    pokeOne: "Pikachu",
    pokeTwo: "Celebi",
    pokeThree: "Blissey",
  });
  let menu = document.querySelector(".selectMenu");
  let handleMouseClick = (e) => {
    let img = document.querySelector("#wwPic");
    let bounds = img.getBoundingClientRect();
    let pos_x = e.pageX;
    let pos_y = e.pageY;
    let viewportX = e.clientX;
    let viewportY = e.clientY;
    setLocalX(viewportX - bounds.left);
    setLocalY(viewportY - bounds.top);
    setCordX(pos_x);
    setCordY(pos_y);
    menu.style.visibility = "visible";
    setTimeout(timedClose, 10000);
    setShowMenu(!showMenu);
  };
  let accessArray = [];
  const cordsCollectionRef = collection(db, "cords");
  const checkFirebasedb = async () => {
    const data = await getDocs(cordsCollectionRef);
    accessArray =
      data.docs[0]._document.data.value.mapValue.fields.pikachu.arrayValue
        .values;
  };
  let communicate = async (localX, localY, pokemon) => {
    await checkFirebasedb(pokemon);
    let canvas = document.querySelector("#wwPic");
    let rect = canvas.getBoundingClientRect();
    let mutatedX = ((localX / rect.width) * 100).toFixed(2);
    let mutatedY = ((localY / rect.height) * 100).toFixed(2);
    //Set One'
    if (!capturedMons.includes(pokemon)) {
      if (
        pokemon === "Pikachu" &&
        mutatedX >= accessArray[0].integerValue &&
        mutatedX <= accessArray[1].integerValue &&
        mutatedY >= accessArray[2].integerValue &&
        mutatedY <= accessArray[3].integerValue
      ) {
        success(pokemon);
        setCapturedMons(capturedMons + pokemon);
        setPoints(points + 1000);
      } else if (
        pokemon === "Celebi" &&
        mutatedX >= accessArray[4].integerValue &&
        mutatedX <= accessArray[5].integerValue &&
        mutatedY >= accessArray[6].integerValue &&
        mutatedY <= accessArray[7].integerValue
      ) {
        success(pokemon);
        setCapturedMons(capturedMons + pokemon);
        setPoints(points + 1000);
      } else if (
        pokemon === "Blissey" &&
        mutatedX >= accessArray[8].integerValue &&
        mutatedX <= accessArray[9].integerValue &&
        mutatedY >= accessArray[10].integerValue &&
        mutatedY <= accessArray[11].integerValue
      ) {
        success(pokemon);
        setCapturedMons(capturedMons + pokemon);
        setPoints(points + 1000);
      } //Set Two
      else if (
        pokemon === "Ditto" &&
        mutatedX >= accessArray[12].integerValue &&
        mutatedX <= accessArray[13].integerValue &&
        mutatedY >= accessArray[14].integerValue &&
        mutatedY <= accessArray[15].integerValue
      ) {
        success(pokemon);
        setCapturedMons(capturedMons + pokemon);
        setPoints(points + 1000);
      } else if (
        pokemon === "Metapod" &&
        mutatedX >= accessArray[16].integerValue &&
        mutatedX <= accessArray[17].integerValue &&
        mutatedY >= accessArray[18].integerValue &&
        mutatedY <= accessArray[19].integerValue
      ) {
        success(pokemon);
        setCapturedMons(capturedMons + pokemon);
        setPoints(points + 1000);
      } else if (
        pokemon === "Charmeleon" &&
        mutatedX >= accessArray[20].integerValue &&
        mutatedX <= accessArray[21].integerValue &&
        mutatedY >= accessArray[22].integerValue &&
        mutatedY <= accessArray[23].integerValue
      ) {
        success(pokemon);
        setCapturedMons(capturedMons + pokemon);
        setPoints(points + 1000);
      } //Set Three
      else if (
        pokemon === "Sableye" &&
        mutatedX >= accessArray[24].integerValue &&
        mutatedX <= accessArray[25].integerValue &&
        mutatedY >= accessArray[26].integerValue &&
        mutatedY <= accessArray[27].integerValue
      ) {
        success(pokemon);
        setCapturedMons(capturedMons + pokemon);
        setPoints(points + 1000);
      } else if (
        pokemon === "Ledyba" &&
        mutatedX >= accessArray[28].integerValue &&
        mutatedX <= accessArray[29].integerValue &&
        mutatedY >= accessArray[30].integerValue &&
        mutatedY <= accessArray[31].integerValue
      ) {
        success(pokemon);
        setCapturedMons(capturedMons + pokemon);
        setPoints(points + 1000);
      } else if (
        pokemon === "Jumpluff" &&
        mutatedX >= accessArray[32].integerValue &&
        mutatedX <= accessArray[33].integerValue &&
        mutatedY >= accessArray[34].integerValue &&
        mutatedY <= accessArray[35].integerValue
      ) {
        success(pokemon);
        setCapturedMons(capturedMons + pokemon);
        setPoints(points + 1000);
      } else {
        failure();
      }
    } else {
      failure();
    }
  };
  //End communicate func
  let timedClose = () => {
    setShowMenu(false);
  };
  useEffect(() => {
    if (level === 1) {
      setPokemon({
        pokeOne: "Pikachu",
        pokeTwo: "Celebi",
        pokeThree: "Blissey",
      });
    }
    if (level === 2) {
      setPokemon({
        pokeOne: "Ditto",
        pokeTwo: "Metapod",
        pokeThree: "Charmeleon",
      });
    }
    if (level === 3) {
      setPokemon({
        pokeOne: "Sableye",
        pokeTwo: "Ledyba",
        pokeThree: "Jumpluff",
      });
    }
  }, [level]);

  let levelChange = () => {
    let overlay = document.querySelector("#objList");
    if (overlay.classList.contains("hiddenObjs")) {
      overlay.classList.toggle("hiddenObjs");
    }
    if (level === 3) {
      setLevel(1);
    } else {
      setLevel(level + 1);
    }
  };

  if (points === 9000) {
    return (
      <>
        <div className="winnerContainer">
          <div className="winner-div">
            <div className="prevWinners">
              <h3>You caught em' all!</h3>
              <div className="inputContainer">
                Enter Name{" "}
                <input
                  className="nameInput"
                  id="nameInput"
                  placeholder="Nickname (4 Characters)"
                  maxLength={4}
                  required
                  onChange={(event) => {
                    setNewName(event.target.value);
                  }}
                />
                <button className="createButton" onClick={createUser}>
                  Submit
                </button>
              </div>
              <p className="cntr">Previous Winners</p>
              {users.map((user, index) => {
                return (
                  <div className="displayName" key={index}>
                    <img src={masterball} className="winImg" alt="masterball" />
                    <p>{user.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }

  let scanBox = document.querySelector(".scanBox");
  const moveCursor = (e) => {
    let img = document.querySelector("#wwPic");
    let bounds = img.getBoundingClientRect();
    let mouseX = e.pageX - 35;
    let mouseY = e.pageY - 35 - bounds.top - window.scrollY + 120;
    scanBox.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  };
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
        <Score points={points} />
        <Header />
        <Objectives
          pokemon={pokemon}
          level={level}
          Celebi={Celebi}
          Blissey={Blissey}
          Charmeleon={Charmeleon}
          Ditto={Ditto}
          Jumpluff={Jumpluff}
          Ledyba={Ledyba}
          Metapod={Metapod}
          Pikachu={Pikachu}
          Sableye={Sableye}
        />
        <button className="levelButton" onClick={levelChange}>
          Next Set
        </button>
      </div>
      <div className="modal-obj" onClick={handleMouseClick}>
        <Modal pokemon={pokemon} />
      </div>
      <div className="captured">
        <div className="capHeader">Found Pokemon</div>
        <CapturedMons
          capturedMons={capturedMons}
          Celebi={Celebi}
          Blissey={Blissey}
          Charmeleon={Charmeleon}
          Ditto={Ditto}
          Jumpluff={Jumpluff}
          Ledyba={Ledyba}
          Metapod={Metapod}
          Pikachu={Pikachu}
          Sableye={Sableye}
        />
      </div>
    </div>
  );
}

export default App;
