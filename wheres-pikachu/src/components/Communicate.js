//send cords to firebase
let communicate = (x, y, pokemon, height, width) => {
  let canvas = document.querySelector('#wwPic');
  let rect = canvas.getBoundingClientRect();
  let mutatedX = ((x - rect.left) / width).toFixed(4);
  let mutatedY = ((y - rect.top) / height).toFixed(4);
  console.log([mutatedX, mutatedY, pokemon]);
}

export default communicate