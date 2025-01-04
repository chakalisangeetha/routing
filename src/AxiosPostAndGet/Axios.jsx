import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AxiosTable from './AxiosTable';
import { useNavigate } from 'react-router-dom';
const AxiosPostandGet = () => {
  const navigate = useNavigate();
  const [hideTable, setHideTable] = useState(false);
  const [flag, setFlag] = useState(false);
  const [toggleBtn, setToggleBtn] = useState(false);
  const [editid, setEditId] = useState(null);
  const [apidata, setApiData] = useState([]);
  const [inputData, setInputData] = useState({
    Fname: '',
    Lname: '',
    Email: '',
    Phone: '',
    Age: '',
    Address: '',
  });
  useEffect(() => {
    axios
      .get(
        'https://fir-project-49219-default-rtdb.firebaseio.com/practise.json'
      )
      .then((data) => setApiData(Object.values(data.data)));
  }, [flag]);

  const { Fname, Lname, Email, Phone, Age, Address } = inputData;

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !inputData.Fname ||
      !inputData.Lname ||
      !inputData.Email ||
      !inputData.Phone ||
      !inputData.Age ||
      !inputData.Address
    ) {
      alert('please enter all data');
    } else if (inputData && toggleBtn) {
      alert('edit');

      let afterEdit = inputData.map((item) => {
        if (item.id == editid) {
          return {
            ...item,
            title1: inputData.Fname,
            title2: inputData.Lname,
            title3: inputData.Email,
            title4: inputData.Phone,
            title5: inputData.Age,
            title6: inputData.Address,
          };
        }
        return item;
      });
      setInputData(afterEdit);
      console.log(afterEdit, '211==');
      setToggleBtn(false);
      setEditId(null);
    } else {
      let fileItem = {
        id: new Date().getTime().toString(),
        title1: inputData.Fname,
        title2: inputData.Lname,
        title3: inputData.Email,
        title4: inputData.Phone,
        title5: inputData.Age,
        title6: inputData.Address,
      };
      setHideTable(true);
      axios
        .post(
          'https://fir-project-49219-default-rtdb.firebaseio.com/practise.json',
          fileItem,
          { method: 'post' }
        )
        .then(() => alert('data sent success'));

      setTimeout(() => {
        setFlag(!flag);
      }, 3000);
    }

    setInputData({
      Fname: '',
      Lname: '',
      Email: '',
      Phone: '',
      Age: '',
      Address: '',
    });
    console.log(inputData, '19==');
  };
  console.log(apidata, '39==');

  const deleteItem = (getid) => {
    console.log(getid, '45==');

    let AftrDlt = apidata.filter((item) => item.id !== getid);
    setApiData(AftrDlt);
    console.log(AftrDlt, '49==');
  };
  const editItem = (getid) => {
    console.log(getid, 'edit id');

    let editedItem = apidata.find((item) => item.id == getid);
    console.log(editedItem, '65=');
    setInputData({
      Fname: editedItem.title1,
      Lname: editedItem.title2,
      Email: editedItem.title3,
      Phone: editedItem.title4,
      Gender: editedItem.title5,
      Age: editedItem.title6,
    });

    setEditId(getid);
    setToggleBtn(true);
  };

  const handleShow = () => {
    setHideTable(!hideTable);
  };

  const sendData = (item) => {
    navigate('/details', { state: item });
    console.log(item, '124==');
  };

  return (
    <>
      Task
      {hideTable && (
        <form action="#" onSubmit={handleSubmit} method="post">
          <div>
            <lable>Fname:</lable>
            <input
              type="text"
              placeholder="enter your fname"
              name="Fname"
              value={Fname}
              onChange={handleChange}
            />
          </div>

          <div>
            <lable>Lname:</lable>
            <input
              type="text"
              placeholder="enter your lname"
              name="Lname"
              value={Lname}
              onChange={handleChange}
            />
          </div>

          <div>
            {' '}
            <lable>Email:</lable>
            <input
              type="email"
              placeholder="enter your email"
              name="Email"
              value={Email}
              onChange={handleChange}
            />
          </div>

          <div>
            <lable>Phone:</lable>
            <input
              type="number"
              placeholder="enter your number"
              name="Phone"
              value={Phone}
              onChange={handleChange}
            />
          </div>

          <div>
            <lable>Age:</lable>
            <input
              type="number"
              placeholder="enter your age"
              name="Age"
              value={Age}
              onChange={handleChange}
            />
          </div>

          <div>
            <lable>Address:</lable>
            <input
              type="text"
              placeholder="enter your address"
              name="Address"
              value={Address}
              onChange={handleChange}
            />
          </div>

          <button type="submit">{toggleBtn ? 'UPDATE' : 'ADD'}</button>
        </form>
      )}
      <div>
        <button onClick={handleShow}>show /hide</button>

        <AxiosTable
          arrayItem={apidata}
          delete={deleteItem}
          edit={editItem}
          send={sendData}
        />
      </div>
    </>
  );
};
export default AxiosPostandGet;












