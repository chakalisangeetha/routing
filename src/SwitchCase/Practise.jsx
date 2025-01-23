import React ,{useState,useEffect} from 'react';
const Practise = () =>{
  const [message, setMessage] = useState(''); 
  const [msg ,setMsg] = useState('')

  useEffect(()=>{
  if(message > 0 && message <= 10) {
      setMsg(message + " between 0 to 10")
    }else if(message >= 10 && message <= 20){
       setMsg(message + " between 10 to 20")
    } else if(message >= 21 && message <= 30){
      setMsg(message + " between 21 to 30")
   }else if(message >= 31 && message <= 40){
    setMsg(message + " between 31 to 40")
 }else if(message > 40 ){
    setMsg(message + 'above 40')
 }
    else {
      setMsg('')
    }
  },[message])

  const handleChange = event => {
   console.log( typeof (event.target.value) , '6=');
 
    let num = Number(event.target.value)
    setMessage(num);

    // if(num > 0 && num < 10) {
    //   setMsg(num + " between 0 to 10")
    // }else if(num > 10 && num < 20){
    //    setMsg(num + " between 10 to 20")
    // } 
    // else {
    //   setMsg(num + ' above 10')
    // }
   
  };

  return(
  <div>
  <input
    type="number"
    onChange={handleChange}
    value={message}
  />
  <h2>
     {/* {message == 56 ?'Above 55' : 'Between 0 and 55'} */}
{msg}
   </h2>
 
 
</div>
  )
}
export default Practise;