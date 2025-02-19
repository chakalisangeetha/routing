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
//     const [isDisabled, setIsDisabled] = useState(false)
//     const selectChange=(e)=>{
//         setSelectedOption(e.target.value)
//     }
//     const toggleDisable=()=>{
//         setIsDisabled(!isDisabled)
//         }
//     return (
//         <>radios
//         <button onClick={toggleDisable}>{isDisabled?"enabled":"disabled"}radio button change</button>
//             <div>

//                 <lable> apple </lable>
//                 <input
//                     type='radio'
//                     name='fruit'
//                     value="apple"
//                     onChange={selectChange}
//                     checked={selectedOption === 'apple'}
//                     isDisabled={setIsDisabled}
//                 />
//                 Apple


//                 <lable>  Orange </lable>
//                 <input
//                     type='radio'
//                     name='fruit'
//                     value="Orange"
//                     onChange={selectChange}
//                     checked={selectedOption === 'Orange'}
//                     isDisabled={setIsDisabled}
//                 />
//                 Orange



//                 <lable> Mango </lable>
//                 <input
//                     type='radio'
//                     name='fruit'
//                     value=" Mango"
//                     onChange={selectChange}
//                     checked={selectedOption === 'Mango'}
//                     isDisabled={setIsDisabled}
//                 />
//                 Apple
//             </div>
//         </>
//     )
// }
// export default Radios;