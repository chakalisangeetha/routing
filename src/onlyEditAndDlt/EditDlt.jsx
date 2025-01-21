
import React, { useState } from 'react';
import Table from './Table';

const EditDlt = () => {
  const [toggle, setToggle] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [list, setList] = useState([]);
  const [data, setData] = useState('');
  const [editingId, setEditingId] = useState(null);  // New state to track the item being edited

  // Handle the input change for the data
  const handleChange = (e) => {
    setData(e.target.value);
  };

  // Handle the submit button click to add or update an item in the list
  const handleClick = (e) => {
    e.preventDefault();

    if (data.trim()) {
      if (toggle) {
        // Update the existing item in the list
        const updatedList = list.map((item) =>
              item.id === editingId ? {...item , title1: data , title2:data.toLowerCase() }: item
        );
        setList(updatedList); // Update the list with the modified item
        setToggle(false); // Reset toggle to switch back to "Submit" mode
        setEditingId(null); // Reset the editingId after update
      } else {
        // Add a new item to the list
        const newItem = {
          id: Date.now(), // Unique ID based on the current timestamp
          title1: data,
          title2: data.toLowerCase(),
        };
        setList([...list, newItem]); // Add the new item to the list
      }
      setData(''); // Clear the input field after submitting
    } else {
      alert('Please enter some data');
    }
  };

  // Filtering the list based on the search input
  const filterList = list.filter((item) =>
    item.title2.toLowerCase().includes(searchInput.toLowerCase())
  );

  // Function to delete an item by ID
  const deleteItem = (getid) => {
    const deletedItem = list.filter((item) => item.id !== getid);
    setList(deletedItem); // Update the list after deletion
  };

  // Function to edit an item by ID
  const editItem = (getid) => {
    const editedItem = list.find((item) => item.id === getid);
    if (editedItem) {
      setData(editedItem.title1); // Set the title1 value of the item to be edited
      setEditingId(getid); // Track which item is being edited
      setToggle(true); // Set toggle to true for "Update" mode
    }
  };

  return (
    <>
      <h4>Edit and Delete</h4>

      <label>Enter Data: </label>
      <input
        type="text"
        value={data}
        placeholder="Enter some data"
        name="data"
        onChange={handleChange}
      />

      <label>Search Input: </label>
      <input
        type="text"
        value={searchInput}
        placeholder="Search data"
        name="searchInput"
        onChange={(e) => setSearchInput(e.target.value)} // Search functionality
      />

      <button type="button" onClick={handleClick}>
        {toggle ? 'UPDATE' : 'SUBMIT'}
      </button>

      <Table delete={deleteItem} edit={editItem} storeData={filterList} />
    </>
  );
};

export default EditDlt;