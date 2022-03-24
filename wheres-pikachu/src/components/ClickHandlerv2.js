import React, {useState, useEffect} from 'react';

function ClickHandlerv2() {
  let [mouseLoc, setMouseLoc] = useState(0,0);
  document.body.onclick = function(event) {
    event = event || window.event;
    var target = event.target || event.picVar,
    rect = target.getBoundingClientRect(),
    offsetX = event.clientX - rect.left,
    offsetY = event.clientY - rect.top;
    setMouseLoc(offsetX, offsetY)
  };
    useEffect(() => {
    return (
    <div className="scanBox" style={{
        backgroundColor: 'orange',
        height: 17,
        width: 17,
        padding: '15px',
        position: 'absolute',
        left: mouseLoc[0],
        top: mouseLoc[1]
      }}></div>
    )
  });
  
}

export default ClickHandlerv2