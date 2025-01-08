import React from 'react';
import Form from './Form';
import Details from './Details';
import { BrowserRouter , Routes , Route } from "react-router-dom"
const RouterPage = () =>{
  return(
    <>
      < BrowserRouter >
     <Routes>
     <Route index path='/' element={ <Form />} />
     <Route exact path="/details" element={ < Details /> }/>
      </Routes>
    </ BrowserRouter >
    
    </>
  )
}
export default RouterPage;