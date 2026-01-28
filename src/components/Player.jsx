import { useRef, useState } from "react";

export default function Player() {
  const inputPlayer = useRef();

  const [playerName,setPlayerName] = useState(null);
  function onSubmit(){
    setPlayerName(inputPlayer.current.value)
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName :'unknown entity'}</h2>
      <div>
        <input ref={inputPlayer} type="text" />
        <button onClick={onSubmit}>Set Name</button>
      </div>
    </section>
  );
}
