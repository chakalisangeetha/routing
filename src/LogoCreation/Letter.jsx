import React, { useEffect, useState } from 'react';
import './Log.css';

const colors = ['red', 'green', 'blue', 'purple', 'orange'];

const Letter = ({ logodata }) => {
  const [colorClass, setColorClass] = useState('');

  useEffect(() => {
    const random = colors[Math.floor(Math.random() * colors.length)];
    setColorClass(random);
  }, [logodata]); // change color on new letter

  return <div className={`logo ${colorClass}`}>{logodata}</div>;
};

export default Letter;
