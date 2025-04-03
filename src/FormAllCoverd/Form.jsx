// import React, { useState } from 'react';
// import Table from './Table';
// import { getByTestId } from '@testing-library/react';
// const Form = (props) => {
//   const [togglebtn, setTogglebtn] = useState(false);
//   const [editId, setEditId] = useState(null);
//   const [searchInput, setSearchInput] = useState('');
//   const [showform, setShowForm] = useState(false);
//   const [showTable, setShowTable] = useState(false);
//   const [dataList, setDataList] = useState([]);
//   const [data, setData] = useState({
//     firstname: '',
//     lastname: '',
//     email: '',
//   });
//   const { firstname, lastname, email } = data;

//   const Changehandler = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value })
//     // if (e.currentTarget.value.chatAt(0) == '') {
//     //   e.target.value = e.target.value.replace(/\s/g, '');
//     // }
//     // setData({ ...data, [e.target.name]: e.target.value });
//   }

//   const Openform = () => {
//     setShowForm(!showform);
//     setShowTable(!showTable);
//   };

//   const submithandler = (e) => {
//     console.log(data, 'data');
//     if (!data.firstname || !data.lastname || !data.email) {
//       alert('please fill all the inputs...  ');
//     }

//     // else if (data && togglebtn) {
//     //   setDataList(
//     //     dataList.map((item) => {
//     //       if (item.id === editId) {
//     //         return {
//     //           ...item,
//     //           Fname: data.firstname,
//     //           Lname: data.lastname,
//     //           Email: data.email,
//     //         };
//     //       }
//     //       return item;
//     //     })
//     //   );

//     //   setTogglebtn(false);
//     //   setEditId(null);
//     //   setData({
//     //     firstname: '',
//     //     lastname: '',
//     //     email: '',
//     //   });
//     //   setShowForm(false);
//     //   setShowTable(true);
//     // } 


//     else if (data && togglebtn) {

//       // alert('edit logic')

//       let afterEdit = dataList.map((item) => {
//         if (item.id == editId) {
//           return {
//             ...item,
//             title1: data.Name,
//             title2: data.Place,
//             title3: data.Phone,
//           }
//         }
//         return item;
//       })
//       setDataList(afterEdit)
//       console.log(afterEdit, '43==')
//       setTogglebtn(false)
//       setEditId(null)
//     }

//     else {
//       const newItem = {
//         id: new Date().getTime().toString(),
//         Fname: data.firstname,
//         Lname: data.lastname,
//         Email: data.email,
//       };
//       setDataList([...dataList, newItem]);
//       setData({
//         firstname: '',
//         lastname: '',
//         email: '',
//       });
//       setShowForm(false);
//       setShowTable(true);

//       setData([...dataList, newItem])
//       setData({
//         firstname: '',
//         lastname: '',
//         email: '',
//       });
//       setShowForm(false);
//       setShowTable(true);
//     }
//     console.log(dataList, 'list');
//   };

//   const Onsearch = (e) => {
//     if (e.currentTarget.value.charAt(0) == ' ') {
//       e.target.value = e.target.value.replace(/\s/g, '');
//     } else {
//       const searchname = e.target.value;
//       setSearchInput(searchname);
//     }
//   };

//   const filtereddata = dataList.filter((item) =>
//     item.Fname.toLowerCase().includes(searchInput.toLowerCase())
//   );
//   const DeleteItem = (getid) => {
//     console.log(getid, 'id');
//     const deleteditem = dataList.filter((item) => item.id !== getid);
//     setDataList(deleteditem);
//   };

//   const editItem = (getid) => {
//     console.log(getid, 'edit');
//     const editeddata = dataList.find((item) => item.id == getid);
//     console.log(editeddata, 'editeddata');
//     setTogglebtn(true);
//     setShowForm(true);
//     setShowTable(false);
//     setEditId(getid);
//     setData({
//       firstname: editeddata.Fname,
//       lastname: editeddata.Lname,
//       email: editeddata.Email,
//     });
//   };
//   const clearInput = () => {
//     setData({
//       firstname: '',
//       lastname: '',
//       email: '',
//     });
//     togglebtn ? togglebtn && submithandler() : setShowForm(true);
//     alert(' your inputs are cleared...  ');
//   };
//   return (
//     <div className="Content">
//       <div className="title">
//         <h4> Todo List with form </h4>
//         <button onClick={Openform}>
//           {showform ? 'close form ' : ' Add New '} {' '}
//         </button>
//       </div>

//       {showform ? (
//         <div className="formdiv">
//           <div className="overlay">
//             <form>
//               <div>
//                 <label> First Name : </label>
//                 <input
//                   type="text"
//                   name="firstname"
//                   value={firstname}
//                   onChange={Changehandler}
//                   required
//                 />
//               </div>

