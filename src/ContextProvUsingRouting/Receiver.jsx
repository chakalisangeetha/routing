import React , {useContext}from 'react'
import {SendContext} from './ContextProv'
const Receiver = () => {
  const [send , setSend] = useContext(SendContext)
  return(
    <>
    Receiver
    {send.map((item)=>
    <div>
      <li>
       {item.id}--{item.name}--{item.place}
      </li>
    </div>
    )}
    </>
  )
}
export default Receiver;

