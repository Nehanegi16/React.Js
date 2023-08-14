import React, { useReducer } from 'react'
import '../App.css';

const initialstate=0
const  reducer=(state,action)=>{
    if(action.type==="INCREMENT"){
        return state+1
    }
    if(action.type==="DECREMENT"){
        return state-1
    }
    return state=1000
}

const UseReducer = () => {
    const[state,dispatch]=useReducer(reducer,initialstate)
  return (
    <div>
        <button className='btn'>{state}</button>
         <button className='btnInc' onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
         <button  className='btnDec' onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
    </div>
  )
}

export default UseReducer