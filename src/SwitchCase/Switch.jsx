import React ,{useState,useEffect} from 'react'
const Switch = () => {
  const [message ,setMessage] = useState('')
  const  [msg , setMsg] = useState('')

  useEffect(() =>{
    switch(true){
      case message > 0 && message < 10 :
      setMsg(message + " between 0 to 10")
      // console.log('between 0 to 10')
      break;
  
      case message >= 10 && message <= 20 :
      setMsg(message + " between 0 to 10")
      // console.log('between 10 to 20')
      break;
  
      case message >= 21 && message <= 30 :
      setMsg(message + " between 21 to 30")
      // console.log('between 20 to 30')
      break;
  
      case message >= 31 && message <= 40 :
      setMsg(message + " between 32 to 40")
      // console.log('between 30 to 40')
      break;
  
      
      case message >= 40  :
      setMsg(message + " Above 40")
      // console.log('between 40 to 50')
      break;
  
    
      } 
  },[message])

  const handleChange = (e) => {
    console.log(typeof(e.target.value) , '6==')

    let num = Number(e.target.value)
    setMessage(num)

    // switch(true){
    // case num > 0 && num < 10 :
    //   setMsg(message + " between 0 to 10")
    // break;

    // case num > 10 && num < 20 :
    //  setMsg(message + " between 0 to 10")
    // break;

    // case num > 20 && num < 30 :
    //  setMsg(message + " between 21 to 30")
    // break;

    // case num > 30 && num < 40 :
    //  setMsg(message + " between 32 to 40")
    // break;

    
    // case num > 40 && num < 50 :
    // setMsg(message + " Above 40")
    // break;

    // default:
    // console.log()
    // }
  };
  
return(
  
  <> 
  <lable>Enter Data</lable>
  <input type='number'
  value={message}
  onChange={handleChange}/>


<h2>{msg}</h2>
  </>
 
 )
}
export default Switch;