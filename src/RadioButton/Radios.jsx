import React, { useState } from 'react';

const Radios = () => {

    const [selectedOption, setSelectedOption] = useState('');
    // State to manage whether the radio buttons are enabled or disabled
    const [isDisabled, setIsDisabled] = useState(false);

    // Handle change in radio button selection
    const handleRadioChange = (e) => {
        setSelectedOption(e.target.value);
    };

    // Handle toggle for enabling/disabling radio buttons
    const toggleDisable = () => {
        setIsDisabled(!isDisabled);
    };

    return (
        <div>
            <h2>Choose your favorite fruit:</h2>

            {/* Button to toggle enable/disable state */}
            <button onClick={toggleDisable}>
                {isDisabled ? 'Enable' : 'Disable'} Radio Buttons
            </button>

            {/* Radio button group */}
            <div>
                <label>
                    <input
                        type="radio"
                        name="fruit"
                        value="Apple"
                        checked={selectedOption === 'Apple'}
                        onChange={handleRadioChange}
                        disabled={isDisabled} // Disable radio button if isDisabled is true
                    />
                    Apple
                </label>
            </div>

            <div>
                <label>
                    <input
                        type="radio"
                        name="fruit"
                        value="Banana"
                        checked={selectedOption === 'Banana'}
                        onChange={handleRadioChange}
                        disabled={isDisabled} // Disable radio button if isDisabled is true
                    />
                    Banana
                </label>
            </div>

            <div>
                <label>
                    <input
                        type="radio"
                        name="fruit"
                        value="Orange"
                        checked={selectedOption === 'Orange'}
                        onChange={handleRadioChange}
                        disabled={isDisabled} // Disable radio button if isDisabled is true
                    />
                    Orange
                </label>
            </div>

            <p>Your selected fruit is: {selectedOption}</p>
        </div>
    );
};

export default Radios;










// import React, { useState } from 'react';
// const Radios = () => {
//     const [selectedOption, setSelectedOption] = useState('')
//     const [disabled, isDisabled] = (false)
//     const ToggleDisabled = () => {
//         disabled(!disabled)
//     }
//     const handleRadioChange = (e) => {
//         setSelectedOption(e.target.value)
//     }
//     return (
//         <>radios

//             <h1>button to toggle enable disable stage</h1>
//             <button onClick={ToggleDisabled} >{isDisabled ? 'Enable' : 'Disable'}disable radio buttons</button>


//             <label>
//                 <input
//                     type="radio"
//                     name="fruit"
//                     value="Apple"
//                     checked={selectedOption === 'Apple'}
//                     onChange={handleRadioChange}
//                     disabled={isDisabled} // Disable radio button if isDisabled is true
//                 />
//                 Apple
//             </label>

//             <input
//                 type='radio'
//                 name='fruit'
//                 value='banana'
//                 checked={selectedOption === 'banana'}
//                 onChange={handleRadioChange}
//                 disabled={isDisabled}
//             />
//             banana
//             <input
//                 type='radio'
//                 value="mango"
//                 checked={selectedOption === 'mango'}
//                 onChange={handleRadioChange}
//                 disabled={isDisabled}
//             />
//             mango
//             <p>Your selected fruit is: {selectedOption}</p>
//         </>




//     )
// }
// export default Radios