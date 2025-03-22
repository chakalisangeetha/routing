// import React, { useState } from 'react';
// const Usecheck = () => {
//     const [hideTable, setHideTable] = useState(false)
//     const [checked, setChecked] = useState(true);
//     const [hide, setHide] = useState(true)
//     const [first, setFirst] = useState(true)
//     const [second, setSecond] = useState(true)
//     const [third, setThird] = useState(true)
//     const Border = { border: '1px solid black' };
//     const myArray = [
//         { fname: 'seetha', lname: 'geetha', email: 'seetha@gmail.com', phn: '1234567890', },
//         { fname: 'varsha', lname: 'varshitha', email: 'varshitha@gmail.com', phn: '1234567890' },
//         { fname: 'dolly', lname: 'akshaya', email: 'akshaya@gmail.com', phn: '1234567890' },
//         { fname: 'pranita', lname: 'baby', email: 'baby@gmail.com', phn: '1234567890' },
//     ];

//     const handleShow = () => {
//         setHideTable(!hideTable)
//     }
//     return (
//         <div>
//             <button onClick={handleShow}>show /hide</button>
//             <div className='list'>
//                 {hideTable && <div>
//                     <div>
//                         <label>
//                             <input
//                                 type="checkbox"
//                                 checked={!checked}
//                                 onChange={(e) => setChecked(!checked)}
//                             />
//                             hide s no
//                         </label>
//                     </div>
//                     <div>
//                         <label>
//                             <input
//                                 type="checkbox"
//                                 checked={!hide}
//                                 onChange={(e) => setHide(!hide)}
//                             />
//                             hide fname
//                         </label>
//                     </div>

//                     <div>
//                         <label>
//                             <input
//                                 type="checkbox"
//                                 checked={!first}
//                                 onChange={(e) => setFirst(!first)}
//                             />
//                             hide lname
//                         </label>
//                     </div>


//                     <div>
//                         <label>
//                             <input
//                                 type="checkbox"
//                                 checked={!second}
//                                 onChange={(e) => setSecond(!second)}
//                             />
//                             hide email
//                         </label>
//                     </div>



//                     <div>
//                         <label>
//                             <input
//                                 type="checkbox"
//                                 checked={!third}
//                                 onChange={(e) => setThird(!third)}
//                             />
//                             hide phn
//                         </label>
//                     </div>
//                 </div>

//                 }
//             </div>

//             <form>


//                 <table>
//                     <thead>
//                         <tr>
//                             {checked && <th style={Border}>S no </th>}
//                             {hide && <th style={Border}>Fname</th>}
//                             {first && <th style={Border}>Lname</th>}
//                             {second && <th style={Border}>Email</th>}
//                             {third && <th style={Border}>Phone</th>}
//                         </tr>
//                     </thead>
//                     {
//                         myArray.map((item, index) => {
//                             return (

//                                 <tr>
//                                     {checked && <td style={Border} >{index + 1}</td>}
//                                     {hide && <td style={Border} >{item.fname}</td>}
//                                     {first && <td style={Border} >{item.lname}</td>}
//                                     {second && <td style={Border} >{item.email}</td>}
//                                     {third && <td style={Border} >{item.phn}</td>}

//                                 </tr>

//                             )
//                         })}

//                 </table>
//             </form>
//         </div>
//     )
// }
// export default Usecheck;












import React, { useState } from 'react';
const Usecheck = () => {
//   const [data, setData] = useState(true);
  const [hideTable, setHideTable] = useState(false);
  const [info, setInfo] = useState(true);
  const [zero, setZero] = useState(true);
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(true);
  const [third, setThird] = useState(true);
  const [data, setData] = useState('');  
  const Border = { border: '1px solid black' };
  
  const myArray = [
    {
      fname: 'seetha',
      lname: 'geetha',
      email: 'seetha@gmail.com',
      phn: '1234567890',
    },
    {
      fname: 'varsha',
      lname: 'varshitha',
      email: 'varshitha@gmail.com',
      phn: '1234567890',
    },
    {
      fname: 'dolly',
      lname: 'akshaya',
      email: 'akshaya@gmail.com',
      phn: '1234567890',
    },
    {
      fname: 'pranita',
      lname: 'baby',
      email: 'baby@gmail.com',
      phn: '1234567890',
    },
  ];

  const handleShow = () => {
    setHideTable(!hideTable);
  };

  const handleDataHide = (e) => {
    setData(e.target.value);
  };

  return (
    <div>
      <button onClick={handleShow}>show /hide</button>

      <div className="list">
        {hideTable && (
          <div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={!info}
                  onChange={(e) => setInfo(!info)}
                />
                hide s no
              </label>
            </div>

            <div>
              <label>
                <input
                  type="checkbox"
                  checked={!zero}
                  onChange={(e) => setZero(!zero)}
                />
                hide fname
              </label>
            </div>

            <div>
              <label>
                <input
                  type="checkbox"
                  checked={!first}
                  onChange={(e) => setFirst(!first)}
                />
                hide lname
              </label>
            </div>

            <div>
              <label>
                <input
                  type="checkbox"
                  checked={!second}
                  onChange={(e) => setSecond(!second)}
                />
                hide email
              </label>
            </div>

            <div>
              <label>
                <input
                  type="checkbox"
                  checked={!third}
                  onChange={(e) => setThird(!third)}
                />
                hide phn
              </label>
            </div>
          </div>
        )}
      </div>

      <div>
        <label>enter serial number to hide row (eg:1): </label>
        <input 
          type="number" 
          value={data} 
          onChange={handleDataHide} 
          placeholder="Enter serial number"
        />
      </div>

      <form>
        <table>
          <thead>
            <tr>
              {info && <th style={Border}>S no </th>}
              {zero && <th style={Border}>Fname</th>}
              {first && <th style={Border}>Lname</th>}
              {second && <th style={Border}>Email</th>}
              {third && <th style={Border}>Phone</th>}
            </tr>
          </thead>
          {myArray.map((item, index) => {

            if (data && parseInt(data) === index + 1) {
              return null;
            }

            // if (data && +data === index + 1) {
            //     return null;
            //   }
            return (
              <tr key={index}>
                {info && <td style={Border}>{index + 1}</td>}
                {zero && <td style={Border}>{item.fname}</td>}
                {first && <td style={Border}>{item.lname}</td>}
                {second && <td style={Border}>{item.email}</td>}
                {third && <td style={Border}>{item.phn}</td>}
              </tr>
            );
          })}
        </table>
      </form>
    </div>
  );
};

