import { createPortal } from "react-dom"


export const ResultModel = ({reset,targetTime,ref,remming}) => {
    const remmingTime = (remming/1000).toFixed(2)
    const score = Math.round((1-remmingTime/(targetTime))*100)
  return createPortal(
    <>
    <dialog  className='result-modal' ref={ref} >
        <h2>You {remming==0?'Lost':'Win'}</h2>
        <h2>{remming>0?`Your Score is ${score}`:''}</h2>
        <p>
            Your targeted Time Was {targetTime} seconds.
        </p>
        <p>
            You stop timer with {remmingTime} Second left.
        </p>
        <form method='dialog' onSubmit={reset}>
            <button>close</button>
        </form>
    </dialog>
    </>,document.getElementById('modal')
  )
}
