import '../App.css';
import React, { useEffect,useRef,useReducer } from 'react'

const initialstate={
    isRunning:false,
    time:0
}
const reducer=(state,action)=>{

        switch(action.type){
        case 'Start':
            return{...state,isRunning:true}
            case 'Stop':
                return{...state,isRunning:false}
                case 'Reset':
                    return{isRunning:false,time:0}
                    case 'tick':
                        return{...state,time:state.time+1}
                        default:
                            throw new Error();
    }
}
const StopWatch = () => {
    const[state,dispatch]=useReducer(reducer,initialstate)
    const isref=useRef(0);

    useEffect(()=>{
      
        if(!state.isRunning){
          return;
        
        }
        isref.current=setInterval(()=>dispatch({type:'tick'}),1000)
        return ()=>{
            clearInterval(isref.current);
            isref.current=0
        }
    },[state.isRunning])
  return (
    <div className='main'>
           <button className='disp'>{state.time}s</button>
           <button className='btnstart' onClick={()=>dispatch({type:'Start'})}>Start</button>
           <button className='btnstop ' onClick={()=>dispatch({type:'Stop'})}>Stop</button>
           <button  className='btnreset'  onClick={()=>dispatch({type:'Reset'})}>Reset</button>
    </div>
  )
}

export default StopWatch