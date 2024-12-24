import React, { useState } from 'react';
import Table from './Table';

const Form=()=> {
  const [data, setData] = useState({
    fullname: '',
    emailid: '',
    Psd: '',
  });
  const { fullname, emailid, Psd } = data;
  const [list, setList] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [toggleBtn, setToggleBtn] = useState(false);
  const [editId, setEditId] = useState(null);
  const [hideTable, setHidetable] = useState(false);
  const [hideForm, setHideForm] = useState(true);

  const Handlechange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    if (!data.fullname || !data.emailid || !data.Psd) {
      alert('plase fill the fields... ');
    } else if (data && toggleBtn) {
      setList(
        list.map((item) => {
          if (item.id == editId) {
            return {
              ...item,
              Fname: fullname,
              EmailId: emailid,
              Password: Psd,
            };
          }
          return item;
        })
      );
      setHideForm(false);
      setHidetable(true);
      setEditId(null);
      setToggleBtn(false);
      setData({
        fullname: '',
        emailid: '',
        Psd: '',
      });
    }

     else {
      let isNew = true;
      list.forEach((obj) => {
        if (obj.EmailId == data.emailid) {
          isNew = false;
        }
      });

      if (isNew) {
        let newItem = {
          id: new Date().getTime().toString(),
          Fname: fullname,
          EmailId: emailid,
          Password: Psd,
        };
        setList([...list, newItem]);
        alert('Data submitted successfully ');
      } 

      else {
        alert('Email id is already exist... ');
      }

      setHideForm(false);
      setHidetable(true);
      setData({
        fullname: '',
        emailid: '',
        Psd: '',
      });
    }

  };
  const DeleteItem = (getid) => {
    console.log(getid, 'id');
    const AfterDelete = list.filter((item) => item.id !== getid);
    setList(AfterDelete);
  };
  const EditItem = (getid) => {
    setHidetable(false);
    setHideForm(true);
    console.log(getid, 'id');
    let editeditem = list.find((item) => item.id == getid);
    console.log(editeditem, 'editeditem');
    setToggleBtn(true);
    setData({
      fullname: editeditem.Fname,
      emailid: editeditem.EmailId,
      Psd: editeditem.Password,
    });
    setEditId(getid);
  };
  const Onsearch = (e) => {
    if (e.currentTarget.value.charAt(0) == ' ') {
      e.target.value = e.target.value.replace(/\s/g, '');
    } else {
      const searchname = e.target.value;
      setSearchInput(searchname);
    }
  };
  const filteredData = list.filter((item) =>
    item.Fname.toLowerCase().includes(searchInput.toLowerCase())
  );

  const clearInputs = (e) => {
    e.preventDefault();
    setData({
      fullname: '',
      emailid: '',
      Psd: '',
    });
  };

  const OpenForm = () => {
    setHideForm(true);
    setHidetable(false);
  };

  const Opentable = () => {
    setHidetable(true);
    setHideForm(false);
  };

  return (
    <div className="formcomp">
      <div className="header">
        <h3> To-Do List with Email Validation </h3>

        <div className="navbttons">
          <div className="openform">
            {hideTable && <button onClick={OpenForm}> Open Form </button>}
          </div>
          <div className="opentable">
            {list.length > 0 && hideForm && (
              <button onClick={Opentable}> open Table </button>
            )}
          </div>
        </div>
      </div>
      <form>
        {hideForm && (
          <div className="forminputs">
            <div className="form">
              <div className="namefield">
                <label> Name : </label>
                <input
                  type="text"
                  placeholder="enter your name "
                  name="fullname"
                  value={fullname}
                  onChange={Handlechange}
                  minLength={2}
                />
              </div>

              <div className="emailfield">
                <label> Email Id : </label>
                <input
                  type="email"
                  placeholder="enter your email"
                  name="emailid"
                  value={emailid}
                  onChange={Handlechange}
                />
              </div>

              <div className="passwordfield">
                <label> Password : </label>
                <input
                  type="password"
                  placeholder="enter the password "
                  name="Psd"
                  value={Psd}
                  onChange={Handlechange}
                />
              </div>

              <div className="buttondiv">
                <button
                  onClick={HandleSubmit}
                  disabled={
                    !data.fullname || !data.emailid || !data.Psd ? true : false
                  }
                >
                  {toggleBtn ? 'Updata' : ' Submit '}
                </button>
                <button onClick={clearInputs}> Clear </button>
              </div>
            </div>
          </div>
        )}
      </form>
      <div>
        {list.length > 0 && hideTable && (
          <div className="form">
            <div className="search">
              <label> Search : </label>
              <input
                type="search"
                olaceHolder="enter the name to find "
                onChange={Onsearch}
              />
            </div>
            <div className="tablecomp">
              <Table
                listData={filteredData}
                delete={DeleteItem}
                edit={EditItem}
              />
            </div>
          </div>
        )}{' '}
      </div>
    </div>
  );
}
export default Form;