//send cords to firebase
let communicate = (x, y, pokemon, height, width) => {
  let canvas = document.querySelector('#wwPic');
  let rect = canvas.getBoundingClientRect();
  let mutatedX = ((x - rect.left) / width).toFixed(4);
  let mutatedY = ((y - rect.top) / height).toFixed(4);
  // console.log([x, y, pokemon]);
  console.log([mutatedX, mutatedY, pokemon]);


  // Have 9 if statements for the different pokemon
  // or have an array of cords and pokemon
  // if (pokemon === 'Pikachu' &&
  // mutatedX >= num && mutatedX <= num
  // && 
  // mutatedY >= num && mutatedY <= num)
}

export default communicate