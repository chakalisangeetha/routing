import React from 'react';
import {useLocation} from 'react-router-dom'
const Details = () =>{
  const location = useLocation();
  console.log(location,'5==')
  return(
    <>
    <p>{location.state.title1}</p>
    <p>{location.state.title2}</p>
    <p>{location.state.title3}</p>
    <p>{location.state.title4}</p>
    <p>{location.state.title5}</p>
    </>
  )
}
export default Details;