// import logo from './logo.svg';

import './App.css';
import { useCallback, useState } from 'react';
import  DurationExercise  from './components/DurationExercise';
import RepetitionExercise from './components/RepetitionExercise';
import RunningExercise from './components/RunningExercise'

//values to compare screens
//const is used to name each value and you can remname ex.menu screen is menu screen
const MENU_SCREEN  = "menu"
const EXERCISE_SCREEN = "exercise" //exercise has to be different
const DURATION_EXERCISE = "duration"
const REPETITION_EXERCISE = "repetition"
const RUNNING_EXERCISE = "laps"



// exercise names in array for type and name
let exerciseList = [
  {type: RUNNING_EXERCISE, name: "Running"},
  {type: DURATION_EXERCISE, name: "Rowing"},
  {type: DURATION_EXERCISE, name: "Swimming"},
  {type: REPETITION_EXERCISE, name: "Push Ups"},
]

// screen component is assigned a menu component 
// useState changes value
//variables to display whatever component i want to display// menu screen is default
function App() {
  let [currentScreen, setCurrentScreen] = useState(MENU_SCREEN)
  // (MENU_SCREEN)
  let [currentExercise, setCurrentExercise] = useState({})
  // ({})
  let screenComponent = undefined
  let buttonClick = useCallback((exercise) => {
    setCurrentExercise(exercise)
    setCurrentScreen(EXERCISE_SCREEN)
  }, [])

  //click button to go to new screen 
  //unordered list for exercises buttons
  //use map function to recieve type and name from array
  //use object that has currentExercise .name  
  if(currentScreen === MENU_SCREEN) {
    screenComponent = <div>
    <p>Exercise Menu</p>
   <ul> 
    
    {exerciseList.map((exercise)=> {
      //assign key for exercise
      return <li key={exercise.name}>
        <button onClick={()=> buttonClick(exercise)}> {exercise.name} </button>  
      </li> 
    })}
    </ul>
  </div> 

  // duration exercise takes user to stopwatch
  //setCurrentScreen to menu screen for back buttons
  //passes in exercise object into duration exercise through the attribute exercise 
  } else if (currentScreen === EXERCISE_SCREEN) {
    //switch statement to compare one value to 3 or more values
    // compare type to duration exercise, if type = duration then : execute code 
    switch(currentExercise.type) {
      case DURATION_EXERCISE :
        screenComponent = <DurationExercise 
        exercise = {currentExercise}
    setMenuScreen={()=>setCurrentScreen(MENU_SCREEN)}
  /> 
  break;  //do not execute anymore code

      case REPETITION_EXERCISE :
        screenComponent = <RepetitionExercise 
        exercise = {currentExercise}
    setMenuScreen={()=>setCurrentScreen(MENU_SCREEN)}
  /> 
  break; 
  // LAPS SCREEN 
   case RUNNING_EXERCISE :
        screenComponent = <RunningExercise 
        exercise = {currentExercise}
    setMenuScreen={()=>setCurrentScreen(MENU_SCREEN)}
  /> 
  break; 
  default: //required incase nothing happens
  screenComponent = undefined
    }
  }

  return (
    <div className="App">
      <header className='App-header'>
        {screenComponent} 
      </header>
      </div>
  );
}

export default App;
