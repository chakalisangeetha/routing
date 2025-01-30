import React from 'react';
import Sender from './Sender'
import Receiver from './Receiver'
// import Mediator from './Mediator'
import { BrowserRouter,  Routes, Route  } from "react-router-dom"
import LinkPage from './LinkPage'
const ContextProv = () =>{
  return(
    <>
    <BrowserRouter>
    <LinkPage />
    <Routes>
    <Route index path='/' element={<Sender/>}/>
    {/* <Route exact path="/mediator"  element={<Mediator/> } /> */}
    <Route exact path="/receiver"  element={<Receiver /> } />
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default ContextProv;