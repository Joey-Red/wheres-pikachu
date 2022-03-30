import React, { useState } from 'react'

function Score() {
  let [score, setScore] = useState(600);
  let scoreChanger = () => {
    setScore(score - 1)
  }
  (() => {
    setTimeout(scoreChanger, 1000)
  })()
  return (
    <div className='score-background'>Score: {score}</div>
  )
}

export default Score