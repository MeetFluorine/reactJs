import { useState } from 'react';
import './App.css'

function App() {
  const [counter,setCounter]=useState(15);
//  let counter=5;

 const addValue=()=>{
  //  counter=counter+1;
  setCounter(counter+1)
   if(counter>19){
     alert("counter value can't be increase more")
     setCounter(counter)
   }
 }
 const removeValue = ()=>{
  //  counter=counter-1;
  setCounter(counter-1)
  if(counter<1){
    alert("counter value can't be decrease more")
    setCounter(counter)
  }
   console.log(counter);
 }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>add value {counter}</button>
      <br/>
      <button onClick={removeValue}>remove value {counter}</button>
    </>
  )
}

export default App
