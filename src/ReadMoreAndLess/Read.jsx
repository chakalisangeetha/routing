import React, { useState } from 'react';
const Read = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleContent = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <div>
            <p>
                {isExpanded
                    ? "This is the full content that is displayed when you click 'Read More'. It gives more details and expands the information."
                    : "This is the shorter content that is displayed initially. Click 'Read More' to see the rest of the content."}
            </p>
            <button onClick={toggleContent}>
                {isExpanded ? 'Read Less' : 'Read More'}
            </button>
        </div>
    );
};
export default Read;