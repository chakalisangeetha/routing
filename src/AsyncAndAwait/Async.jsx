import React, { useState, useEffect } from 'react';
const Async = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //if we want to throw an error or else show the errors on ui then we have to use try method
  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve, reject) => setTimeout(resolve, 2000)
        )
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
        setLoading(false)
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
   
    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <h1>Fetched Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
export default Async;












// import { useEffect, useState } from "react";

// function Async() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos/1")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setData(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return <pre>{JSON.stringify(data, null, 2)}</pre>;
// }

// export default Async;


















