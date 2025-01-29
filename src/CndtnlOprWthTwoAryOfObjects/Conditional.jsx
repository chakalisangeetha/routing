import React , {useState} from 'react';
const Conditional = ( ) => {
  const [toggle , setToggle] = useState(false)

  const store1 = [
    { name : 'seetha' , place : 'hyd' , age : '20'},
    { name : 'geetha' , place : 'ap' , age : '20'},
    { name : 'neetha' , place : 'kt' , age : '20'},
    { name : 'reetha' , place : 'up' , age : '20'},
  ];
   
  const store2 = [
    { name : 'vidhya' , place : 'hyd' , age : '20'},
    { name : 'akshaya' , place : 'ap' , age : '20'},
    { name : 'varsha' , place : 'kt' , age : '20'},
    { name : 'pranita' , place : 'up' , age : '20'},
  ];
 
  const handleClick = () => {
    // alert('yes')
    setToggle (!toggle) ;
  }
return(
  <>

  <button onClick={handleClick}>Change store</button>
  {
 (toggle ? store1 : store2).map((item) =>{
    return ( 
    <li>
    {item.name} -- {item.place} -- {item.age}
   </li>)
  })}
  
  {/* {
    store2.map((item) =>  
    <li>  {item.name}   </li>
    )
  } */}
  </>
  )
}
export default  Conditional;