import React, { useState } from 'react';
function Score() {
  let [score, setScore] = useState(1000);
  let scoreChanger = () => {
    if (score > 0){
      setScore(score - 1)
    } else {
      setScore(0)
    }
  }
  (() => {
    setTimeout(scoreChanger, 1000)
  })()
  return (
    <div className='score-background'>Score: {score}</div>
  )
}

export default Score