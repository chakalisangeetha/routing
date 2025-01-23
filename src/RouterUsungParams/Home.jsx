import React from 'react';
import { useParams, } from "react-router-dom"
const Home = () => {

  let data = useParams()
  // let { id } = useParams()
  console.log(data,'66')
  return(
    <>
    <h1> Hello !</h1>
    <h3> { data.id} </h3>
   {/* <h3> {id} </h3> */}
    </>
   )
}
export default Home;