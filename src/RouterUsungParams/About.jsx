// import React from 'react';
// import {useLocation} from "react-router-dom";
// const About = () => {
//   const location = useLocation()
//   console.log(location ,'55')
//   let data = location.state
//   return(
//     <>
//   <h1>About</h1>
//   <p>{ location.state.name}</p>
//   <p>{data.age}</p>
//      </>
//   )
// }
// export default About;





import React from 'react';
import{useNavigate}from 'react-router-dom'
const About=()=>{
  const navigate=useNavigate();
  const data1={name:'seetha' , age:23}
  return(
    <>
    
    <button onClick={()=>{navigate(`/${"pandu"}`)}}> navigate</button>
   <button onClick={()=>{navigate('/Contact',{state:data1})}}>navigate to Contact</button>
    
    </>
  )
}
export default About;


