import React, { useState } from "react";

export default function ClickHandlerv3() {
  let [cords, setCords] = useState([0,0]);
  // let handleMouseClick = (e) => {
  //   setCords(
  //     [e.clientX, e.clientY]
  //   );
  // }
  let handleMouseClick = (e) => {
    let newCords = [e.clientX, e.clientY];
    setCords(newCords)
  }
    return (
      <div style={{ height: '100vh' }} onClick={handleMouseClick}>
        <p style={{
        backgroundColor: 'orange',
        height: 17,
        width: 17,
        padding: '15px',
        position: 'absolute',
        left: cords[0],
        top: cords[1]
      }}>{cords[0]} {cords[1]}</p>
      </div>
    );
}


