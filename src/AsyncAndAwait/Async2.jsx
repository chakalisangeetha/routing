import React, { useState } from "react";
const Async2 = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Simulated API call with resolve and reject
  const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.5; // Random success/failure
        if (success) {
          resolve("Data fetched successfully!");
        } else {
          reject("Error: Failed to fetch data.");
        }
      }, 2000)
    });
  };
  // Async function using await
  const handleFetch = async () => {
    setLoading(true);
    setError(null);
    setData(null);
    
    try {
      const result = await fetchData();
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Async/Await Example in React</h2>
      <button onClick={handleFetch} disabled={loading}>
        {loading ? "Loading..." : "Fetch Data"}
      </button>
      {data && <p style={{ color: "green" }}>{data}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Async2;
