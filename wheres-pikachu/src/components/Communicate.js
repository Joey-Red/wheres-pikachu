//send cords to firebase
let communicate = (x, y, pokemon, height, width) => {
  let canvas = document.querySelector('#wwPic');
  let rect = canvas.getBoundingClientRect();
  let mutatedX = ((x - rect.left) / width).toFixed(4);
  let mutatedY = ((y - rect.top) / height).toFixed(4);
  // console.log([x, y, pokemon]);
  console.log([mutatedX, mutatedY, pokemon]);


/* 
[Small]
Pikachu: -0.0103, 1.13105
Celebi: 0.2041, 0.8791
Chansey: 0.7134, 0.9118

Ditto: -0.0330, 1.0752
Metapod: -0.0598, 1.0915
Charmeleon: 0.7835, 0.9673

Sableye: 0.0639, 1.1078
Ledyba: 0.0866, -0.0229
Jumpluff: 0.4454, 1.3464

[Large]
Pikachu: 0.0526, 0.9860
Celebi: 0.2604, 0.5529
Chansey: 0.7698, 0.5529

Ditto: -0.024, 0.7438
Metapod: -0.0005, 0.7669
Charmeleon: 0.8385, 0.6364

Sableye: 0.1187, 0.7835
Ledyba: 0.1469, 0.0413
Jumpluff: 0.4979, 1.0281

*/
  if (pokemon === 'Pikachu' &&
  mutatedX >= -0.0200 && mutatedX <= 0.0500
  && 
  mutatedY >= 0.7000 && mutatedY <= 0.8000){
    console.log(`FOUND! ${pokemon}`)
  } else {
    console.log(`${pokemon} was not found here.`)
  }
}

export default communicate