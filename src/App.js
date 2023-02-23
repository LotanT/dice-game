import PlayerDisplay from './cmps/PlayerDisplay/PlayerDisplay';
import './App.css';

function App() {
  return (
    <div className="App">
     <PlayerDisplay header={'player 2'}/>
     <div className='board'>
      <div>new game</div>
      <div>
        <div><img alt='' src=''/></div>
        <div><img alt='' src=''/></div>
      </div>
      <div>Roll Dice</div>
      <div>HOLD</div>
      <label>Score to win: <input/></label>
     </div>
     <PlayerDisplay header={'player 1'}/>
    </div>
  );
}

export default App;
