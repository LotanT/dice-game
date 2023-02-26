import { useEffect, useState } from 'react';
import PlayerDisplay from './cmps/PlayerDisplay/PlayerDisplay';
import './App.css';
import DICE0 from '../src/assets/imgs/dice-six-faces-0.png'
import DICE1 from '../src/assets/imgs/dice-six-faces-1.png'
import DICE2 from '../src/assets/imgs/dice-six-faces-2.png'
import DICE3 from '../src/assets/imgs/dice-six-faces-3.png'
import DICE4 from '../src/assets/imgs/dice-six-faces-4.png'
import DICE5 from '../src/assets/imgs/dice-six-faces-5.png'
import DICE6 from '../src/assets/imgs/dice-six-faces-6.png'

function App() {
  const [scorePlayer1, setScorePlayer1] = useState(0)
  const [scorePlayer2, setScorePlayer2] = useState(0)
  const [victories1, setVictories1] = useState(0)
  const [victories2, setVictories2] = useState(0)
  const [currTurn, setCurrTurn] = useState('player1')
  const [currentScore, setCurrentScore] = useState(0)
  const [dice, setDice] = useState({dice1: DICE0, dice2: DICE0})
  const [finalScore, setFinalScore ] = useState(100)
  const STORAGE_KEY = 'gameDiceScore'

  useEffect(()=>{
    const data = getFromLocalStorage(STORAGE_KEY)
    console.log(data);
    if(data){
      setVictories1(data.player1)
      setVictories2(data.player2)
    }
  },[])

  useEffect(()=>{
    if(victories1 || victories2){
      saveToLocalStorage({player1: victories1, player2: victories2}, STORAGE_KEY)
    }
  },[victories1, victories2])

  useEffect(()=>{
    isWon()
  },[scorePlayer1, scorePlayer2])

  const rollingDice = () =>{
    const dice1 = Math.floor(Math.random() * 6)+1
    const dice2 = Math.floor(Math.random() * 6)+1
    const dice = {}
    switch (dice1) {
      case 1:
        dice.dice1 = DICE1
        break;
      case 2:
        dice.dice1 = DICE2
        break;
      case 3:
        dice.dice1 = DICE3
        break;
      case 4:
        dice.dice1 = DICE4
        break;
      case 5:
        dice.dice1 = DICE5
        break;
      case 6:
        dice.dice1 = DICE6
        break;
    }
    switch (dice2) {
      case 1:
        dice.dice2 = DICE1
        break;
      case 2:
        dice.dice2 = DICE2
        break;
      case 3:
        dice.dice2 = DICE3
        break;
      case 4:
        dice.dice2 = DICE4
        break;
      case 5:
        dice.dice2 = DICE5
        break;
      case 6:
        dice.dice2 = DICE6
        break;
    }
    setDice(dice)
    if(dice1 === 6 && dice2 === 6){
      showAlert('You got 6 6 :(')
      switchTurn()
    } 
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

  const updateFinalScore = (ev) => {
    console.log(ev.target.value * 1);
    setFinalScore(ev.target.value * 1)
  }

  const isWon = () => {
    console.log(scorePlayer1 , finalScore);
    if(scorePlayer1 >= finalScore){
      showAlert('PLAYER 1 WON!!')
      setVictories1(prevState=>prevState+1)
      resetGame()
      // saveToLocalStorage({player1: victories1, player2: victories2}, STORAGE_KEY)
    }else if(scorePlayer2 >= finalScore){
      showAlert('PLAYER 2 WON!!')
      setVictories2(prevState=>prevState+1)
      resetGame()
      // saveToLocalStorage({player1: victories1, player2: victories2}, STORAGE_KEY)
    }
  }

  const showAlert = (txt) => {
    setTimeout(() => {
      alert(txt)
    }, 0);
  }

  const resetGame = () => {
    setTimeout(() => {
      setScorePlayer1(0)
      setScorePlayer2(0)
      setCurrentScore(0)
      setCurrTurn('player1')
    }, 200);
  }

  const saveToLocalStorage = (data, key) => {
    data = JSON.stringify(data)
    console.log(data);
    localStorage.setItem(key, data)
  }

  const getFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key))
  }

  // console.log(dice, currentScore, scorePlayer1, scorePlayer2);
  return (
    <div className="App">
     <PlayerDisplay header={'PLAYER  2'} score={scorePlayer2} currentScore={currTurn==='player2'?currentScore:0} turn={currTurn} victories={victories2}/>
     <div className='board'>
      <div onClick={resetGame} className='button'>NEW GAME</div>
      <div>
        <div className='dice'><img alt='' src={dice.dice1}/></div>
        <div className='dice'><img alt='' src={dice.dice2 }/></div>
      </div>
      <div onClick={rollingDice} className='button'>ROLL DICE</div>
      <div onClick={holdPoints} className='button'>HOLD</div>
      <label>Score to win: <input type='number' placeholder='FINAL SCORE' defaultValue='100' onChange={updateFinalScore}/></label>
     </div>
     <PlayerDisplay header={'PLAYER 1'} score={scorePlayer1} currentScore={currTurn==='player1'?currentScore:0} turn={currTurn} victories={victories1}/>
    </div>
  );
}

export default App;
