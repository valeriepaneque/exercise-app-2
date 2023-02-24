// import stopwatch code (../ bc we used index.js)
import StopWatch from '../StopWatch'

//setMenuScreen to return to main screen
export default function DurationExercise({exercise, setMenuScreen}) {
  let {name} = exercise
  return <div> 
    <p> {name} </p>
    <StopWatch/> 
    <button onClick={setMenuScreen}>Back to Menu</button>
  </div>
}

