import React, { useState, useEffect } from 'react';
const SearchFilter=()=>{
  const [post, setPost] = useState([]);
  const [search, setSearch] = useState('');

  const Border = {
    border: '2px solid black',
  };

  useEffect(() => {
    // Fetch data from API when the component mounts
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setPost(json));
  }, []);

  function ChangeHandler(e) {
    setSearch(e.target.value); // Update the search state when input changes
  }

  function DeleteItem(id) {
    const filtered = post.filter((item) => item.id !== id); // Remove item with given ID
    setPost(filtered); // Update the post state with filtered items
  }

  // Filter products based on search (case-insensitive)
  const filtered = post.filter((item) =>
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="search"
        placeholder="Search by category"
        name="search"
        value={search}
        onChange={ChangeHandler} // Trigger the change handler on input change
      />

      <table>
        <thead>
          <tr>
            <td style={Border}>S.No</td>
            <td style={Border}>Title</td>
            <td style={Border}>Description</td>
            <td style={Border}>Category</td>
            <td style={Border}>Price</td>
            <td style={Border}>Count</td>
            <td style={Border}>Rating</td>
            <td style={Border}>DELETE ITEM</td>
          </tr>
        </thead>
        <tbody>
          {filtered.map((item) => (
            <tr key={item.id}>
              <td style={Border}>{item.id}</td>
              <td style={Border}>{item.title}</td>
              <td style={Border}>{item.description}</td>
              <td style={Border}>{item.category}</td>
              <td style={Border}>$. {item.price}</td>
              <td style={Border}>{item.rating.count}</td>
              <td style={Border}>{item.rating.rate}</td>
              <td style={Border}>
                <button onClick={() => DeleteItem(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default SearchFilter;
