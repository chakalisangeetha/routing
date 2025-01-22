import React , {useState} from 'react';
  const Duplicates = () => {
  const [toggle , setToggle] = useState(false)
  let data1 = [
 {id:1 , name:'varsha' , age:'20' , place:'hyd'},
 {id:2 , name:'prani' , age:'30' , place:'hyderabad'},
 {id:3 , name:'geetha' , age:'25' , place:'kp'},
 {id:4 , name:'varshitha' , age:'35' , place:'ts'},
  ]
  
  let data2 = [
    {id:1, name:'varsha' , age:'20' , place:'hyd'},
    {id:2 , name:'akshu' , age:'25' , place:'u pradesh'},
    {id:3 , name:'saanvi' , age:'28' , place:'mp'},
    {id:4 , name:'bablu' , age:'38' , place:'uk'},
  ]
  
let result = data1.filter(({ name }) => !data2.find(o => o.name == name));

let result2 = data2.filter(({ name }) => !data1.find(o => o.name == name)); 


console.log(result,'21')
console.log(result2,'22')

const handleClick = () => {
// alert('yes')
setToggle(!toggle)
}
  return(
    <>
    <button onClick={handleClick}>change data</button>
    {
      (toggle ? result : result2).map((item=>{
        return(
          <li>
            {item.id}--{item.name}--{item.age}--{item.place}
          </li>
        )
      }))
    }
    </>
  )
}
export default Duplicates ;