export default Usecheck;



// import React, { useState } from 'react';

// const Usecheck = () => {
//   const [hideTable, setHideTable] = useState(false);
//   const [infi, setInfi] = useState(true);
//   const [zero, setZero] = useState(true);
//   const [first, setFirst] = useState(true);
//   const [second, setSecond] = useState(true);
//   const [third, setThird] = useState(true);
//   const [data, setData] = useState('');
//   const [hiddenSerialNumbers, setHiddenSerialNumbers] = useState([]); // Store entered serial numbers
//   const Border = { border: '1px solid black' };

//   const myArray = [
//     { fname: 'seetha', lname: 'geetha', email: 'seetha@gmail.com', phn: '1234567890' },
//     { fname: 'varsha', lname: 'varshitha', email: 'varshitha@gmail.com', phn: '1234567890' },
//     { fname: 'dolly', lname: 'akshaya', email: 'akshaya@gmail.com', phn: '1234567890' },
//     { fname: 'pranita', lname: 'baby', email: 'baby@gmail.com', phn: '1234567890' },
//   ];

//   const handleShow = () => {
//     setHideTable(!hideTable);
//   };

//   const handleDataChange = (e) => {
//     const enteredSerial = parseInt(e.target.value, 10);
//     setData(e.target.value);

//     // Add the entered serial number to the hidden list if it's valid and not already added
//     if (!isNaN(enteredSerial) && !hiddenSerialNumbers.includes(enteredSerial)) {
//       setHiddenSerialNumbers((prev) => [...prev, enteredSerial]);
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleShow}>show / hide</button>

//       <div className="list">
//         {hideTable && (
//           <div>
//             <div>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={!infi}
//                   onChange={(e) => setInfi(!infi)}
//                 />
//                 hide s no
//               </label>
//             </div>

//             <div>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={!zero}
//                   onChange={(e) => setZero(!zero)}
//                 />
//                 hide fname
//               </label>
//             </div>

//             <div>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={!first}
//                   onChange={(e) => setFirst(!first)}
//                 />
//                 hide lname
//               </label>
//             </div>

//             <div>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={!second}
//                   onChange={(e) => setSecond(!second)}
//                 />
//                 hide email
//               </label>
//             </div>

//             <div>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={!third}
//                   onChange={(e) => setThird(!third)}
//                 />
//                 hide phn
//               </label>
//             </div>
//           </div>
//         )}
//       </div>

//       <div>
//         <label>Enter serial number to hide rows (e.g., 1): </label>
//         <input 
//           type="number" 
//           value={data} 
//           onChange={handleDataChange} 
//           placeholder="Enter serial number"
//         />
//       </div>

//       <form>
//         <table>
//           <thead>
//             <tr>
//               {infi && <th style={Border}>S no </th>}
//               {zero && <th style={Border}>Fname</th>}
//               {first && <th style={Border}>Lname</th>}
//               {second && <th style={Border}>Email</th>}
//               {third && <th style={Border}>Phone</th>}
//             </tr>
//           </thead>
//           <tbody>
//             {myArray.map((item, index) => {
//               const serialNumber = index + 1;

//               // Hide rows with serial numbers in the hiddenSerialNumbers array
//               if (hiddenSerialNumbers.includes(serialNumber)) {
//                 return null;
//               }

//               return (
//                 <tr key={index}>
//                   {infi && <td style={Border}>{serialNumber}</td>}
//                   {zero && <td style={Border}>{item.fname}</td>}
//                   {first && <td style={Border}>{item.lname}</td>}
//                   {second && <td style={Border}>{item.email}</td>}
//                   {third && <td style={Border}>{item.phn}</td>}
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </form>
//     </div>
//   );
// };

// export default Usecheck;


      

