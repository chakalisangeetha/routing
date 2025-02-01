import React, { useState, useEffect } from "react";
const Cases = ({ a, b }) => {
  const [data, setData] = useState(0);
  const [greeting, setGreeting] = useState("");
  const [text, setText] = useState(0);
  const [minus ,setMinus]=useState(0);
  const add = (a, b) => {
    return a + b;
  };
  const multiplying = (a, b) => {
    return a * b;
  };

  const sub=(a,b)=>{
    return a-b;
  }
  useEffect(() => {
    const value = add(a, b);
    setData(value);
    setGreeting("HELLO GRACEFULL");
    const values = multiplying(a, b);
    setText(values);
    const substract=sub(a,b);
    setMinus(substract);
  }, [a, b]);

  return (
    <>
      <p>Addition Result: {data}</p>
      <p>greetings: {greeting}</p>
      <p>multiplication Result: {text}</p>
      <p>substract Result:{minus}</p>
      </>
  );
};
export default  Cases;
