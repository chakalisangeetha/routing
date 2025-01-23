import React, { useState } from 'react';
import './Style.css'
const Change = () => {
    const[toggle ,setToggle]=useState(0)
    const myArray = ['seetha' , 'geetha' , 'reetha' ,'neetha'];
    const handleClick =(ind)=>{
        setToggle(ind);
    }
    return (  
        <div>
            <div className='sidebar'>
            {
                myArray.map((item , index) => (
                    <li className={index === toggle ?'darkModecss':'lightModecss'}
                    onClick={()=>handleClick(index)}>

                    {item}

                    </li>
                ))
            }
         </div>
        </div>
    )
}
export default Change;



