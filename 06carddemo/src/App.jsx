// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
 
  let data = [
    {
      title: 'nirma1',
      price: '500'
    },
    {
      title: 'nirma2',
      price: '505'
    },
    {
      title: 'nirma3',
      price: '510'
    },
    {
      title: 'nirma4',
      price: '515'
    }
  ]

  return (
    <div className='bg-yellow-300 w-[450px] h-[850px] rounded-3xl gap-6 flex justify-center items-center flex-wrap'>
      <Card price={data[0].price} title={data[0].title}/>
      <Card price={data[1].price} title={data[1].title}/>
      <Card price={data[2].price} title={data[2].title}/>
      <Card price={data[3].price} title={data[3].title}/>
      
    </div>
  )
}

export default App
