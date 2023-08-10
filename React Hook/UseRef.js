import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    const[inpvalue,setInpvalue]=useState("")
    const count=useRef(0);

    useEffect(()=>{
        count.current=count.current+1
    })
  
  return (
    <div>
        <input type="text" value={inpvalue} onChange={(e)=>setInpvalue(e.target.value)}></input>
       
        <h1>Render Count:{count.current}</h1>
    </div>
  )
}

export default UseRef