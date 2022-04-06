import pokeball from './img/pokeball.png';
let success = (props) => {
  let scanBox = document.querySelector('.scanBox');
  scanBox.style.backgroundImage=`url(${pokeball})`;
  scanBox.style.border="solid black 1px";
  let defCursor = () => {
  scanBox.style.border="dashed yellow 4px";
  scanBox.style.background="rgba(0, 0, 0, 0.3)";
  }
  setTimeout(defCursor, 3000);
  return props
}

export default success