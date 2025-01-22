

import React, { useState, useMemo } from 'react';

function UseMemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // Simulating an expensive calculation
  const expensiveCalculation = (num) => {
    console.log('Performing expensive calculation...');
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += num;
    }
    return result;
  };

  // Using useMemo to memoize the result of the expensive calculation
  const memoizedResult = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h1>useMemo Example</h1>
      <div>
        <p>Expensive Calculation Result: {memoizedResult}</p>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
      </div>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something"
        />
      </div>
    </div>
  );
}

export default UseMemo;












