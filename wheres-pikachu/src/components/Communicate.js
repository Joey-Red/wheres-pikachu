//send cords to firebase
let communicate = (x, y, pokemon, height, width) => {
  let canvas = document.querySelector('#wwPic');
  let rect = canvas.getBoundingClientRect();
  //Gonna get rid of rect.left bc chansey is a punk
  // let mutatedX = (((x - rect.left) / width) * 100).toFixed(4);
  let mutatedX = ((x / width) * 100).toFixed(4);
  let mutatedY = ((y / height) * 100).toFixed(4);
  // let mutatedY = ((y  - rect.top) / height).toFixed(4);
  // console.log(['X: ' + x, 'Y: ' + y, pokemon]);
  console.log([mutatedX, mutatedY, pokemon]);
  if (pokemon === 'Pikachu' &&
  mutatedX >= 0.8 && mutatedX <= 10 && 
  mutatedY >= 88 && mutatedY <= 95){
    console.log(`FOUND! ${pokemon}`)
  } else if (pokemon === 'Celebi' &&
  mutatedX >= 22 && mutatedX <= 34 && 
  mutatedY >= 45 && mutatedY <= 60){
    console.log(`FOUND! ${pokemon}`)
  } else if (pokemon === 'Chansey' &&
  mutatedX >= 71 && mutatedX <= 110 && 
  mutatedY >= 47  && mutatedY <= 64){
    console.log(`FOUND! ${pokemon}`)
  } else {
    console.log(`${pokemon} was not found here.`)
    return
  }
}

export default communicate
// const getCoords = (e) => {

//   e = (e||window.event);
  
//   let absoluteCoords = {
//     x: e.pageX - e.target.getBoundingClientRect().left,
//     y: e.pageY - e.target.getBoundingClientRect().top
//   }
  
//   return {
//     x: absoluteCoords.x / e.target.clientWidth * e.target.naturalWidth,
//     y: absoluteCoords.y / e.target.clientHeight * e.target.naturalHeight
//   };
