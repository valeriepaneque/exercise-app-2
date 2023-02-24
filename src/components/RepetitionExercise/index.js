import { useState } from 'react';
//Repetiton exercise, 4th const ^
//exercise.name grabs name from array 
//useState at zero so it increases from that when you click button
//setCount takes previous value and adds to it // {count} is used for current state of number
//setCount to 0 for reset button 
export default function RepetitionExercise(exercise, setMenuScreen) {
  let [count, setCount] = useState(0)
  return <div> 
     <p> {exercise.name} </p>
     <p style ={{fontSize:"5em"}}>{count} </p>
     <button style={{fontSize: "2em"}} onClick ={() => setCount(count=>count+1)}> Increment </button>
     <button style={{fontSize: "2em"}} onClick={()=> setCount(0)}> Reset </button> <br/>
     <button style={{fontSize: "1em"}} onClick={setMenuScreen}> Return to Menu</button>
     </div>
}
