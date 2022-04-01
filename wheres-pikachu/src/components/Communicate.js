//send cords to firebase
let communicate = (x, y, pokemon, height, width) => {
  let canvas = document.querySelector('#wwPic');
  let rect = canvas.getBoundingClientRect();
  let mutatedX = (((x - rect.left) / width) * 100).toFixed(4);
  let mutatedY = ((y / height) * 100).toFixed(4);
  // let mutatedY = ((y  - rect.top) / height).toFixed(4);
  // console.log(['X: ' + x, 'Y: ' + y, pokemon]);
  console.log([mutatedX, mutatedY, pokemon]);
  // console.log(rect.top, rect.left)
  if (pokemon === 'Pikachu' &&
  mutatedX >= 1 && mutatedX <= 5
  && 
  mutatedY >= 88 && mutatedY <= 101){
    console.log(`FOUND! ${pokemon}`)
    return
  } else {
    console.log(`${pokemon} was not found here.`)
    return
  }
}

export default communicate