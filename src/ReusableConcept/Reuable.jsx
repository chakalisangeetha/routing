import React from 'react';
import Button from './ReusableConcept/Button'; // Assuming the Button component is in the same directory

const Reusable = () => {
  const handleClick = (message) => {
    alert(message);
  };

  return (
    <div>
      <h1>Reusable Button Example</h1>
      <Button
        text="Click Me"
        onClick={() => handleClick('You clicked the button!')}
        color="green"
        size="large"
      />
      <Button
        text="Submit"
        onClick={() => handleClick('Form submitted!')}
        color="red"
        size="small"
      />
    </div>
  );
};

export default  Reusable;
