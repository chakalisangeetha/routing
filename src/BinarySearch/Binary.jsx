import React, { useState } from 'react';
function BinarySearchComponent() {
    const [arrayInput, setArrayInput] = useState('');
    const [target, setTarget] = useState('');
    const [result, setResult] = useState(null);

    const binarySearch = (arr, target) => {
        let low = 0;
        let high = arr.length - 1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] === target) {
                return mid;
            } else if (arr[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return -1;
    };
    const handleSearch = () => {
        const arr = arrayInput.split(',').map(Number).sort((a, b) => a - b);
        const num = parseInt(target);
        const index = binarySearch(arr, num);
        setResult(index !== -1 ? `Element found at index ${index}` : 'Element not found');
    };
    const handleClear = () => {
        alert('clear');
        setArrayInput('');
        setTarget('');
        setResult(null);
    }
    return (
        <div style={{ padding: '20px' }}>
            <h2>Binary Search</h2>
            <input
                type="text"
                placeholder="Enter sorted numbers (e.g., 1,3,5)"
                value={arrayInput}
                onChange={(e) => setArrayInput(e.target.value)}
                style={{ width: '300px', marginBottom: '10px' }}
            />
            <br />
            <input
                type="text"
                placeholder="Enter number to search"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                style={{ width: '300px', marginBottom: '10px' }}
            />
            <br />
            <button onClick={handleSearch}>Search</button>
            <button onClick={handleClear}>Clear</button>
            <p>{result}</p>
        </div>
    );
}

export default BinarySearchComponent;


// If target < middle → search the left half.

// If target > middle → search the right half.





















