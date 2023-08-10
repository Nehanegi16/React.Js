import React,{useCallback, useState}from 'react'


const Usecallback = () => {
    const[count,setCount]= useState(0)
    const[name,setName]= useState("hy")

    const increase=useCallback(()=>{
        setCount(count+1)
        console.log("hy i am callback")
    },[count])

    const decrease=useCallback(()=>{
        setCount(count-1)
        console.log("hy i am callback")
    },[count])
      
    const show=useCallback(()=>{
      setName("kem chho")
    },[name])
    console.log("dekho jra eshko")

  

  return (
    <div>
        count:{count}
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        {name}
        <button onClick={show}>click</button>
    </div>
  )
}

export default Usecallback