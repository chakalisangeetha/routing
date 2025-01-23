import React, { useState } from 'react';
// import './style.css';
const Fact=()=> {
  const [inputData, setInputData] = useState();
  const [result, setResult] = useState();

  const SubmitHandler = (e) => {
    e.preventDefault();
    let out = factorial(inputData);
    setResult(out);
    setInputData('');
    console.log(out, 'out');
    console.log(inputData, 'inputData');
  };

  function factorial(n) {
    var answer = 1;
    if (n == 0 || n == 1) {
      return answer;
    } else if (n > 1) {
      for (var i = n; i >= 1; i--) {
        answer = answer * i;
      }

      return answer;
    } else {
      return 'number has to be positive.';
    }
  }

  return (
    <div>
      <div className="form">
        <form onSubmit={SubmitHandler}>
          <div>
            <label> Enter the Number : </label>
            <div>
              {' '}
              <input
                type="number"
                placeholder="enter number to find factorial "
                value={inputData}
                name="inputData"
                onChange={(e) => setInputData(e.target.value)}
              />
            </div>
          </div>
          <div>
            <input
              disabled={!inputData ? true : false}
              type="submit"
              value="submit"
            />
          </div>
        </form>
      </div>
      <div> {result && <h4> Result : {result} </h4>}</div>
    </div>
  );
}
export default Fact;