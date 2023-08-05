import React ,{useState} from 'react'

const Counter = () => {
    const[count,setCount]=useState(0);
   const Increement=()=>{
    setCount(count+1)
   }
   const Decrement=()=>{
    (count===0?setCount(0):setCount(count-1))
   }
  return (
    <div>
        
        <button onClick={Increement}>Increement</button>
        <h1>{count}</h1>
        <button onClick={Decrement}>Deccrement</button>
       
    </div>
  )
}

export default Counter