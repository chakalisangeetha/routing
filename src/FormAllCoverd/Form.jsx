import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from './Table';
const Formpage = (props) => {
  const navigate = useNavigate();
  const [togglebtn, setTogglebtn] = useState(false);
  const [editId, setEditId] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [showform, setShowForm] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [dataList, setDataList] = useState([]);
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    email: '',
  });
  const { firstname, lastname, email } = data;
  const Changehandler = (e) => {
    if (e.currentTarget.value.charAt(0) == ' ') {
      e.target.value = e.target.value.replace(/\s/g, '');
    }
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const Openform = () => {
    setShowForm(!showform);
    setShowTable(!showTable);
  };

  const submithandler = (e) => {
    console.log(data, 'data');

    if (!data.firstname || !data.lastname || !data.email) {
      alert('please fill all the inputs...  ');
    } else if (data && togglebtn) {
      setDataList(
        dataList.map((val) => {
          if (val.id === editId) {
            return {
              ...val,
              Fname: data.firstname,
              Lname: data.lastname,
              Email: data.email,
            };
          }
          return val;
        })
      );
      setTogglebtn(false);
      setEditId(null);
      setData({
        firstname: '',
        lastname: '',
        email: '',
      });
      setShowForm(false);
      setShowTable(true);
    } else {
      const newItem = {
        id: new Date().getTime().toString(),
        Fname: data.firstname,
        Lname: data.lastname,
        Email: data.email,
      };
      setDataList([...dataList, newItem]);
      setData({
        firstname: '',
        lastname: '',
        email: '',
      });

      setShowForm(false);
      setShowTable(true);
    }
    console.log(dataList, 'list');
  };

  const Onsearch = (e) => {
    if (e.currentTarget.value.charAt(0) == ' ') {
      e.target.value = e.target.value.replace(/\s/g, '');
    } else {
      const searchname = e.target.value;
      setSearchInput(searchname);
    }
  };

  const filtereddata = dataList.filter((item) =>
    item.Fname.toLowerCase().includes(searchInput.toLowerCase())
  );

  const DeleteItem = (getid) => {
    console.log(getid, 'id');
    const deleteditem = dataList.filter((item) => item.id !== getid);
    setDataList(deleteditem);
  };

  const editItem = (getid) => {
    console.log(getid, 'edit');
    const editeddata = dataList.find((item) => item.id == getid);
    console.log(editeddata, 'editeddata');
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

  const clearInput = () => {
    setData({
      firstname: '',
      lastname: '',
      email: '',
    });
    togglebtn ? togglebtn && submithandler() : setShowForm(true);
    alert(' your input are cleared...  ');
  };
   
  const sendData=(id)=>{
    navigate('/details', { state: id });
    console.log(id, '101==');
  }
  return (
    <div className="Content">
      <div className="title">
        <h4> Todo List with form </h4>
        <button onClick={Openform}>
          {showform ? 'close form ' : ' Add New '} {' '}
        </button>
      </div>

      {showform ? (
        <div className="formdiv">
          <div className="overlay">
            <form>
              <div>
                <label> First Name : </label>
                <input
                  type="text"
                  name="firstname"
                  value={firstname}
                  onChange={Changehandler}
                  required
                />
              </div>

              <div>
                <label> Last Name : </label>
                <input
                  type="text"
                  name="lastname"
                  value={lastname}
                  onChange={Changehandler}
                  required
                />
              </div>

              <div>
                <label> Email ID : </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={Changehandler}
                  required
                />
              </div>
              <div className="buttonslist">
                <button type="submit" onClick={submithandler}>
                  {togglebtn ? 'Updata' : ' Submit '}
                </button>
                <button type="clear" onClick={clearInput}>
                  {' '}
                  Clear{' '}
                </button>
                <button onClick={Openform} type="close">
                  {' '}
                  close{' '}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      <div>
        {dataList.length > 0 && showTable && (
          <div>
            <div id="searchbox">
              <label> Search : </label>
              <input
                type="search"
                placeholder="enter person firstname to search "
                onChange={Onsearch}
              />
            </div>
            <Table data={filtereddata} delete={DeleteItem} edit={editItem} send={sendData}/>
          </div>
        )}
      </div>
    </div>
  );
}
export default Formpage;
