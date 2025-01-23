// import React from 'react';
// import { useNavigate  } from "react-router-dom"
// const Contact = () => {

//   const navigate = useNavigate()
//   const data1 = {name:'seetha' , age:23}
//   return(
//   <>
//   <h1>  Contact </h1>
//     <button onClick={() => {navigate(`/${" Pandu  "}`)}}>
//         navigate
//         </button>

//         <button onClick={() => {navigate('/about' ,{state:data1 } )}}>
//         navigate to about
//         </button>
//   </>
//      )
// }
// export default Contact; 

import React from 'react';
import{useNavigate}from 'react-router-dom'
const Contact=()=>{
  const navigate=useNavigate();
  const data3={name:'geetha' , age:23}
  return(
    <>
    
    <button onClick={()=>{navigate(`/${"saanvika"}`)}}> navigate</button>
   <button onClick={()=>{navigate('/Home',{state:data3})}}>navigate to Home</button>
    
    </>
  )
}
export default Contact;