import React, { useState, useEffect } from 'react';
function Score(points) {
  let [score, setScore] = useState(0);
  let scoreModifier = points;
  let key = Object.keys(scoreModifier);
  let totalScore = scoreModifier[key] + score;
  useEffect(() => {
  setScore(score + scoreModifier[key]);
  
  }, [score])
  return (
    <div className='score-background'>Score: {totalScore}</div>
  )
}

export default Score