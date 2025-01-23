import React from 'react'
const Search = (props) => {
  return(
    <>
      <lable>SEARCH:</lable>
      <input type='text' 
      placeholder='search title' 
      onChange={props.Search}/>
    </>
  )
}
export default Search;