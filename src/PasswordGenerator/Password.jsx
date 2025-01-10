import React, { useState } from 'react';
const numbers = '0123456789';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const splcharacters = '~!@#$%^&*';
const Password = () => {
  const [data, setData] = useState('');
  const [toggle, setToggle] = useState(false);
  const [checkBoxes, setCheckBoxes] = useState({
    isNumber: false,
    isLowercase: true,
    isUpperCase: false,
    isCharacter: false,
  });
  console.log(checkBoxes, '19==');

  const { isNumber, isLowercase, isUpperCase, isCharacter } = checkBoxes;
  console.log(data, '4');

  const handleClick = () => {
    navigator.clipboard
      .writeText(data)
      .then(() => {
        setToggle(!toggle);
        setTimeout(() => setToggle(false), 200); // Reset the button label after 2 seconds
        setData('');
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
      
  };
  const handleCheckboxChange = (e) => {
    setCheckBoxes({ ...checkBoxes, [e.target.name]: e.target.checked });
  };
  const handleGenerate = () => {
    let totalCharacters = '';
    let generatedpassword = '';
    if (isNumber) totalCharacters += numbers;
    if (isUpperCase) totalCharacters += uppercase;
    if (isLowercase) totalCharacters += lowercase;
    if (isCharacter) totalCharacters += splcharacters;
    console.log(totalCharacters, '35==');
    for (let i = 0; i <= 10; i++) {
      generatedpassword +=
        totalCharacters[Math.floor(Math.random() * totalCharacters.length)];
    }
    setData(generatedpassword);
    
  };
  return (
    <>
      <div>
        <lable>Enter</lable>
        <input
          type="text"
          placeholder="enter something"
          value={data}
          name="data"
          onChange={(e) => handleCheckboxChange(e)}
          maxLength={9}
        />
        <button onClick={handleClick}>{toggle ? 'COPIED' : 'COPY'}</button>
      </div>
      {/* <h2>LENGTH OF THE CHARACTER = 9</h2> */}
      <div>
        {' '}
        <input
          type="checkBox"
          checked={isNumber}
          name="isNumber"
          onChange={(e) => handleCheckboxChange(e)}
        />
        Numbers
      </div>

      <div>
        {' '}
        <input
          type="checkBox"
          checked={isCharacter}
          name="isCharacter"
          onChange={(e) => handleCheckboxChange(e)}
        />
        spl Character
      </div>

      <div>
        {' '}
        <input
          type="checkBox"
          checked={isLowercase}
          name="isLowercase"
          onChange={(e) => handleCheckboxChange(e)}
        />
        toLowerCase
      </div>

      <div>
        {' '}
        <input
          type="checkBox"
          checked={isUpperCase}
          name="isUpperCase"
          onChange={(e) => handleCheckboxChange(e)}
        />
        toUpperCase
      </div>

      <button onClick={handleGenerate}>GENERATE PASSWORD</button>
    </>
  );
};
export default Password ;
    
