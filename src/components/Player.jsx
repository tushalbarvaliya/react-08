import { useRef, useState } from "react";
import { flushSync } from "react-dom";

export default function Player() {
  const inputPlayer = useRef();

  const [playerName,setPlayerName] = useState(null);
  function onSubmit(){
    setPlayerName(inputPlayer.current.value)
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName :'unknown entity'}</h2>
      <p>
        <input ref={inputPlayer} type="text" />
        <button onClick={onSubmit}>Set Name</button>
      </p>
    </section>
  );
}
