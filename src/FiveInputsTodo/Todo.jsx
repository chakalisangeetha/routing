import React,{useState} from 'react'
import Search from './Search'
import Table from './Table'
import { useNavigate } from "react-router-dom"
const Todo = () =>{
  const [editid,setEditId]=useState(null)
  const [toggleBtn,setToggleBtn]=useState(false)
  const [store,setStore] =  useState([])
  const [searchInput,setSearchInput]=useState('')
  const [dark,setDark]=useState(false)
  const [data,setData] = useState({
    Name : '',
    Place : '',
    Phone : '',
    Email : '',
    Address : '',
  })
  const{Name , Place , Phone , Email , Address}=data
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
 console.log(useNavigate , '21')
   let navigate = useNavigate()

  const handleClick = (e) => {
    if(!data.Name || !data.Place || !data.Phone || !data.Email || !data.Address){
      alert("please enter your credentials")
    }else if(data && toggleBtn){
      
      // alert('edic logic')
      
      let afterEdit = store.map((item) => {
        if(item.id == editid){
          return{...item,
            title1:data.Name,
            title2:data.Place,
            title3:data.Phone,
            title4:data.Email,
            title5:data.Address,
          }
        }
        return item;
      })
      setStore(afterEdit)  
      console.log(afterEdit,'43==')
      setToggleBtn(false)
      setEditId(null)
    }  
    else{
      let fileItem={
        id:new Date().getTime().toString(), 
        title1:data.Name,
        title2:data.Place,
        title3:data.Phone,
        title4:data.Email,
        title5:data.Address,
      }
      setStore([...store,fileItem])
      console.log(store,'123')
    }
       e.preventDefault();
        console.log(data,'22')
        console.log(data.Name,'33')
        setData({
          Name: '',
          Place: '',
          Phone: '',
          Email : '',
          Address : '',
        })
      }
   const deleteFile = (getid)=>{
   console.log(getid,'55==')
 
   let dltFile=store.filter((item)=>item.id !== getid)
   setStore(dltFile);
   console.log(dltFile,'66==') 
   } 

   const onSearch=(e)=>{
    setSearchInput(e.target.value)
   }
   
    let storeList=store.filter((item)=>item.title1.includes(searchInput))
    console.log(storeList,'82')

    const editItem = (id) =>{
      console.log(id,'11')

      let editedItem = store.find((item) => item.id == id);
      console.log( editedItem ,"edit")
      setData({
         Name: editedItem.title1,
         Place: editedItem.title2,
         Phone: editedItem.title3,             
      })   

      setToggleBtn(true);
      setEditId(id)

    }

    const sendData = (id) => {
      navigate("/details", {state : id })
      }
 
  return(
    <>
    todothree
    <h2>Enter your credentials:</h2>
    <form>

    <div>
     <label for="Name">Name:</label>
         <input type="text" 
          name="Name" 
          value={Name}
          placeHolder="Enter Name" 
          onChange={handleChange}></input>
       </div>

        <div>
         <label for="Place">Place:</label>
         <input type="text" 
          name="Place" 
          value={Place}
          placeHolder="Enter Place" 
          onChange={handleChange}></input>
     </div>

         <div>
         <label for="Phone">Phone:</label>
           <input type="number" 
           name="Phone"
           value={Phone} 
           placeHolder="Enter Phone" 
           onChange={handleChange}></input>
           </div>
    
           <div>
         <label for="Email">Email:</label>
           <input type="Email" 
           name="Email"
           value={Email} 
           placeHolder="Enter Email" 
           onChange={handleChange}></input>
           </div>

           <div>
         <label for="Address">Address:</label>
           <input type="Address" 
           name="Address"
           value={Address} 
           placeHolder="Enter Address" 
           onChange={handleChange}></input>
           </div>
<button type="button" onClick={handleClick} style={{cursor:"pointer"}}>{toggleBtn ? 'UPDATE' : 'SUBMIT'}</button>
      </form>
      <div>
    {store && store.length > 0 && 
    <div className='hidebtn'>
    <Search Search={onSearch} />

    <button onClick={() => setDark(!dark)}>
      {dark? "darkMode " : "lightMode"}
    </button>
  

   
    <Table
     storeData={storeList} 
     delete={deleteFile} 
     mode={dark}
     edit={editItem}
     send={sendData}
     />
    
    </div>
    }
    </div>
    </>
  )
}
export default Todo;