import React, { useState } from "react";

export const TimerChallanges = ({ title, targetTime }) => {
  const [challengeStart, setchallengeStart] = useState(false);
  const [timmerExpire,settimmerExpire]=useState(false);
  function handelStart() {
    setTimeout(() => {
        settimmerExpire(true)
        setchallengeStart(false)
    }, targetTime * 1000);
    setchallengeStart(true);
    settimmerExpire(false)
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p>{timmerExpire ? 'you lost':''}</p>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={handelStart}>
          {challengeStart ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p>{challengeStart?'Timmer is Running':'TImmer is Inactive'} </p>
    </section>
  );
};
