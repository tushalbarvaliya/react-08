import Player from './components/Player.jsx';
import { TimerChallanges } from './components/TimerChallanges.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallanges title={'easy'} targetTime={1}/>
        <TimerChallanges title={'not Eassy'} targetTime={5}/>
        <TimerChallanges title={'Hard'} targetTime={10}/>
        <TimerChallanges title={'Pros Only'} targetTime={15}/>
      </div>
    </>
  );
}

export default App;
