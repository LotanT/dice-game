import { useState } from 'react';
import PlayerDisplay from './cmps/PlayerDisplay/PlayerDisplay';
import './App.css';

function App() {
  const [scorePlayer1, setScorePlayer1] = useState(0)
  const [scorePlayer2, setScorePlayer2] = useState(0)
  const [currTurn, setCurrTurn] = useState('player1')
  const [currentScore, setCurrentScore] = useState(0)
  const [dice, setDice] = useState({dice1: '', dice2: ''})

  const rollingDice = () =>{
    const dice1 = Math.floor(Math.random() * 6)+1
    const dice2 = Math.floor(Math.random() * 6)+1
    setDice({dice1, dice2})
    if(dice1 === 6 && dice2 === 6) switchTurn()
    else setCurrentScore(prevState=>prevState+dice1+dice2)
  }

  const holdPoints = () => {
    if(currTurn === 'player1') setScorePlayer1(prevState=>prevState + currentScore)
    else setScorePlayer2(prevState=>prevState + currentScore)
    switchTurn()
  }

  const switchTurn = () => {
    setCurrentScore(0)
    // setDice({dice1: '', dice2: ''})
    setCurrTurn(prevState=>prevState==='player1'?'player2':'player1')
  }

  const resetGame = () => {
    setScorePlayer1(0)
    setScorePlayer2(0)
    setCurrentScore(0)
    setCurrTurn('player1')
  }

  console.log(dice, currentScore, scorePlayer1, scorePlayer2);
  return (
    <div className="App">
     <PlayerDisplay header={'player 2'}/>
     <div className='board'>
      <div onClick={resetGame}>new game</div>
      <div>
        <div><img alt='' src=''/></div>
        <div><img alt='' src=''/></div>
      </div>
      <div onClick={rollingDice}>Roll Dice</div>
      <div onClick={holdPoints}>HOLD</div>
      <label>Score to win: <input/></label>
     </div>
     <PlayerDisplay header={'player 1'}/>
    </div>
  );
}

export default App;
