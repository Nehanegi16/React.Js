import React, { useEffect, useState } from 'react'


const UseEffect = () => {
    const [count,setCount]=useState(0)
    const[name,setName]=useState("")

    const fun1=(()=>{
        setName("baccho muje")
    })

    const fun=(()=>{
        setCount(count+1)
    })

    useEffect(()=>{
        console.log("bachha liya menen tumhe")
    },[])
   
  return (
    <div>
        <p>{count}</p>
        <button onClick={fun}>Click me</button>
        <p>{name}</p>
        <button onClick={fun1}>show name</button>
       

    </div>
  )
}

export default UseEffect