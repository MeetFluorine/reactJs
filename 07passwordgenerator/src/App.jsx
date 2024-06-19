/* eslint-disable no-unused-vars */
import { useState, useCallback, useEffect, useRef } from 'react'

// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(true);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordREf = useRef(null);
  
  const passGenerator = useCallback(()=>{
    let pass="";
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+= "0123456789";
    if(charAllowed) str+= "!@#$%^&*{}()";
    for(let i=0;i<length;i++){

      pass+= str[Math.floor(Math.random()*str.length)];
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])

  useEffect(()=>{
    passGenerator();
  },[passGenerator,length,charAllowed,numberAllowed])

  function handleBtn(){
    passGenerator();
  }

  const copyPassword = useCallback(()=>{
    passwordREf.current?.select();
    // document.current?.setSelectionRange(0,16)
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <div className='select-none w-full flex justify-center items-center flex-col max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center  my-3'>Password Generator</h1>
      <div className='flex shadow  w-full rounded-lg overflow-hidden mb-4'>
        <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordREf}
        />
        <button 
        onClick={copyPassword}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex gap-x-2 text-sm'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={20}
            step={1}
            value={length}
            className='cursor-pointer '
            onChange={(event)=>{setLength(event.target.value)}}
             />
             <label htmlFor="">length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={()=>{
              setNumberAllowed((prev)=>!prev)
            }}
             />
             <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={()=>{
              setCharAllowed((prev)=>!prev)
            }}
             />
             <label htmlFor="charInput">Characters</label>
          </div>
      </div>
      <button
      onClick={handleBtn}
      className='border px-3 py-2 mb-2 mt-4 bg-orange-200 text-black font-extrabold outline-none hover:bg-black hover:text-orange-200 duration-400 hover:border-black active:scale-90 rounded-xl' 
      >Generator Password</button>
    </div>
  )
}

export default App
