import React, { useEffect, useState } from "react";
const Filter2 = () => {
  const string = "hello java script";
  const vowels = ["a", "e", "i", "o", "u"];
  const [count, setCount] = useState(0);

  //if we want to use forEach::::

  // const getCount = () => {
  //   const characters = string.split("");
  //   console.log(characters);
  //   characters.forEach((item) => {
  //     if (vowels.includes(item)) {
  //       console.log(item, "8==");
  //       setCount((preCount) => preCount + 1);
  //     }
  //   });
  // };

  //if we want to use Loop:::
  const getCount = () => {
    for (let i = 0; i < string.length; i++) {
      if (vowels.includes(string[i])) {
        setCount((preCount) => preCount + 1);
      }
    }
  };

  return (
    <>
      string
      {count}
      <button onClick={getCount}>getcount</button>
    </>
  );
};
export default Filter2;


