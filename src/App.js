import { useState } from 'react';
import PlayerDisplay from './cmps/PlayerDisplay/PlayerDisplay';
import './App.css';

function App() {
  const [totalScore, setTotalScore] = useState({player1: 0, player2: 0})
  const [currentScore, setCurrentScore] = useState(0)
  const [dice, setDice] = useState({dice1: '', dice2: ''})

  const rollingDice = () =>{
    const dice1 = Math.floor(Math.random() * 6)+1
    const dice2 = Math.floor(Math.random() * 6)+1
    console.log(dice1, dice2);
    setDice({dice1, dice2})
    setCurrentScore(prevState=>prevState+dice1+dice2)
  }

  console.log(dice, currentScore);
  return (
    <div className="App">
     <PlayerDisplay header={'player 2'}/>
     <div className='board'>
      <div>new game</div>
      <div>
        <div><img alt='' src=''/></div>
        <div><img alt='' src=''/></div>
      </div>
      <div onClick={rollingDice}>Roll Dice</div>
      <div>HOLD</div>
      <label>Score to win: <input/></label>
     </div>
     <PlayerDisplay header={'player 1'}/>
    </div>
  );
}

export default App;
