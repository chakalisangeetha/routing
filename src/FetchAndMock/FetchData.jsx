import React ,{useState ,useEffect}from 'react';
import MockData from './MockData';

const Fetch = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    //If we do any changes in url then mockdata will display in ui
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((res)=>res.json())
      .then((data)=>setData(data))
  },[])
  console.log(data,'11==')
  console.log(MockData ,'22')
return (
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>title</th>
        <th>title</th>
      
      </tr>
    </thead>
    <tbody>
      {
      (data && data.length > 0 ? data : MockData).map(items=>{
        return(
          <tr>
           
            <td>{items.id}</td>
            <td>{items.title}</td>
           
          </tr>
        )
      })}
    </tbody>
  </table>
)
}
export default Fetch