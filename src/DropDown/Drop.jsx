import React , {useState,useEffect} from 'react'
import './Style.css'
const Drop = () => {
  const [data,setData]=useState([])
  const [store , setStore]=useState('')
  useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
      .then((res)=>res.json())
      .then((data)=>setData(data))
  },[])
  console.log(data,'11==')


let afterfilter = data.filter((item)=>item.category.includes(store))
console.log(afterfilter,'17') 

console.log(store,'30')
return (
 <>
  <div>
    <select onChange={(e)=>setStore(e.target.value)} >
      <option value='men'>Mens Casual Premium Slim Fit T-Shirts</option>
      <option value='jewelery'>Solid Gold Petite Micropave</option>
      <option value='electronic'>SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s</option>
      <option value='bags'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</option>
    </select>
  </div>

  <div className='flexdisplay'>
  {
    afterfilter.map((item) =>
      <div onClick={''} id="card" key={item.id}>
        <img src={item.image} alt="img" />
        <h6> {item.title} </h6>
        <p> <b>  Price : {item.price} $.  </b> </p>
        <button className='cart'> 
        ADD Cart  
        </button>
      </div>
    )}
</div>
</>
)
}
export default Drop;


