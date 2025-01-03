import React, { useState } from "react";
const Store = () => {
  const [data, setData]=useState("");
  const handleFetch = (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/users/4")
      .then((res) => res.json())
      .then((data) => {
        console.log("Data1:::", data, JSON.stringify(data));
        localStorage.setItem("userData", JSON.stringify(data));
      });
  };
  function handleGet(e) {
    e.preventDefault();
    const storageData = JSON.parse(localStorage.getItem("userData"));
    console.log("Data2:::", storageData);
  }
  return (
    <>
      <h2>LocalStorage</h2>
      <button onClick={handleFetch}>fetch data</button>
      <button onClick={handleGet}>get Data</button>
    </>
  );
};
export default Store;


