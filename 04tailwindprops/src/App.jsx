// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let data= {
    username:"chandan yadav",
    age:22
  }
  // let newArr=[1,2,3,4];
 return(
  <>
   
  <div className='wrapper'>
    <Card url="https://images.pexels.com/photos/1066176/pexels-photo-1066176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" username="Chandan kumar" someObject={data} btnText="follow for more"/>
    <Card  username="Sakshi kumari"btnText="follow for more"/>
  </div>
  </> 

 )
}

export default App
