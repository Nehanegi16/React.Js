import React, { memo } from 'react'

const About = () => {
    console.log("element is randring")
  return (
    <div>
        <h1>this is about our app</h1>
    </div>
  )
}

export default  memo(About)