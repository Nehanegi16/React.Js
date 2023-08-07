import React, { useEffect, useState } from 'react'
import "./css/style.css"

const Tempapp = () => {
  const[city,setCity]=useState(null);
  const[search,setSearch]=useState("Mumbai")


  useEffect(()=>{
   const fetchApi=async()=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=07dd274c39835619da859792bfa22628`
    const response=await fetch(url)  
    // console.log(response)
    const resJson=await response.json()
    // console.log(resJson)
    setCity(resJson.main)
   }
    fetchApi()
  },[search])
  return (
    <div>
         <div className='box'>
            <div className='inputData'>
              
                <input type='search' value={search} placeholder='Enter City' className='inputFeild' onChange={(event)=>{setSearch(event.target.value)}}/>
                </div>


                {!city ? (
                  <p className='errmsg'>😒No data Found</p>
                ) :(
                  <div>
                     <div className='info'>
                     <h2 className='location'>
                     <i className="fas fa-street-view"></i>
                     {search}
                      </h2>
                     <h1 className='temp'>
                     {city.temp}°Cel
                      </h1>
                      <h3 className='tempmin-max'>Min:{city.temp_min}°Cel | Max:{city.temp_max}°Cel</h3>
                    </div>
                    </div>
                   )}
         </div>
        
    </div>
  )
}

export default Tempapp