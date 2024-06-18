/* eslint-disable react/prop-types */
// import React from 'react'

export default function Price(props) {
  return (
    <div className="border w-[100px] h-[100px] text-center py-[30px] bg-black text-white font-bold text-3xl  rounded-lg">{props.price} $</div>
  )
}
