import React, { useState } from 'react';
const Dates = () => {
  const [result, setResult] = useState('');
  const [data, setData] = useState({
    date1: '',
    date2: '',
  });
  const { date1, date2 } = data;

  const 
  handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitValues = (e) => {
    e.preventDefault();
    console.log(data, '10');

    const dd1 = new Date(date1);
    console.log(dd1, '13');

    const dd2 = new Date(date2);
    console.log(dd2, '16');

    const final = dd2 - dd1;
    console.log(final, '19');

    let totaldays = Math.abs(final / (1000 * 60 * 60 * 24));
    console.log(totaldays, '27');

    let years = Math.floor(totaldays / 365);
    let months = Math.floor((totaldays % 365) / 30);
    let days = Math.floor((totaldays % 365) % 30);

    console.log(years, '33');
    console.log(months, '34');
    console.log(days, '35');

    setResult(
      'your age is :' +
        years +
        ' years ' +
        months +
        ' months ' +
        days +
        '  days'
    );
    console.log(years, months, days, 'out');

    setData({
      date1: '',
      date2: '',
    });
  };
  return (
    <>
      <form onSubmit={submitValues}>
        <h1>Enter Dates:</h1>
        <div>
          <input
            type="date"
            value={date1}
            name="date1"
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="date"
            value={date2}
            name="date2"
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
      <h2>{result}</h2>
    </>
  );
};
export default Dates;
