function failure() {
  let scanBox = document.querySelector('.scanBox');
  scanBox.style.border="solid red 4px";
  scanBox.style.backgroundColor="rgba(255,0,0,0.7)"
  scanBox.style.cursor="none";
  let defCursor = () => {
  scanBox.style.border="dashed yellow 4px";
  scanBox.style.background="rgba(0, 0, 0, 0.3)";
  scanBox.style.cursor="crosshair";
  }
  setTimeout(defCursor, 1000);
  return (
    null
  )
}

export default failure