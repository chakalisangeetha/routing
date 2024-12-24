import React, { useState } from "react";

const Disabled = () => {
    const [inputValues, setInputValues] = useState("");
    const [submittedText, setSubmittedText] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [isClicked, setIsClicked] = useState(true);

    const handleSubmit = () => {
        setSubmittedText(inputValues);
        setIsClicked(false); //Change the button text after submitting
        setInputValues('')
    };

    return (
        <>
            <h3>Disable Example</h3>
            <input
                type="text"
                value={inputValues}
                onChange={(e) => setInputValues(e.target.value)}
                placeholder="Enter something"
            />
            <label>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                />
                <h4>   Agree to terms</h4>

            </label>
            <button
                disabled={!inputValues || !isChecked}
                onClick={handleSubmit}
            >
                {isClicked ? "Submit" : "Processing..."}
            </button>
            {submittedText && (
                <div>
                    <h3>Submitted Text</h3>
                    <p>{submittedText}</p>
                </div>
            )}
        </>
    );
};
export default Disabled;







// import React, { useState } from 'react';
// const Disabled = () => {
//   const [data, setData] = useState('');
//   const [isChecked, setIsChecked] = useState(false);
//   const [submittedText, setSubmittedText] = useState('');
//   const [IsClicked , SetIsClicked]=useState(true)
//   const handleSubmit = () => {
//      setSubmittedText(data);
//      setIsClicked(false);
//      setInputValues('')
//   };
//   return (
//     <>
//       example disable
//       <lable>enter something</lable>
//       <input
//         type={text}
//         value={data}
//         name="data"
//         placeholder="enter something"
//         onChange={(e) => setData(e.target.value)}
//       />
//       <lable>
//         <input
//           type={checkbox}
//           checked="isChecked"
//           onChange={() => setIsChecked(e.target.value)}
//         />
//         'Agree to terms'
//       </lable>
//       <button disabled={!data || !isChecked} onClick={handleSubmit}>
//         {isChecked ? 'SUBMIT' : 'PROCESSING'}
//       </button>
//       {submittedText && (
//         <>
//           <h1>submittedText</h1>
//           <p>{submittedText}</p>
//         </>
//       )}
//     </>
//   );
// };
// export default Disabled;
