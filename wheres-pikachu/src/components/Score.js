import React, { useState, useEffect } from 'react';
function Score(points) {
  let [score, setScore] = useState(0);
  let scoreModifier = points;
  let key = Object.keys(scoreModifier);
  let totalScore = scoreModifier[key] + score;
  useEffect(() => {
  setScore(score + scoreModifier[key]);
  
  }, [score])
  // let scoreChanger = () => {
  //     // setScore(score - 1)
  //     setScore(currScore => currScore - 1)
  //     console.log('SCORECHANGER')
  // }
  // (() => {
  //   setTimeout(scoreChanger, 1000)
  //   // console.log('TIMEOUT')
  // })()
  // // console.log(score)
  return (
    <div className='score-background'>Score: {totalScore}</div>
  )
}

export default Score