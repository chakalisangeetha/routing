import React from 'react'
import './Todo.css'
const Table = (props) => {
  let storeItem = props.storeData

  return(
      <>
      <div className={props.mode ? "lightModecss" : "darkModecss" }>
           {storeItem.length > 0 ? 
           <table>
           <thead>
             <tr>
               <th>s no</th>
               <th>Name</th>
               <th>Place</th>
               <th>Phone</th>
               <th>Email</th>
               <th>Address</th>
             </tr>
           </thead>
           <tbody>
           {storeItem.map((item,index)=>{
             return(
               <tr>
                 <td>{index+1}</td>
                 <td>{item.title1}</td>
                 <td>{item.title2}</td>
                 <td>{item.title3}</td>
                 <td>{item.title4}</td>
                 <td>{item.title5}</td>
                 <td>
                   <button onClick={() => 
                    props.delete(item.id)}>delete</button>
                 </td>

                 <td>
                   <button onClick={() => 
                    props.edit(item.id)}>Edit</button>
                    </td>
                 
                    <td>
                    <button onClick={() => props.send(item) } > show info  </button>
                    </td>
               </tr>
             )
           })}
           </tbody>
         </table>
            : <h4>Data not found</h4>} 
  </div>
      </>
  )
}
export default Table;