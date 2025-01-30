import React from 'react';
import {Link} from 'react-router-dom'
const LinkPage = () =>{
  return(
    <>
        <Link to='/'>Sender</Link>
        <Link to="/mediator"> Mediator </Link>
        <Link to="/receiver"> Receiver </Link>
    </>
  )
}
export default LinkPage;