import React from 'react';


const Multiple = () => {
    let a = 'sangeetha';
    let b = 'pranitha';
    let c = 'varshitha';
    let d = 'anitha ';

    let out = [a, b, c, d];
    console.log(out, 'out');

    return (
        <div>
            <h1>Hello StackBlitz!</h1>
            <p>Start editing to see some magic happen :)</p>
            {out.map((item) => (
                <li> {item} </li>
            ))}
            <p> Array method </p>
            {Array.from([a, b, c, d]).map((items) => (
                <li>{items}</li>
            ))}
            1
        </div>
    );
}
export default Multiple;