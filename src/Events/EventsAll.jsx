import React from "react";
import { useState } from "react";

const EventsAll = () => {
    const [name, setName] = useState("");
    const handleClick = () => {
        // alert("onClick event is triggered");
    };
    const handleDoubleClick = () => {
        alert("onDoubleClick event is triggered");
    };
    const handleChange = (e) => {
        //alert("onChange event is triggered");
        setName(e.target.value);
        setName("")
    };
    const handleKeyDown = () => {
        // alert("onKeyDown event is triggered");
    };
    const handleKeyUp = () => {
        alert("onKeyUp event is triggered");
    };
    const handleMouseOver = () => {
        alert("onMouseOver event is triggered");
    };
    const handleMouseOut = () => {
        alert("onMouseOut event is triggered");
    };
    const handleFocus = () => {
        const inputtag = document.getElementsByTagName("input");
        inputtag[0].style.backgroundColor = "yellow";
    };
    return (
        <div>
            <button onClick={handleClick} onDoubleClick={handleDoubleClick}>
                Click Me
            </button>
            <input
                type="text"
                value={name}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                onKeyUp={handleKeyUp}
                onFocus={handleFocus}
            />
            <h1 onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                This is Heading
            </h1>
        </div>
    );
};

export default EventsAll;
