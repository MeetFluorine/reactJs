import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  const addValue =()=>{
      setCount(count=>count+1);
      // setCount(count=>count+1);
      // setCount(count=>count+1);
      // setCount(count=>count+1);
      // setCount(count+1);
  }
  const removeValue =()=>{
      setCount(count-1);
  }

  return (
    <>
      <h1> practice counter</h1>
      <h2>click on button to increase & decrease</h2>
      <h3>{count}</h3>
      <button
      onClick={addValue}
      >inc.  {count}</button>
      <br/>
      <br/>
      <button
      onClick={removeValue}
      >dec. {count}</button>
      <p>footer {count}</p>
    </>
  )
}

export default App
