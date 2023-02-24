import React from 'react'
import './player-display.css'

const PlayerDisplay = ({header, score = 0, currentScore}) => {
  return (
    <div className='player-display' style={header==='player 1'?{backgroundColor: '#FFB84C'}:{backgroundColor: '#F16767'}}>
        <div>{header}</div>
        <div>
            <div>Score:</div>
            <div>{score}</div>
        </div>
        <div>
            <div>Current:</div>
            <div>{currentScore}</div>
        </div>
        <div></div>
    </div>
  )
}

export default PlayerDisplay