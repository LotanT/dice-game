import React from 'react'
import './player-display.css'

const PlayerDisplay = ({header}) => {
  return (
    <div className='player-display' style={header==='player 1'?{backgroundColor: '#FFB84C'}:{backgroundColor: '#F16767'}}>
        {header}
    </div>
  )
}

export default PlayerDisplay