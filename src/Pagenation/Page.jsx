import React, { useState, useEffect } from "react";
const 
Page= () => {
  const [data, setData] = useState([]);
  const [pageNumbers, setPageNumbers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showingData, setShowingData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setShowingData(data.slice(0, 10));
      });
  }, []);
  console.log("PAGE:::", data, pageNumbers, currentPage);
  const recordsPerPage = 10;
  useEffect(() => {
    const afterRecord = Math.ceil(data.length / recordsPerPage);
    let futureRecord = [];
    for (let i = 1; i <= afterRecord; i++) {
      futureRecord.push(i);
      console.log("forloop");
    }
    setPageNumbers(futureRecord);
  }, [data]);

  useEffect(() => {
    if (data) {
      const indexOfFirstRecord = (currentPage - 1) * recordsPerPage;
      const indexOfLastRecord = indexOfFirstRecord + recordsPerPage;
      console.log(indexOfLastRecord, indexOfFirstRecord, currentPage, "48==");
      const extractedData = data.slice(
        indexOfFirstRecord,
        indexOfLastRecord,
        "49=="
      );
      setShowingData(extractedData);
    }
  }, [currentPage, data]);

  const handleClick = (num) => {
    setCurrentPage(num);
  };
  return (
    <>
      <div>
        pagenation
        {showingData.map((item) => {
          return <li>{item.title}</li>;
        })}
        <div>
          {pageNumbers?.map((item, index) => {
            return (
              <>
                <button
                  key={item}
                  onClick={() => handleClick(item)}
                  disabled={currentPage === item}
                >
                  {" "}
                  {item}{" "}
                </button>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Page;
