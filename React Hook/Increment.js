import React, { useState } from 'react'
import About from './About'

const Increment = () => {
    const[increse,setIncrese]=useState()
    const add=()=>{
        setIncrese(increse+1)
    }
  return (
    <div>
        <About/>
    <button onClick={add}>Click{increse}</button>
    </div>
  )
}

export default Increment