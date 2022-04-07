import React, { useState, useEffect } from 'react';
function Score(points) {
  let [score, setScore] = useState(1000);
  useEffect(() => {
  let scoreModifier = points;
  let key = Object.keys(scoreModifier)
  // console.log(scoreModifier[key])
  setScore(score + scoreModifier[key])
  }, [])
  // dependancy array?
  let scoreChanger = () => {
    if (score >= 0){
      setScore(score - 1)
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