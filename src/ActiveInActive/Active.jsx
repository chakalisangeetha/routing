import React, { useState } from "react";
const Active = () => {
  const [data, setData] = useState([
    {
      off_label: "Gold Card offer 3422",
      off_status: "Active",
    },
    {
      off_label: "Visa Card offer 6473",
      off_status: "Active",
    },
    {
      off_label: "Platinaum Card offer 0076",
      off_status: "InActive",
    },
    {
      off_label: "Rupay Card offer 7208",
      off_status: "Active",
    },
    {
      off_label: "Visa Platinum Card offer 8002",
      off_status: "InActive",
    },
    {
      off_label: "Visa Gold Card offer 0100",
      off_status: "InProgress",
    },
  ]);




  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const odd = array.filter((item) => item % 2);
  console.log(odd, "ODD");

  const even = array.filter((item) => item % 2 == 0);
  console.log(even, "EVEN");

  const active = data.filter((item) => item.off_status == "Active");
  console.log(active, " ACTIVE::");

  const inactive = data.filter((item) => item.off_status == "InActive");
  console.log(inactive, " INACTIVE::");

  const inprogress = data.filter((item) => item.off_status == "InProgress");
  console.log(inprogress, "INPROGRESS");
  return (

    <>
      <h1>odd</h1>
      <div>
        {odd.map((item) => {
          return <p>{item}</p>;
        })}
      </div>

      <h1>even</h1>
      <div>
        {even.map((item) => {
          return <p>{item}</p>;
        })}
      </div>

      <h1>Active:</h1>
      <div>
        {active.map((item) => {
          return <p>{item.off_label}</p>;
        })}
      </div>

      <h1>InActive</h1>
      <div>
        {inactive.map((item) => {
          return <p>{item.off_label}</p>;
        })}
      </div>

      <h1>InProgress</h1>
      <div>
        {inprogress.map((item) => {
          return <p>{item.off_label}</p>;
        })}
      </div>
    </>
  );
};
export default Active;