//               <div>
//                 <label> Last Name : </label>
//                 <input
//                   type="text"
//                   name="lastname"
//                   value={lastname}
//                   onChange={Changehandler}
//                   required
//                 />
//               </div>

//               <div>
//                 <label> Email ID : </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={email}
//                   onChange={Changehandler}
//                   required
//                 />
//               </div>

//               <div className="buttonslist">
//                 <button type="submit" onClick={submithandler}>
//                   {togglebtn ? 'Update' : ' Submit '}
//                 </button>
//                 <button type="clear" onClick={clearInput}>
//                   {' '}
//                   Clear{' '}
//                 </button>
//                 <button onClick={Openform} type="close">
//                   {' '}
//                   close{' '}
//                 </button>
//               </div>

//             </form>
//           </div>
//         </div>
//       ) : null}

//       <div>
//         {dataList.length > 0 && showTable && (
//           <div>
//             <div id="searchbox">
//               <label> Search : </label>
//               <input
//                 type="search"
//                 placeholder="enter person firstname to search "
//                 onChange={Onsearch}
//               />
//             </div>
//             <Table data={filtereddata} delete={DeleteItem} edit={editItem} />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
// export default Form;


import React, { useState } from 'react';
import Table from './Table';
const Form = () => {
  const [togglebtn, setTogglebtn] = useState(false);
  const [editId, setEditId] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [showform, setShowForm] = useState(false);
  const [showTable, setShowTable] = useState(true); // Show table by default
  const [dataList, setDataList] = useState([]);
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    email: '',
  });

  const { firstname, lastname, email } = data;

  // Handle input changes
  const Changehandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Toggle form visibility
  const Openform = () => {
    setShowForm(!showform);
    setShowTable(!showTable);
  };

  // Submit handler for both add and update
  const submithandler = (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    if (!data.firstname || !data.lastname || !data.email) {
      alert('Please fill all the inputs...');
    } else if (togglebtn) { // Edit existing item
      const updatedDataList = dataList.map((item) =>
        item.id === editId
          ? { ...item, Fname: data.firstname, Lname: data.lastname, Email: data.email }
          : item
      );
      setDataList(updatedDataList);
      resetForm();
    }

    else { // Add new item
      const newItem = {
        id: new Date().getTime().toString(),
        Fname: data.firstname,
        Lname: data.lastname,
        Email: data.email,
      };
      setDataList([...dataList, newItem]);
      resetForm();
    }
  };
  // Reset the form and state after submitting
  const resetForm = () => {
    setData({
      firstname: '',
      lastname: '',
      email: '',
    });
    setTogglebtn(false);
    setEditId(null);
    setShowForm(false);
    setShowTable(true); // Show the table again after submitting
  };

  // Handle search input
  const Onsearch = (e) => {
    setSearchInput(e.target.value);
  };

  // Filter data based on search input
  const filtereddata = dataList.filter((item) =>
    item.Fname.toLowerCase().includes(searchInput.toLowerCase())
  );

  // Delete item from dataList
  const DeleteItem = (getid) => {
    setDataList(dataList.filter((item) => item.id !== getid));
  };

  // Edit an existing item
  const editItem = (getid) => {
    const editeddata = dataList.find((item) => item.id === getid);
    setTogglebtn(true);
    setShowForm(true);
    setShowTable(false);
    setEditId(getid);
    setData({
      firstname: editeddata.Fname,
      lastname: editeddata.Lname,
      email: editeddata.Email,
    });
  };
  // Clear the form inputs
  const clearInput = () => {
    resetForm();
    alert('Your inputs are cleared...');
  };

  return (
    <div className="Content">
      <div className="title">
        <h4>Todo List with Form</h4>
        <button onClick={Openform}>
          {showform ? 'Close Form' : 'Add New'}
        </button>
      </div>

      {showform && (
        <div className="formdiv">
          <div className="overlay">
            <form onSubmit={submithandler}>
              <div>
                <label>First Name:</label>
                <input
                  type="text"
                  name="firstname"
                  value={firstname}
                  onChange={Changehandler}
                  required
                />
              </div>

              <div>
                <label>Last Name:</label>
                <input
                  type="text"
                  name="lastname"
                  value={lastname}
                  onChange={Changehandler}
                  required
                />
              </div>

              <div>
                <label>Email ID:</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={Changehandler}
                  required
                />
              </div>

              <div className="buttonslist">
                <button type="submit">
                  {togglebtn ? 'Update' : 'Submit'}
                </button>
                <button type="button" onClick={clearInput}>
                  Clear
                </button>
                <button type="button" onClick={Openform}>
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {dataList.length > 0 && showTable && (
        <div>
          <div id="searchbox">
            <label>Search:</label>
            <input
              type="search"
              placeholder="Enter person's first name to search"
              onChange={Onsearch}
            />
          </div>
          <Table data={filtereddata} delete={DeleteItem} edit={editItem} />
        </div>
      )}
    </div>
  );
};

export default Form;
