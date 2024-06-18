/* eslint-disable react/prop-types */
// import React from 'react'
import { useState } from 'react'
import Price from './Price'
export default function Card(props) {
  const [title,setTitle]= useState(props.title)
  const response=()=>{
   setTitle("popcorn")
  }
  return (
    <div className='mb-4 flex bg-teal-300 w-[400px] h-[150px] rounded-3xl justify-evenly items-center gap-6 '>
      <Price price={props.price}/>
      <h1 className='text-3xl text-red-500 font-extrabold '>{title}</h1>
      <button 
      onClick={response}
      className='border px-2 py-2 rounded  bg-blue-400 text-white font-extrabold '>Buy Now</button>
    </div>
  )
}
