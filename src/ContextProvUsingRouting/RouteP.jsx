import React from 'react';
import Sender from './Sender'
import Receiver from './Receiver'
// import Mediator from './Mediator'
import ContextProv from './ContextProv'
import { BrowserRouter,  Routes, Route  } from "react-router-dom"
import Linkpage from './Linkpage'
const Routepage = () =>{
  return(
    <>
    <BrowserRouter>

    <Linkpage />
    <Routes>
    <Route index path='/' element={<Sender/>}/>
    {/* <Route exact path="/mediator"  element={<Mediator/> } /> */}
    <Route exact path="/receiver"  element={<Receiver /> } />
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default Routepage;