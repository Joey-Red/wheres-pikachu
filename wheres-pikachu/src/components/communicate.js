//send cords to firebase
import failure from './failure';
import Success from './Success';
let communicate = (localX, localY, pokemon) => {
  // let [foundPokes, setFoundPokes] = useState([])
  let canvas = document.querySelector('#wwPic');
  let rect = canvas.getBoundingClientRect();
  let mutatedX = (((localX / rect.width) * 100)).toFixed(2);
  let mutatedY = (((localY / rect.height) * 100)).toFixed(2);
  //Set One
  if (pokemon === 'Pikachu' &&
  mutatedX >= 5 && mutatedX <= 8 && 
  mutatedY >= 80 && mutatedY <= 88){
    Success(pokemon);
  } else if (pokemon === 'Celebi' &&
  mutatedX >= 26 && mutatedX <= 30 && 
  mutatedY >= 38 && mutatedY <= 44){
    Success(pokemon);
  } else if (pokemon === 'Chansey' &&
  mutatedX >= 76 && mutatedX <= 81 && 
  mutatedY >= 40  && mutatedY <= 48){
    Success(pokemon);
  }  //Set Two
  else if (pokemon === 'Ditto' &&
  mutatedX >= 0.5 && mutatedX <= 6 && 
  mutatedY >= 59  && mutatedY <= 62){
    Success(pokemon);
  } else if (pokemon === 'Metapod' &&
  mutatedX >= 0.5 && mutatedX <= 3 && 
  mutatedY >= 60  && mutatedY <= 64){
    Success(pokemon);
  } else if (pokemon === 'Charmeleon' &&
  mutatedX >= 84 && mutatedX <= 87 && 
  mutatedY >= 46  && mutatedY <= 52.5){
    Success(pokemon);
  } //Set Three
  else if (pokemon === 'Sableye' &&
  mutatedX >= 12 && mutatedX <= 14.5 && 
  mutatedY >= 61.5  && mutatedY <= 66){
    Success(pokemon);
  } else if (pokemon === 'Ledyba' &&
  mutatedX >= 14.5 && mutatedX <= 17.5 && 
  mutatedY >= 0.75  && mutatedY <= 5.5){
    Success(pokemon);
  } else if (pokemon === 'Jumpluff' &&
  mutatedX >= 50 && mutatedX <= 53 && 
  mutatedY >= 85  && mutatedY <= 89){
    Success(pokemon);
  } else {
    failure()
  }
}
export default communicate