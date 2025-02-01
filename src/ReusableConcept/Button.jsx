import React from 'react';

// Button component that accepts different props
const Button = ({ text, onClick, color, size }) => {
  const buttonStyles = {
    backgroundColor: color || 'blue',  // Default color if none is provided
    padding: size === 'large' ? '15px 30px' : '10px 20px',  // Size adjustment
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
  };

  return (
    <button style={buttonStyles} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
