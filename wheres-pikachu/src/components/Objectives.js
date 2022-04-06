function Objectives(props) {
  let { pokemon: { pokeOne, pokeTwo, pokeThree } } = props
  let { level } = props
  let showObjs = () => {
    let overlay = document.querySelector('#objList');
      overlay.classList.toggle('hiddenObjs');
  }
    let picOne = props.Pikachu;
    let picTwo = props.Celebi;
    let picThree = props.Chansey;
  if (level === 2) {
    picOne = props.Ditto;
    picTwo = props.Metapod;
    picThree = props.Charmeleon;
  }
  if (level === 3) {
    picOne = props.Sableye;
    picTwo = props.Ledyba;
    picThree = props.Jumpluff;
  }
  return (
    <div className='obj-background'>
          <button className='showButton' onClick={showObjs}>Show Objectives
          </button>
      <div className="hiddenObjs" id="objList">
        <ul className='list-of-objectives'>
            <li id="objOne"><img src={picOne} alt="" />{pokeOne}</li>
            <li id="objTwo"><img src={picTwo} alt="" />{pokeTwo}</li>
            <li id="objThree"><img src={picThree} alt="" />{pokeThree}</li>
            <button className='closeObjectives' onClick={showObjs}>Close</button>
        </ul>
      </div>
    </div>
  )
}


export default Objectives