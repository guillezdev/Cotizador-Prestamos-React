import React from 'react'

function ButtonControls( {setRange} ) {
  return (
    <div className="flex justify-between w-full">
    <button onClick={() => {
      setRange((value) => {
        if (value > 0) return value - 100
        else return value = 20000
      })
    }} className="bg-teal-500 rounded-full h-8 w-8">-</button>
    <button onClick={() => {
      setRange((value) => {
        if (value < 20000) return value + 100
        else return value = 0
      })
    }} className="bg-teal-500 rounded-full h-8 w-8">+</button>
  </div>
  )
}

export default ButtonControls