import React, { useEffect, useRef, useState } from 'react'
import '../App.css';

const UseRef = () => {
    const[data,setData]=useState("")
    const count= useRef(0)
     
    useEffect(()=>{
        count.current=count.current+1

    }) 



  return (
    <div>
        <input type="text" value={data} onChange={(e)=>setData(e.target.value)}></input>
 
         <h1>your input data is {count.current}</h1>
    </div>
  )
}

export default UseRef