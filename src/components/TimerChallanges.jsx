import { useRef, useState } from "react";
import { ResultModel } from "./ResultModel";

export const TimerChallanges = ({ title, targetTime }) => {
  const timer = useRef();
  const dialog = useRef();

  const [remmingTime, setRemmingTime] = useState(targetTime * 1000);
  let timeIsActive = remmingTime > 0 && remmingTime < targetTime * 1000;
  // console.log(timeIsActive);
  
  if(remmingTime<=0){
    clearInterval(timer.current)
    dialog.current.showModal();
    // setRemmingTime(targetTime*1000)
  }
  function handelStart() {
    timer.current = setInterval(() => {
      setRemmingTime((previous) => previous - 10);
    }, 10);
  }

  function handelReset(){
    setRemmingTime(targetTime*1000)
  }
  function handelStop() {
    dialog.current.showModal();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModel
        reset={handelReset}
        targetTime={targetTime}
        ref={dialog}
        remming={remmingTime}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timeIsActive ? handelStop : handelStart}>
            {timeIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timeIsActive ? "active" : ""}>
          {timeIsActive ? "Timer is Running" : "Timer is Inactive"}{" "}
        </p>
      </section>
    </>
  );
};
