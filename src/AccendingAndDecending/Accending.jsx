/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
const Accending = () => {
    const [data, setData] = useState("");
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                console.log(data, "9==");
            });
    }, []);
    const handleIncrease = () => {
        const newData = data.toSorted(function (a, b) {
            return a.title > b.title ? 1 : -1;
        });
        setData(newData);
    };
    const handleDecrease = () => {
        const newData = data.toSorted(function (a, b) {
            return a.title > b.title ? -1 : 1;
        });
        setData(newData);
    };
    return (
        <>
            datafetch
            <button onClick={handleIncrease}>Accending</button>
            <button onClick={handleDecrease}>Decending</button>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>userId</th>
                        <th>title</th>
                    </tr>
                </thead>
            </table>
            <tbody>
                {data &&
                    data.map((item) => {
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.userId}</td>
                                <td>{item.title}</td>
                            </tr>
                        );
                    })}
            </tbody>
        </>
    );
};
export default Accending;