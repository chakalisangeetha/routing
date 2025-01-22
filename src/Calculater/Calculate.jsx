import React, { useState } from "react";
const Calculate = () => {
  const [firstNumber, setfirstNumber] = useState("");
  const [secondNumber, setsecondNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState(null);

  const calculateResult = (firstNumber, secondNumber, operator) => {
    switch (operator) {
      case "+":
        return firstNumber + secondNumber;
      case "-":
        return firstNumber - secondNumber;
      case "*":
        return firstNumber * secondNumber;
      case "/":
        return secondNumber !== 0 ? firstNumber / secondNumber : "Error";
      default:
        return 0;
    }
  };

  const handleCalculate = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    if (!isNaN(num1) && !isNaN(num2) && operator) {
      const calculatedResult = calculateResult(num1, num2, operator);
      setResult(calculatedResult);
    }
  };
  const handleReset = () => {
    alert("reset");
    setfirstNumber("");
    setsecondNumber("");
    setOperator("");
  };
  return (
    <>
      Calculator
      <div> <lable>firstnumber</lable>
      <input
        type="number"
        value={firstNumber}
        onChange={(e) => setfirstNumber(e.target.value)}
      /></div>
      

      <div> <select value={operator} onChange={(e) => setOperator(e.target.value)}>
        operator
        <option type="">select operator</option>
        <option type="+">+</option>
        <option type="-">-</option>
        <option type="*">*</option>
        <option type="/">/</option>
      </select></div>
     
     <div> <input
        type="number"
        value={secondNumber}
        onChange={(e) => setsecondNumber(e.target.value)}
      /></div>
     
      <button onClick={handleCalculate}>Calculate</button>
      <button onClick={handleReset}>reset</button>
      {result !== null && <h2>Result:{result} </h2>}
    </>
  );
};
export default Calculate;
