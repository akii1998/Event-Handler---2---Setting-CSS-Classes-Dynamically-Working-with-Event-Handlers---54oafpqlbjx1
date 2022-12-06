import React from 'react'
import '../styles/App.css';
const App = () => {

  // const handleClick = (event) =>{
  //   console.log('Button id is:-button-a');

  // }
  let handleClick = (event)=>{

      
    
            if(event.target.id === "button-a"){
    console.log('Button id is:-button-a');
    
            }else{
    
              console.log('Button id is:-button-b');
            }
    
        }

  return (
    <div id="main">
      <button id="button-a" onClick={(event)=>handleClick(event)}>Button A</button>
      <button id="button-b" onClick={(event)=>handleClick(event)}>Button B</button>
    </div>
  )
}


export default App
