import React from 'react';
// import './style.css';

const Replacing = () => {
  const Data = [
    { name: 'gova', job: 'ui developer', place: 'dmm' },
    { name: 'geetha', job: 'ui developer', place: 'dmm' },
    { name: 'rama', job: 'ui developer', place: 'dmm' },
    { name: 'geetha', job: 'ui developer', place: 'dmm' },
    { name: 'krishna', job: 'ui developer', place: 'dmm' },
  ];
  console.log(Data, ' 13==');

  Data.forEach((item) => {
    if (item.name == 'geetha') {
      item.name = 'SAANVIKA';
    }
  });
  console.log(Data, '20==');

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {Data.forEach((item) => {
        if (item.name == 'krishna') {
          item.name = 'pandu';
        }
      })}
    </div>
  );
}
export default Replacing;