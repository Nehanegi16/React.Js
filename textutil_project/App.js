
import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import Alert from './Components/Alert'
import {
  BrowserRouter as Router ,Routes
}from 'react-router-dom';


const App = () => {
  const[mode,setMode]=useState("light")
  const[alert,setAlert]=useState(null)
   
   const showaAlert=(message,type)=>{
     setAlert({
      msg:message,
      type:type
     })
     setTimeout(()=>{
      setAlert(null)
     },1000)
   }

      const togglemode=()=>{
        if(mode==='light'){
          setMode('dark')
          document.body.style.backgroundColor='gray'
          showaAlert("dark mode has been enable","success")
        }
        else{
          setMode('light')
          document.body.style.backgroundColor='white'
          showaAlert("light mode has been enable","success")
        }
      }
  
  return (
    <>
    <Router>
      <Navbar title="myweb.com" name="hello gyes" mode={mode} togglemode={ togglemode}/>
      <Alert  alert={alert}/>
      <div class="container my-3">
        <TextForm  showaAlert={showaAlert} heading="Enter the text" mode={mode} />
     </div>
      
        <Routes path="/textform" Component={<TextForm/>}/>
       </Router>
     </>
  )
}

export default App