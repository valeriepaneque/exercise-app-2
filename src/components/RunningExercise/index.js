import StopWatch from '../StopWatch'
// TODO: Laps should be shown at the bottom of the component 
// should be displayed using map using an array of lap times stored as an array. 
// Laps can be stored on the component and do not need to be stored on the parent component.


export default function RunningExercise({exercise, setMenuScreen}) {
  let {name} = exercise
  //add current time when lap function is called
  // take the current lap's stop time and subtracting the previous lap's stop time.
  // display current lap times
  return <div> 
    <p> {name} </p>
    <StopWatch/> 
    <button onClick={setMenuScreen}>Back to Menu</button>
    
  </div>
}
 //  <button style={{"fontSize":"4em"}} > Laps </button> <br/>