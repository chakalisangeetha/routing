import React, { useState } from 'react'
const IfCndtn = () => {
    const [status, setStatus] = useState(false)
    let text = "";
    if (status) {
        text = "ON";
    } else {
        text = "OFF";
    }
    return (
        <>
            <h1>IfConditions:</h1>
            <button onClick={(e) => setStatus(!status)}>Click Me</button>
            status:{text}
        </>
    )
}
export default IfCndtn;











