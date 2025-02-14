// import React, { useState } from 'react';

// function Radio() {
//   const [selectedOption, setSelectedOption] = useState('option3');

//   const handleChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   return (
//     <div>
//       <h1>Choose an Option</h1>
//       <label>
//         <input
//           type="radio"
//           value="option1"
//           checked={selectedOption === 'option1'}
//           onChange={handleChange}
//         />
//         Option 1
//       </label>
//       <br />
//       <label>
//         <input
//           type="radio"
//           value="option2"
//           checked={selectedOption === 'option2'}
//           onChange={handleChange}
//         />
//         Option 2
//       </label>
//       <br />
//       <label>
//         <input
//           type="radio"
//           value="option3"
//           checked={selectedOption === 'option3'}
//           onChange={handleChange}
//         />
//         Option 3
//       </label>

//       <div>
//         <h2>Selected Option: {selectedOption}</h2>
//       </div>
//     </div>
//   );
// }

// export default Radio;







import React, { useState } from 'react';
function RadioButtonExample() {
    // State to keep track of selected option
    const [selectedFruit, setSelectedFruit] = useState('');

    // Handle the change when a radio button is selected
    const handleRadioChange = (event) => {
        setSelectedFruit(event.target.value);
    };

    return (
        <div>
            <h2>Select Your Favorite Fruit:</h2>
            <form>
                <label>
                    <input
                        type="radio"
                        name="fruit"
                        value="Apple"
                        checked={selectedFruit === 'Apple'}
                        onChange={handleRadioChange}
                    />
                    Apple
                </label><br />
                <label>
                    <input
                        type="radio"
                        name="fruit"
                        value="Banana"
                        checked={selectedFruit === 'Banana'}
                        onChange={handleRadioChange}
                    />
                    Banana
                </label><br />
                <label>
                    <input
                        type="radio"
                        name="fruit"
                        value="Cherry"
                        checked={selectedFruit === 'Cherry'}
                        onChange={handleRadioChange}
                    />
                    Cherry
                </label><br />
                <label>
                    <input
                        type="radio"
                        name="fruit"
                        value="Orange"
                        checked={selectedFruit === 'Orange'}
                        onChange={handleRadioChange}
                    />
                    Orange
                </label><br /><br />
            </form>
            <div>
                <h3>Selected Fruit: {selectedFruit}</h3>
            </div>
        </div>
    );
}

export default RadioButtonExample;
