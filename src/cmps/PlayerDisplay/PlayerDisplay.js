import React from 'react'
import './player-display.css'

const PlayerDisplay = ({header, score = 0, currentScore, turn, victories}) => {
  return (
    <div className='player-display' style={header==='PLAYER 1'?{backgroundColor: '#20262E'}:{backgroundColor: '#20262E'}}>
        <div className='player-header'>{header}</div>
        <div>WINS: {victories}</div>
        <div className='player-score'>
            <div>SCORE</div>
            <div style={{fontSize: '62px'}}>{score}</div>
        </div>
        <div className={turn.slice(-1) === header.slice(-1)? 'current-score turn': 'curren-score'}>
            <div>CURRENT</div>
            <div>{currentScore}</div>
        </div>
        <div></div>
    </div>
  )
}

export default PlayerDisplay