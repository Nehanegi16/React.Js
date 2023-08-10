import React from 'react'
// import UseEffect from './Components/UseEffect';
// import Usecallback from './Components/Usecallback';
import UseRef from './Components/UseRef';
// import CompA from './Components/CompA'

// import Increment from './Components/Increment'
// import Home  from './Components/Home'

// const App = () => {
//   const  detail={
//     name:"neha",
//     rollno:6224
//   }
//   return (
//     <div>
//       <Home show={detail}/>
//       <Increment/>
//     </div>
//   )
// }

// export default App

// const fname=createContext()
// const lname=createContext()
// const App = () => {
  
//   return (
//         <div>
//           <fname.Provider value={"neha"}>
//             <lname.Provider value={"negi"}>
//             <CompA/>
//             </lname.Provider>
//           </fname.Provider>
//         </div>
//       )
//     }
    
// export default App;
// export {fname,lname};



const App = () => {
  return (
            <div>
           {/* <Usecallback/> */}
           <UseRef/>
            </div>
          )
        }
        
    export default App;