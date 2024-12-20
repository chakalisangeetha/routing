import React from 'react';


const DeleteAllDataByCilck = () => {
    const DataList = [
        { Name: 'rama', age: 23 },
        { Name: 'gopal', age: 24 },
        { Name: 'krishna', age: 27 },
        { Name: 'goa', age: 25 },
    ];

    const [data, setData] = React.useState(DataList);

    const toggleData = () => {
        if (data.length === 0) {
            setData(DataList); 
        } else {
            setData([]); 
        }
    };

    return (
        <div>
            <h1>Hello StackBlitz!</h1>
            <p>Start editing to see some magic happen :)</p>

            {/* Button to toggle data visibility */}
            <button onClick={toggleData}>
                {data.length === 0 ? 'Show data' : 'Delete data'}
            </button>

            <div>
                {/* Display data only if data exists */}
                {data.length > 0 ? (
                    data.map((item, index) => (
                        <div key={index}>
                            <li>{item.Name}</li>
                            <li>{item.age}</li>
                        </div>
                    ))
                ) : (
                    <p>No data available</p>
                )}
            </div>
        </div>
    );
}
export default DeleteAllDataByCilck;