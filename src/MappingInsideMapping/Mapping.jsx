
import React from 'react';
import './style.css';
const Mapping = () => {
  const a = [ 'sangeetha', 'pandu'];
  const b = ['ramu', 'anitha', 'dolly', 'prani'];
  const c = ['venkat', 'laxmi', 'bubblu', 'varsha'];

  const Finaldata = Array.from([a, b, c]);
  console.log(Finaldata, '9==');

  let finaldata = [...a, ...b, ...c];
  console.log(finaldata, '12==');
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      {Finaldata.map((item) => (
        <div>
          {item.map((val) => (
            <li>
              <b>{val}</b>
            </li>
          ))}
        </div>
      ))}

      <div>
        {finaldata.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    </div>
  );
};
export default Mapping;
