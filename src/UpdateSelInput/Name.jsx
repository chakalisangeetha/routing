import React, { useState } from 'react';
const Name = () => {
  const [value, setValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [data, setData] = useState(['apple', 'mango', 'banana', 'orange']);
  const handleClick = (e, item, index) => {
    e.preventDefault();
    setValue(item);
    setEditIndex(index);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    const dummy = [...data];
    dummy[editIndex] = value;
    setData(dummy);
    setValue('');
  };
  console.log('IN:::::', editIndex, value);
  return (
    <>
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={handleUpdate}>Update</button>
      ARRAY OF STRINGS
      {data.map((item, index) => {
        return <li onClick={(e) => handleClick(e, item, index)}>{item}</li>;
      })}
    </>
  );
};
export default Name;
