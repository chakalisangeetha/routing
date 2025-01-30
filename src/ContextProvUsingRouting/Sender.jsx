import React , {useContext} from 'react'
import {SendContext} from './ContextProv'
const Sender = () => {
  const [send , setSend] = useContext(SendContext)
  const array = [
    {id:1 , name:'seetha' , place:'hyd'},
    {id:2 , name:'geetha' , place:'hyd'},
    {id:3 , name:'neetha' , place:'hyd'},
    {id:4 , name:'keetha' , place:'hyd'},
  ]
  const setArray = (getArray) =>{
 console.log(getArray , '12==')
 setSend([...send , getArray])
 console.log(send , '14==')
  }
  return(
    <>
    Sender
    {array.map((item)=>
    <div>
      <li>{item.name}--{item.place}
      <button onClick={()=>setArray(item)}>show data</button>
      </li>
    </div>
    )}
    </>
  )
}
export default Sender;