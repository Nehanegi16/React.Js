import React ,{useState} from 'react'
const TextForm = (props) => {
const handleuppercaseClick=()=>{
  let newtext=text.toUpperCase()
  setText(newtext)
  props.showaAlert("converted to Uppercase","primary")
}
const handlelowerClick=()=>{
  let newtext=text.toLowerCase()
  setText(newtext)
  props.showaAlert("converted to Lowercase","primary")
}
const handleClick=()=>{
  let newtext=''
  setText(newtext) 
}
const handleonchnage=(event)=>{
  setText(event.target.value)

}


  const[text,setText]=useState("")
  return (
      <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleonchnage} style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}}id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleuppercaseClick} >Covert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handlelowerClick} >Covert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClick} >Clear</button>
   
    <div className='container'>
      <h2>Your text Summary</h2>
      <p> { text.split("").length} words and {text.length} Characters </p>
      <h2>Preview</h2>
      <p>{text}</p>
      </div>
    </div>
  )
}

export default TextForm
