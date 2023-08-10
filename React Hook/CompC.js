import React, { useContext } from 'react'
import { fname,lname } from '../App'

const CompC = () => {
    const name=useContext(fname)
    const sname=useContext(lname)
  return (
    <div>
  <h1>hy my self {name} {sname}</h1> 
    </div>
  )
}

export default CompC