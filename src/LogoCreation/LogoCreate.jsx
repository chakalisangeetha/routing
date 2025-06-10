import React, { useState } from 'react';
import './Log.css';
import Letter from './Letter'; // ✅ Correct import

const LogoCreate = () => {
  const [name, setName] = useState('');
  const [letter, setLetter] = useState('');

  const handleLogo = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('Enter your name');
    } else {
      setLetter(name[0].toUpperCase());
      setName('');
    }
  };

  return (
    <div>
      <h3>Enter your name to create Logo</h3>
      <input
        value={name}
        type="text"
        placeholder="Enter name..."
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleLogo}>Create</button>

      {/* ✅ Correct component and class */}
      <div>{letter && <Letter logodata={letter} />}</div>
    </div>
  );
};

export default LogoCreate;
