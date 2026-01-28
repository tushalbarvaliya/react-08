import { useState } from "react";
import { flushSync } from "react-dom";

export default function Player() {
  const [playerName,setPLayerName] = useState(null);
  const [isSubmmited,setIsSubmmited] = useState(false);

  function handelChange(event){
    setIsSubmmited(false)
    setPLayerName(event.target.value)
  }

  function onSubmit(){
    setIsSubmmited(true)
  }

  return (
    <section id="player">
      <h2>Welcome {isSubmmited ? playerName :'unknown entity'}</h2>
      <p>
        <input type="text"  value={playerName} onChange={handelChange}/>
        <button onClick={onSubmit}>Set Name</button>
      </p>
    </section>
  );
}
