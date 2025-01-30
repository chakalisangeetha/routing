import React, { useState } from 'react';

const ChangeLight = () => {
  const [light, setLight] = useState('red');

  const nextLight = {
    red: 'yellow',
    yellow: 'green',
    green: 'red'
  };

  const handleClick = () => {
    setLight(nextLight[light]);
  };

  return (
    <div>
      <div style={{ height: '100px', width: '100px', backgroundColor: light }}></div>
      <button onClick={handleClick}>Change Light</button>
    </div>
  );
};

export default ChangeLigh ;